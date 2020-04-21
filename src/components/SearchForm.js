import React, {Component} from 'react';

const API_KEY = '9b623a58'
export class SearchFrom extends Component {
  state = {
    inputMovie:''
  }
  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const {inputMovie} = this.state
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`) //fetch will call an API and get the data
      .then(res => res.json()) // we neeed to convert it into a json file to handle the info better
      .then (results => {
        const { Search = [], totalResults = "0" } = results
        console.log( {Search, totalResults})
        this.props.onResults(Search)
      })
  }

  render() {
    return (
      <form onSubmit= {this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
            className="input" 
            onChange = {this._handleChange}
            type="text" 
            placeholder="Movie to search" /> 
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}
