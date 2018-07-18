import React from 'react';
import './searchBar.css';

const SearchBar = (props) =>{
  return(
    <div className = "searchSection">
      <div className = "searchHeader">
        <h3 className = "searchHeader">
          Find your job!
        </h3>
      </div>
      <div className = "searchFields">
        <input
          className="inputField"
          name = "location"
          type = "text"
          value = {props.search.location}
          onChange = {props.lInput}
          placeholder = "Location"
        />
        <input
          className="inputField"
          name = "description"
          type = "text"
          value = {props.search.description}
          onChange = {props.dInput}
          placeholder = "Job Description"
        />
        <label className="inputField">
          <input
            name = "isFullTime"
            type = "checkbox"
            value = {props.search.full_time}
            onChange ={props.cInput}
          /> Full time?
        </label>
        <input
          className="searchButton"
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
