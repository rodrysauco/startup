import React from 'react';
import JobRow from '../JobRow/JobRow';

const JobList = (props)=>{
  return(
    <div className="JobList">
      {props.jobs.map((job,index)=>{
        return <JobRow
          title={job.title}
          location={job.location}
          company={job.company}
          type={job.type}/>
      })}
    </div>
  )
}

export default JobList;
