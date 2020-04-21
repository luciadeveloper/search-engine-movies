import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
  static propTyps = {
    movies: PropTypes.array //defines that movies should be an array
  }
  render() {
   
      const { movies } = this.props //adds the props into a constant, to handle it better

      return (
        <div className='MoviesList'>
          {
            movies.map(movie => {
              return(
                <div  key={movie.imdbID} className='MoviesList-item'>
                  <Movie 
                    id={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                  />
                </div>
              )
            })
          }

        </div>
      )

    
  }
}