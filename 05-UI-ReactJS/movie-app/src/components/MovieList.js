import React,{ Component } from 'react';
import Movie from './Movie';
//We need to import our Css
export default class MovieList extends Component{
  constructor(props){
    super();
    this.renderDynamic = this.renderDynamic.bind(this);
  }
  renderDynamic(movies){
    return movies.map(movie => (
        <Movie key = {movie.title} title = {movie.title} year = {movie.year} duration = {movie.duration} removeMovie = {this.props.removeMovie} editMovie = {this.props.editMovie}/>
      ));
  }
  render(){
    return(
      <div className = 'MovieList'>
        <table className = "table">
          <thead className ="table-head">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Duration</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className = "tbody">
            {this.renderDynamic(this.props.movies)}
          </tbody>
        </table>
      </div>
      );
  }
}