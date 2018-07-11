import React,{ Component } from 'react';
import Movie from './Movie';
//We need to import our Css
export default class MovieList extends Component{
  constructor(props){
    super();
    this.renderDynamic = this.renderDynamic.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie(movie){
    this.props.removeMovie(movie);
  }
  renderDynamic(movies){
    return movies.map(movie => (
        <Movie key = {movie.title} title = {movie.title} year = {movie.year} favourite = {movie.favourite} removeMovie = {this.removeMovie}/>
      ));
  }
  render(){
    return(
      <div className = 'MovieList'>
        {this.renderDynamic(this.props.movies)}
      </div>
      );
  }
}