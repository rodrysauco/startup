import React from 'react';
import './jobCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JobCard = (props) => {
    return(
        <div className="jobCard">
            <h3 className="title">{props.company}</h3>
            <img className="imageUrl" src={props.company_logo} alt="company logo"/>
            <a className="companyUrl" target="_blank" href={props.company_url}> <span>Company </span> Url </a>
            <FontAwesomeIcon icon="heart" />
            <FontAwesomeIcon icon="star" />
        </div>
    )
}

export default JobCard;