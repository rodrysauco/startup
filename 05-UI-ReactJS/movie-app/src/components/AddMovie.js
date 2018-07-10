import React, { Component } from 'react';

export default class AddMovie extends Component{
	constructor(){
		super();
		this.state ={
      title: '',
      year: '',
      favourite: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
	}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <form>
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
        <button> Add movie to List </button>
      </form>
    );
  }
}