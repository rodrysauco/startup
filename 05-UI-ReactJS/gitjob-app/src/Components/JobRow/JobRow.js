import React from 'react';
import './jobRow.css';

const jobRow = (props) => {
    return(
        <div className="jobRow">
            <p className="pLink"
                onClick={props.showJobDetail}
                href="">{props.title}
            </p>
            <h4 className = "location">{props.location}</h4>
            <p className = "company">{props.company} - {props.type}</p>
            <button className ="fav" onClick={props.toggleFav}>Fav</button>
        </div>
    )
}

export default jobRow;
