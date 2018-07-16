import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import JobList from './JobList/JobList';
import './container.css';
import JobDetails from './JobDetails/JobDetails';
import './container.css';


class Container extends Component {
    constructor(){
      super();
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
        url : 'https://jobs.github.com/positions.json?',
        params : this.state.search
      };
      this.apiCall(data);
    }
    // End of search bar functions
    apiCall(config){
      axios.get('https://cors.io/?'+ config.url,{
        params : config.params
      })
      .then((response)=> {
        console.log(response.data);
        this.setState({allJobs : response.data});
      })
      .catch(function (error){
        console.log(error);
      });
    }

    addFavHandler = (id)=>{
      const favs = [...this.state.favJobs];
      const newFav = this.state.allJobs.filter(job=>job.id === id);
      const updateFavs = newFav.concat(favs);
      this.setState({favJobs: updateFavs});
    }

    removeFavHandler = (id)=>{
      const favs = [...this.state.favJobs];
      const updateFavs = favs.filter(job=>job.id !==id);
      this.setState({favJobs: updateFavs});
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
          <div className = "container">
            <header className="searchSection">
              <h1>GitHub Jobs</h1>
            </header>
            <SearchBar 
              lInput = {(event)=>this.newSearchLocation(event)}
              dInput = {(event)=>this.newSearchDescription(event)}
              cInput = {(event)=>this.newSearchfullTime(event)}
              searchB = {(event)=>this.getJobs()}
              search = {this.state.search}/>
            <div className="resultsSection">
              <JobList
                  showJobDetailHandler = {this.showJobDetailHandler}
                  toggleFav={this.addFavHandler}
                  jobs={this.state.allJobs}/>
              <JobList
                  showJobDetailHandler = {this.showJobDetailHandler}
                  toggleFav={this.removeFavHandler}
                  jobs={this.state.favJobs}/>
            </div>
            <div className="detailsSection">
                {showJobDetails}
            </div>
          </div>
        )
    }
}

export default Container
