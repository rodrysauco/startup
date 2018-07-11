import React, { Component } from 'react';

export default class EditMovie extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      year: props.year,
      favourite: props.favourite
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
      <div className = 'EditMovie'>
        <label> Movie title: 
          <input 
            name = "title"
            type = "text"
            value = {this.state.title}
            onChange = {this.handleInputChange}/>
          </label>
          <br/><br/>
          <label> Year: 
          <input 
            name = "year"
            type = "number"
            value = {this.state.year}
            onChange = {this.handleInputChange}/>
          </label>
          <br/><br/>
          <label> Is your favorite?: 
          <input 
            name = "favourite"
            type = "checkbox"
            value = {this.state.favourite}
            onChange = {this.handleInputChange}/>
          </label>
          <br/><br/>
          <input
            name = "addMovie"
            type = "submit"
            value = "Add movie"
            onClick = {this.addMovie}/>
       </div>
  )}
}