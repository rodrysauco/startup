import React, {Component} from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie'
import Header from './components/Header'
import './App.css';


export default class App extends Component{
  constructor (){
    super();
    this.state = { 
      movies: [
        {title:"Batman",year:"2012", duration:"90"},
        {title:"Superman",year:"2016",duration:"95"},
        {title:"Ratatouille",year:"2014", duration:"105"}        
      ],
      isOpen: false,
      edited:{}
    };
    this.addMovie = this.addMovie.bind(this);
    this.checkIfExist = this.checkIfExist.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editMovie = this.editMovie.bind(this);
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
  editMovie(params){
    //dostuff
  }
  openModal(movie){
    this.setState({
      isOpen:true,
      edited: movie
      });
  }

  closeModal(){
    this.setState({ isOpen : false})
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
      <Header/>
      <AddMovie addMovie={this.addMovie}/>
      <MovieList movies = {this.state.movies} removeMovie = {this.removeMovie} editMovie = {this.openModal} />
      <EditMovie movie = {this.state.edited} isOpen = {this.state.isOpen} onClose = {this.closeModal} onEdit = {this.editMovie}/>
    </div>
    );
  }
}

