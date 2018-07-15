import React from 'react';
import './jobRow.css';

const jobRow = (props) => {
    return(
        <div className="jobRow">
            <a
                className = "title"
                href="">{props.title}
            </a>
            <h4 className = "location">{props.location}</h4>
            <p className = "company">{props.company} - {props.type}</p>
            <button className ="fav" onClick={props.addFav}>Fav</button>        
        </div>
    )
}

export default jobRow;
