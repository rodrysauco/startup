import React from 'react';
import './jobApply.css';

const JobApply = (props) => {
    return(
        <div className="jobApply">
            <h3>{props.how_to_apply}</h3>
            <a className="url" target="_blank" href={props.url}> Visit this page!</a>
        </div>
    )
}

export default JobApply;