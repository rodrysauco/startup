import React, { Component }from 'react';

export default class Movie extends Component{
  constructor(props){
    super(props);
    this.removeMovie = this.removeMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }
  removeMovie(){
    this.props.removeMovie(this.props);
  }
  editMovie(){
    this.props.editMovie(this.props,true);
  }
  render(props){
    return(
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.year}</td>
        <td>{this.props.duration} mins</td>
        <td>
          <button className="btn" onClick = {this.removeMovie}><i className="material-icons">delete</i></button>
          <button className="btn" onClick = {this.editMovie}><i className="material-icons">create</i></button>
        </td>
      </tr>
    );
  }
}