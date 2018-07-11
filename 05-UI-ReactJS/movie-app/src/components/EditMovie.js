import React, { Component } from 'react';

export default class EditMovie extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClose = this.onClose.bind(this);
    this.editMovie = this.editMovie.bind(this);
   }

  onClose(){
    this.props.onClose();
  }
  editMovie(){
    let arr = [];
    if(this.props.movie.title !== this.state.title){
      arr.push(this.state.title);
    }
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
    if(this.props.isOpen === true){
      return(
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.onClose} >&times;</span>
            <label> Movie title:  
              <input 
                name = "title"
                type = "text"
                value = {this.state.title}
                defaultValue ={this.props.movie.title}
                onChange = {this.handleInputChange}
                pattern = "^[A-Za-z0-9\s]+$"
                minLength = "2"
                maxLength = "30"
                required
              />
            </label>
            <br/><br/>
            <label> Year:  
              <input 
                name = "year"
                type = "number"
                value = {this.state.year}
                defaultValue = {this.props.movie.year}
                onChange = {this.handleInputChange}
                minLength="4" 
                maxLength="4" 
                required
              />
            </label>
            <br/><br/>
            <label> Duration:  
              <input 
                name = "duration"
                type = "number" 
                value = {this.state.duration} 
                defaultValue = {this.props.movie.duration}
                onChange = {this.handleInputChange} 
                minLength = "2" 
                maxLength = "4" 
                required
              />
            </label>
            <br/><br/>
            <button className="btn" onClick = {this.onClose}><i className="material-icons">clear</i></button>
            <button className="btn" onClick= {this.editMovie}><i className="material-icons">check</i></button>
          </div>
        </div>  
      );
    } else {
      return null;
    }
  }
}