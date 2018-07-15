import React, { Component } from 'react';
//import axios from 'axios';
import JobRow from './JobRow/JobRow';
import JobList from './JobList/JobList';


class Container extends Component {
    state = {
        allJobs : [{
            "id":"5426bf4a-6b4e-11e8-88ec-678588b528e2",
            "created_at":"Mon Jul 09 15:14:05 UTC 2018",
            "title":"Software Engineer",
            "location":"New York City",
            "type":"Full Time",
            "description":"<p>BlindData is calling all talented software engineers to test yourself against the best engineers from Google and MIT. </p>\n\n<p>Get recognized, hired and rewarded. </p>\n\n<p>About the role:</p>\n\n<p>-Collaborate with our testing problem contributors to author, edit and deploy coding challenges on our platform.\n-Constantly enhance platform performance and help scale our system as we grow.\n-Create experiences for app and web environments. \n-Partner with Lead Developer and CTO on various projects.\n-Manage individual project priorities, deadlines and deliverables. \n-Maintain and iterate on company website and overall user experience for candidates and partners.\n-Work on a small, agile and growing team to help us build out the business and expand our user base.</p>\n\n<p>Applicants should be highly skilled in at least one of Python, C++, Java and PHP. We are a small but growing company looking to hire top technical talent.</p>\n\n<p>If you are interested in applying, visit <a href=\"http://www.blinddata.com/r/GitHub\">www.blinddata.com/r/GitHub</a> and click on \u201cTest your Talents!\u201d to take our 20-minute online challenge. It\u2019s as easy as that! This fast and free evaluation will help us assess your fit for applicable roles within our company. Your online challenge score will determine if you are invited to the final round which consists of an in-person exam - high scores will be compensated and rewarded for coming in to test. After that point, you will become BlindData Certified and be considered for open roles on our team.</p>",
            "how_to_apply":"<p>Visit blinddata.com/r/GitHub and click on \"Test Your Talents!\"</p>",
            "company":"BlindData",
            "company_url":"https://www.blinddata.com/r/GitHub",
            "company_logo":"http://github-jobs.s3.amazonaws.com/3a8453d6-6b4e-11e8-9fec-041f68848b4c.png",
            "url":"http://jobs.github.com/positions/5426bf4a-6b4e-11e8-88ec-678588b528e2"
         },
         {
            id: "7baca312-7efa-11e8-857c-1d604ece7ad1",
            created_at: "Tue Jul 03 19:51:54 UTC 2018",
            title: "Mobile Backend Developer (Mental Health Tech)",
            location: "Los Angeles, CA",
            type: "Full Time",
            description: "asldkad",
            company: "UCLA",
            company_url: "https://grandchallenges.ucla.edu/depression/",
            company_logo: "http://github-jobs.s3.amazonaws.com/6e8e84ca-7efa-11e8-9889-da947f4f2836.jpg",
            url: "http://jobs.github.com/positions/7baca312-7efa-11e8-857c-1d604ece7ad1"
        },
        {
            id: "5ea838ca-740b-11e8-9b58-5a88c0136028",
            created_at: "Tue Jun 19 21:55:17 UTC 2018",
            title: "Senior Software Engineer (Python)",
            location: "Venice, California",
            type: "Full Time",
            description: "<p>Responsibilities: -Build, operate, and optimize large web-based systems -Design and implement algorithms to efficiently process, analyze, and serve massive datasets -Serve as a key individual contributor within the Venice engineering group -Take projects through the full engineering lifecycle: designing, ticketing, building, testing, deploying, and debugging tools and products -Help grow a team and work with a tight knit group of engineers and data stakeholders</p> <p>Qualifications: -5+ years of full-time experience in a Python development environment required -Bachelor’s in Computer Science or equivalent, Master's degree a plus -Should be comfortable writing HTML/CSS and proficient in Javascript -Experience building scalable and reliable products in the cloud -Experience with designing, implementing, and using RESTful APIs -Good diagnostic and debugging skills -Prior experience with Vue.js or AngularJS a plus</p>",
            company: "System1",
            company_url: "http://system1.com/",
            company_logo: null,
            url: "http://jobs.github.com/positions/5ea838ca-740b-11e8-9b58-5a88c0136028"
        },
        {
            id: "321145cc-789d-11e8-8847-6a9ab2c4e9c6",
            created_at: "Mon Jun 25 17:36:15 UTC 2018",
            title: "Operations Engineer (DevOps)",
            location: "Fairfax, VA",
            type: "Full Time",
            description: "ñlaskdasd",
            company: "Custom Ink",
            company_url: "https://www.customink.com/",
            company_logo: "http://github-jobs.s3.amazonaws.com/240afa18-789d-11e8-906f-5167a57385bb.png",
            url: "http://jobs.github.com/positions/321145cc-789d-11e8-8847-6a9ab2c4e9c6"
        }
       ],
        favJobs : []
    }


    /*componentDidMount() {
           axios.get(`https://jobs.github.com/positions.json?description=python&location=new+york`,
               {
               headers: {
                   'Authorization' : '',
                   'Content-Type' : 'application/json'
                   }
               })
               .then(res => {
                   const jobs = res.data;
                   this.setState({ allJobs: jobs });
           })
       }*/

    addFavHandler = (id)=>{
      const favs = [...this.state.favJobs];
      const newFav = this.state.allJobs.filter(job=>job.id === id);
      const updateFavs = newFav.concat(favs);
      this.setState({favJobs: updateFavs});
    }

    removeFavHandler = ()=>{}

    render(){
        return(
          <div>
            <div className="searchSection">
            </div>

            <div className="resultsSection">
              <JobList
                  add={this.addFavHandler}
                  jobs={this.state.allJobs}/>
              <JobList
                  jobs={this.state.favJobs}/>
            </div>

            <div className="detailsSection">
            </div>
          </div>
        )
    }
}

export default Container
