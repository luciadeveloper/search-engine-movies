import React, { Component } from 'react'

import {Title} from './components/Title'
import {SearchFrom} from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  state = { results: [] } // state initialized to an empty array

  _handleResults = (results) => {
    this.setState({ results }) //sets state to results when the form gets input
  }
 
  

  render() {
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="SearchForm-wrapper">
          <SearchFrom onResults={this._handleResults}/>
        </div>
        {this.state.results.length === 0
        ? <p>No resutls</p>
        : <MoviesList movies= {this.state.results}/>
        }
      </div>
    );
  }
}

export default App;
