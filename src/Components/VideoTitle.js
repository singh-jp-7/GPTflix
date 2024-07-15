import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute text-white bg-gradient-to-r  from-black'>
      <h1>{title}</h1>
      <h1>{overview}</h1>
      <div>
      <button>Play</button>
      <button>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle