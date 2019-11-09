import React, { Component} from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import Players from './Players/Players';

import './App.css';

export default class App extends Component {
constructor() {
  super();
  this.state ={
    players: []
  }
}

componentDidMount() {
  axios
  .get('http://localhost:5000/api/players/')
  .then(response => {

    this.setState({
      players: response.data
    })
  })
  .catch(error => {
    console.log('Error', error)
  })
}
render() {
  return(
    <div className ="App">
      <NavBar />
      <Players players={this.state.players} />
    </div>
  );
};


};
