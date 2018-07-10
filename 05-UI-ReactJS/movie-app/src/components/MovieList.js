import React,{ Component } from 'react';
import Movie from './Movie';
//We need to import our Css
export default class MovieList extends Component{
  constructor(){
    super();
    this.state = { movies:[
        {title:"Batman",year:"2012",favourite:"true"},
        {title:"Superman",year:"2016",favourite:"true"},
        {title:"Ratatouille",year:"2014",favourite:"false"}        
      ]};
    this.renderDynamic = this.renderDynamic.bind(this);
  }
  renderDynamic(){
    return this.state.movies.map(movie => (
        <Movie key = {movie.title} title = {movie.title} year = {movie.year} favourite = {movie.favourite} />
      ));
  }
  render(){
    return(
      <div className = 'MovieList'>
        {this.renderDynamic()}
      </div>
      );
  }
}