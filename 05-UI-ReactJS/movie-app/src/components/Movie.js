import React, { Component }from 'react';

export default class Movie extends Component{
  constructor(props){
    super();
    this.state ={
      title: props.title,
      year: props.year,
      favourite: props.favourite
    };
    this.removeMovie = this.removeMovie.bind(this);
  }
  removeMovie(){
    this.props.removeMovie(this.state);
  }
  render(){
    if(this.state.favourite){
      return(
        <div className="Movie"> 
          <h3>{this.state.title} </h3>
          {this.state.year}
          <button onClick = {this.removeMovie}>Remove Me!</button>
        </div>
        );
    } else {
      return(
        <div className="Movie"> 
          <h3>{this.state.title} </h3>
          {this.state.year}
          <button onClick = {this.removeMovie}>Remove Me!</button>
        </div>
        );
    }
  }
}