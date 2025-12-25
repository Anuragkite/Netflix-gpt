import React from 'react'
import { TMDB_POSTER_CDN_URL } from '../utils/constants'
const MovieCart = ({posterPath,movieTitle}) => {
  
  return (
    <div>
        <div className='mx-4 w-[150px] mb-19 '>
            <img src={TMDB_POSTER_CDN_URL+posterPath} alt="poster" />
            <h2 className='text-white'>{movieTitle}</h2>
        </div>
    </div>
  )
}

export default MovieCart