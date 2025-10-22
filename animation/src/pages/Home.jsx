import React from 'react'
import Video from '../components/home/Video'
import Hometoptext from '../components/home/Herotoptext'
import Homebottomtext from '../components/home/Herobottomtext'
const Home = () => {
  return (
    <div>
      <div className='h-[60vh] md:h-screen w-full fixed'>
        <Video/>
      </div>
      <div className='h-[60vh] md:h-screen w-full relative pb-2 md:pb-5 overflow-hidden flex flex-col justify-between'>
        <Hometoptext/>
        <Homebottomtext/>
      </div>
    </div>
  )
}

export default Home
