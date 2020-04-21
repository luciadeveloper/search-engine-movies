import React, {Component} from 'react';
import PropTypes from 'prop-types'

const API_KEY = '9b623a58'

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string
  } 

  state = { movie: {} }
  
  _fetchMovie({id}) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`) //fetch will call an API and get the data
      .then(res => res.json()) // we neeed to convert it into a json file to handle the info better
      .then (movie => {
        console.log( {movie})
        this.setState({ movie })
      })
  }
  _goBack(){
    window.history.back()
  }

  componentDidMount () {
    const {id} = this.props
    this._fetchMovie({ id })
  }
  render() {
    const { Title, Poster, Actors, Metascore, Plot} = this.state.movie
    return (
      <div>
        <button onClick={this._goBack}>Back</button>
        <h1>{Title}</h1>
        <img src={Poster} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
 
}