import React from 'react';

const SearchBar = (props) =>{
  return(
    <div className = "searchSection">
      <div className = "header">
        <h3 className = "searchHeader">
          Find your job!
        </h3>
      </div>
      <div className = "searchFields">
        <input 
          name = "location"
          type = "text"
          value = {props.search.location}
          onChange = {props.lInput}
          placeholder = "Location"
        />
        <input
          name = "description"
          type = "text"
          value = {props.search.description}
          onChange = {props.dInput}
          placeholder = "Job Description"
        />
        <label>
          <input
            name = "isFullTime"
            type = "checkbox"
            value = {props.search.full_time}
            onChange ={props.cInput}
          /> Full time?
        </label>
        <input
          name = "submit"
          type = "submit"
          value = "Search"
          onClick= {props.searchB}
        />
      </div>
    </div>
    )
}
export default SearchBar; 