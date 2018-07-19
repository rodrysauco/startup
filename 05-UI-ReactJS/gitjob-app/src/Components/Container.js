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
             jobDetail: [],
             showResults : false
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
        response.data.map((job) => {  //Add isFav property
            return job.isFav = "false";
          })
        console.log(response.data);
        this.setState({allJobs : response.data});
        this.setState({search:{location: '',description: '', full_time: ''}})
      })
      .catch(function (error){
        console.log(error);
      });
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );

        this.hydrateStateWithLocalStorage();
        window.addEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
        this.setState({jobDetail: []});
    }

    addFavHandler = (id)=>{
      //const favs = [...this.state.favJobs];
      const newFav = this.state.allJobs.filter(job=>job.id === id);
      if(!this.state.favJobs.includes(newFav[0])){
        newFav[0].isFav = true;
        const updateFavs = newFav.concat(this.state.favJobs);
        this.setState({favJobs: updateFavs});
        localStorage.setItem("favs", JSON.stringify(updateFavs));
      }
      /*newFav[0].isFav = true;  // set isFav true
      const newJob = {};
      Object.assign(newJob, newFav);
      const addIsfav = this.state.allJobs.slice(id); // delete job without fav
      addIsfav.concat(newJob);
      this.setState({
        allJobs: addIsfav,
      })
      console.log(this.state.allJobs);*/
    }

    removeFavHandler = (id)=>{
      const favs = [...this.state.favJobs];
      let jobUnfav = favs.filter(job=>job.id===id);
      jobUnfav[0].isFav = false;
      favs[favs.indexOf(jobUnfav)] = jobUnfav;
      const updateFavs = favs.filter(job=>job.id !==id);
      this.setState({favJobs: updateFavs});
      localStorage.setItem("favs", JSON.stringify(updateFavs));
      //-----
    /*  favs[0].isFav = false; // set isFav false;
      const newJob = {};
      Object.assign(newJob, favs);
      const removeIsfav = this.state.allJobs.slice(id);
      removeIsfav.concat(newJob);
      this.setState({
        allJobs: removeIsfav,
      })
      console.log(this.state.allJobs)*/
    }

    showJobDetailHandler = (job) => {
      if(job.company_logo === null) {
        job['company_logo'] = "http://imgclasificados4.emol.com/96978920_0/243/F24412324522011810711017916592214144818922243.jpg";
      }

      if(job.id === this.state.jobDetail.id) {
        this.setState({jobDetail: []})
      }else {
          this.setState({jobDetail: job});
      }
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
            showJobDetails = null;
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
