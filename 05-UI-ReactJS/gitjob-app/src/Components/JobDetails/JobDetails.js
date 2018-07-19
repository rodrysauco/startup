import React from 'react';
import JobCard from '../JobCard/JobCard';
import JobApply from '../JobApply/JobApply';
import './jobDetails.css';

const JobDetails = (props) => {
    return(
        <div className="jobContainer">
            <h2 className="JBdetail">Job Details</h2>
            <hr/>
            <div className = "jobDetails">
                <p>{props.type} - {props.location}</p>
                <h2 >{props.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
            </div>
            <div className="jobSubdetail">
              <JobApply 
                company_url = {props.company_url}
                how_to_apply = {props.how_to_apply}
                url = {props.url}
              />
              <JobCard
                company = {props.company}
                company_logo = {props.company_logo}
                company_url = {props.company_url}
              />
            </div>
        </div>
    )

}

export default JobDetails;
