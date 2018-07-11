import React, {Component} from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie'
import './App.css';

export default class App extends Component{
  constructor (){
    super();
    this.state = { 
      movies: [
        {title:"Batman",year:"2012",favourite:true},
        {title:"Superman",year:"2016",favourite:true},
        {title:"Ratatouille",year:"2014",favourite:false}        
      ]};
    this.addMovie = this.addMovie.bind(this);
    this.checkIfExist = this.checkIfExist.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }
  
  checkIfExist(movie){
    let bool = false;
    for(let mov of this.state.movies){
      if(mov.title == movie.title){
        bool = true;
      }
    }
    return bool;
  }

  removeMovie(toDelete){
    let movieList = this.state.movies.filter(mov => {
      if(mov.title !== toDelete.title){
        return mov;
      }
    });
    this.setState({ movies: movieList})
  }

  addMovie(newMovie){
    let flag = this.checkIfExist(newMovie);
    if(flag != true){
      this.setState({
        movies : [...this.state.movies, newMovie]
      });
    } else {
      alert('The movie '+newMovie.title+' already exists!');
    } 
  }

	render(){
    return (
    <div className='App'>
      <AddMovie addMovie={this.addMovie}/>
      <MovieList movies = {this.state.movies} removeMovie = {this.removeMovie}/>
      <EditMovie/>
    </div>
    );
  }
}

