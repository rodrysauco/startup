import React from 'react';
import JobRow from '../JobRow/JobRow';
import './jobList.css';

const JobList = (props)=>{
  let noResults;
  if(props.results===0){
    noResults = (
      <p className="no-results">No results found</p>
    )
  }
  return(
    <div className="JobList">
      {noResults}
      {props.jobs.map((job)=>{
        return <JobRow
          key={job.id}
          title={job.title}
          location={job.location}
          company={job.company}
          type={job.type}
          toggleFav={()=>props.toggleFav(job.id)}
          showJobDetail={() => props.showJobDetailHandler(job)}
          isFav = {job.isFav}
        />
      })}
    </div>
  )
}

export default JobList;
