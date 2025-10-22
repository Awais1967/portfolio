import React from 'react'
import Video from '../components/home/Video'
import Hometoptext from '../components/home/Herotoptext'
import Homebottomtext from '../components/home/Herobottomtext'
const Home = () => {
  return (
    <div>
     <div className='h-screen w-screen fixed'>
            <Video/>
     </div>
     <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <Hometoptext/>
        <Homebottomtext/>
     </div>
    </div>
  )
}

export default Home
