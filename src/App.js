import React, { Component } from 'react'

import {Title} from './components/Title'
import {SearchFrom} from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  state = { usedSearch: false, results: [] } // state initialized to an empty array

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true }) //sets state to results when the form gets input
  }
 
  _renderResults = (results) => {
    return this.state.results.length === 0
      ? <p>Sorry, no resutls :(!</p>
      : <MoviesList movies= {this.state.results}/>
  }

  render() {
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="SearchForm-wrapper">
          <SearchFrom onResults={this._handleResults}/>
        </div>
        {this.state.usedSearch 
        ? this._renderResults()
        : <small>Use the form to search a movie</small>

        }
        
      </div>
    );
  }
}

export default App;
