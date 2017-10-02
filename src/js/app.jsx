import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route ,Link
} from 'react-router-dom';
import MovieSearchContainer from '../containers/MovieSearchContainer/index.js';
import MovieDetailContainer from '../containers/MovieDetailContainer/MovieDetailContainer';
import axios from 'axios';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        movies: []
    }
  }
  componentWillMount() {
    //const url = "http://www.omdbapi.com/";
    //var config = { proxy: { host: '127.0.0.1', port: 3000 } }

    //axios.get("http://www.omdbapi.com/?apikey=8730e0e&i=tt3896198")
    axios.get("http://www.omdbapi.com/")
    .then(response => {
        response.data;})
    .then(movies => this.setState({ movies }))
    .catch(error => {console.log(error)})
   
  }
  
  render() {
    //const {movies} = this.state
    return (
      <Router>
        <div className='container'> 
          
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    )
  }
}
