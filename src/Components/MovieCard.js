import React from 'react'
import { CDN_IMG_URL } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='m-2 w-48'>
        <img alt="Movie Card" src={CDN_IMG_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard