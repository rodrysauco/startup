import React, {Component} from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import './App.css';

export default class App extends Component{

	render(){
    return (
    <div className='App'>
      <AddMovie/>
      <MovieList/>
    </div>
    );
  }
}

