import React, { Component } from 'react';

export default class AddMovie extends Component{
	constructor(props){
		super(props);
		this.state = {
      title: '',
      year: '',
      duration: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
	}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addMovie(){
    if(this.state.title != ''){
      if(this.state.year != ''){
        if(this.state.duration != ''){
          this.props.addMovie(this.state);
          this.setState({
            title: '',
            year: '',
            duration: ''
          });
        } else {
          alert("No duration added");
        }
      } else {
        alert("No year aded");
      }
    } else {
      alert("No title added");
    } 
  }

  render(){
    return(
      <div className = 'AddMovie'>
        <label> Movie title:  
          <input 
            name = "title"
            type = "text"
            value = {this.state.title}
            onChange = {this.handleInputChange}
            pattern = "^[A-Za-z0-9\s]+$"
            minLength = "2"
            maxLength = "30"
            required
          />
        </label>
        <label> Year:  
          <input 
            name = "year"
            type = "number"
            value = {this.state.year}
            onChange = {this.handleInputChange}
            minLength="4" 
            maxLength="4" 
            required
          />
        </label>
        <label> Duration:  
          <input 
            name = "duration"
            type = "number" 
            value = {this.state.duration} 
            onChange = {this.handleInputChange} 
            minLength = "2" 
            maxLength = "4" 
            required
          />
        </label>
        <button 
          className="btn"
          type = "submit"
          onClick = {this.addMovie}
          ><i className = "material-icons">add</i>
        </button>
      </div>
    )
  }
}