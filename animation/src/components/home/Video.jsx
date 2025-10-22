import React from 'react'
import video from '../../assets/videos/video.mp4'
const Video = () => {
  return (
    <div className='h-screen w-full'>
      <video src={video} autoPlay loop muted className='h-full w-full object-cover overflow-hidden'></video>
    </div>
  )
}

export default Video
