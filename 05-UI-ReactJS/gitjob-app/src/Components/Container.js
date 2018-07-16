import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import JobList from './JobList/JobList';
import './container.css';
import JobDetails from './JobDetails/JobDetails';
import './container.css';


class Container extends Component {
    constructor(props){
       super(props);
       this.state = {
             allJobs : [],
             favJobs : [],
             search: {
               location : '',
               description : '',
               full_time: ''
             },
             jobDetail: []
           }
         this.apiCall = this.apiCall.bind(this);
    }

    // Search Bar functions
    newSearchLocation = (event)=>{
      let newSearch = {...this.state.search};
      newSearch.location = event.target.value;
      this.setState({search: newSearch})
    }

    newSearchDescription = (event)=>{
      let newSearch = {...this.state.search};
      newSearch.description = event.target.value;
      this.setState({search : newSearch});
    }

    newSearchfullTime = (event)=>{
      let newSearch = {...this.state.search};
      newSearch.full_time = event.target.checked;
      this.setState({search : newSearch});
    }

    getJobs = () =>{
      let data = {
        url : '/positions.json?',
        params : this.state.search
      };
      this.apiCall(data);
    }
    // End of search bar functions

    apiCall(config){
      axios.get(config.url,{
        params : config.params
      })
      .then((response)=> {
        console.log(response.data);
        this.setState({allJobs : response.data});
        this.setState({search:{location: '',description: '', full_time: ''}})
      })
      .catch(function (error){
        console.log(error);
      });
    }

    componentDidMount() {
        axios.get('https://jobs.github.com/positions.json?description=python&location=sf&full_time=true')
          .then((res) => { this.setState({ allJobs: res.data});
          })
          .catch((err) => console.log(err));

        this.hydrateStateWithLocalStorage();
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    addFavHandler = (id)=>{
      //const favs = [...this.state.favJobs];
      const newFav = this.state.allJobs.filter(job=>job.id === id);
      if(!this.state.favJobs.includes(newFav[0])){
        const updateFavs = newFav.concat(this.state.favJobs);
        this.setState({favJobs: updateFavs});
        localStorage.setItem("favs", JSON.stringify(updateFavs));
      }
    }

    removeFavHandler = (id)=>{
      const favs = [...this.state.favJobs];
      const updateFavs = favs.filter(job=>job.id !==id);
      this.setState({favJobs: updateFavs});
      localStorage.setItem("favs", JSON.stringify(updateFavs));
    }

    showJobDetailHandler = (job) => {
      this.setState({jobDetail: job});
    }

    componentDidMount() {
      this.hydrateStateWithLocalStorage();
        window.addEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
      this.setState({jobDetail: []});
    }

    hydrateStateWithLocalStorage() {
      for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);

          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }

    saveStateToLocalStorage() {
      this.setState({allJobs:[]});
       for (let key in this.state) {
         localStorage.setItem(key, JSON.stringify(this.state[key]));
       }
    }

    componentWillUnmount() {
      window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
      this.saveStateToLocalStorage();
    }


    render(){
        let showJobDetails;

        if(Object.entries(this.state.jobDetail).length !== 0){
          showJobDetails = (
            <JobDetails
                type = {this.state.jobDetail.type}
                location = {this.state.jobDetail.location}
                title = {this.state.jobDetail.title}
                description = {this.state.jobDetail.description}
                company = {this.state.jobDetail.company}
                company_logo = {this.state.jobDetail.company_logo}
                company_url = {this.state.jobDetail.company_url}
                How_to_apply = {this.state.jobDetail.how_to_apply}
                url = {this.state.jobDetail.url}
            />);

        }else {
          null
        }

        return(
          <div className="container col-12">
            <header className="header col-12">
              <h1>GitHub Jobs</h1>
            </header>

            <SearchBar
              lInput = {(event)=>this.newSearchLocation(event)}
              dInput = {(event)=>this.newSearchDescription(event)}
              cInput = {(event)=>this.newSearchfullTime(event)}
              searchB = {(event)=>this.getJobs()}
              search = {this.state.search}/>

            <div className="resultsSection">
              <div className="list col-4">
                <h3>Results ({this.state.allJobs.length})</h3>
                <JobList
                    showJobDetailHandler = {this.showJobDetailHandler}
                    toggleFav={this.addFavHandler}
                    jobs={this.state.allJobs}/>
              </div>

              <div className="list col-4">
                <h3>My Favorites ({this.state.favJobs.length}) </h3>
                <JobList
                    showJobDetailHandler = {this.showJobDetailHandler}
                    toggleFav={this.removeFavHandler}
                    jobs={this.state.favJobs}/>
                </div>
            </div>
            <div className="detailsSection">
                {showJobDetails}
            </div>
          </div>
        )
    }
}

export default Container
