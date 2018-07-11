import React, { Component } from 'react';

export default class AddMovie extends Component{
	constructor(props){
		super(props);
		this.state = {
      title: '',
      year: '',
      favourite: false
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
    this.props.addMovie(this.state);
    this.setState({
      title: '',
      year: '',
      favourite: false
    });
  }

  render(){
    return(
      <div className = "AddMovie">
        <label> Movie title: 
        <input 
          name = "title"
          type = "text"
          value = {this.state.title}
          onChange = {this.handleInputChange}/>
        </label>
        <label> Year: 
        <input 
          name = "year"
          type = "number"
          value = {this.state.year}
          onChange = {this.handleInputChange}/>
        </label>
        <label> Is your favorite?: 
        <input 
          name = "favourite"
          type = "checkbox"
          value = {this.state.favourite}
          onChange = {this.handleInputChange}/>
        </label>
        <input
          name = "addMovie"
          type = "submit"
          value = "Add movie"
          onClick = {this.addMovie}/>
      </div>
    );
  }
}