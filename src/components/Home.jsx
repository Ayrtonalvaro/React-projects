import React from 'react'
import './styles/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home'>  
        <div className='grid grid-cols-2 '>
          <div className='w-[450px] h-[382px] mt-[387px] ml-[165px]' >
            <div className=''>
              <p className='text-[34px] text-white' id="so-you">so, you want to travel to</p>
              <p className='text-[150px] text-white' id="title">space</p>
              <p className='text-[18px] text-white' id="text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
          </div>
          <div className='w-[274px] h-[274px] mt-[495px] ml-[260px]'>
            <button className="button-home"><Link to='/Destination'> explore</Link></button>
          </div>
        </div>
      </section>
    </>

  )
}

export default Home
