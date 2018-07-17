import React from 'react';
import './jobRow.css';

const jobRow = (props) => {
    return(
        <div className="jobRow">
            <p className="pLink jobTitle"
                onClick={props.showJobDetail}
                href="">{props.title}
            </p>
            <h4 className = "location">{props.location}</h4>
            <p className = "company">{props.company} - {props.type}</p>
            <i className ="material-icons" onClick={props.toggleFav}>favorite_border</i>
        </div>
    )
}

export default jobRow;
