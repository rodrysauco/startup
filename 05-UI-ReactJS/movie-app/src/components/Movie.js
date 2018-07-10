import React, { Component }from 'react';

export default class Movie extends Component{
  constructor(props){
    super();
    this.state ={
      title: props.title,
      year: props.year,
      favourite: props.favourite
    };
    
  }
  render(){
    return(
      <div className="Movie"> 
        <h3>{this.state.title} </h3>
        <p>{this.state.year} {this.state.favourite}</p> 
      </div>
      );
  }
}