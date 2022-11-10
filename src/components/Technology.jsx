import React from 'react'
import './styles/technology.css'
import { technology } from '../data.json'
import { useState } from 'react'

const Technology = () => {

  const[techData] = useState(technology)
  const[value, setValue] = useState(0)
  const {name, images, description} = techData[value]

  const btn1 = () => {
    setValue(0)
  }

  const btn2 = () => {
    setValue(1)
  }

  const btn3 = () => {
    setValue(2)
  }

  return (
    <div>
      <div className='technology-container'>
        <div className='grid grid-cols-2'>
          <div>
            <p className='mt-[212px] ml-[166.5px] text-white uppercase' id="space-launch"><span className='font-bold'>03</span>space launch 101</p>
            <div className='ml-[165px] mt-[100px] flex gap-20'>
              <div className='flex flex-col gap-8'>
                <button onClick={btn1} className='button-tech border text-white  hover:text-black hover:bg-white  duration-300'>1</button>
                <button onClick={btn2} className='button-tech border text-white  hover:text-black hover:bg-white  duration-300'>2</button>
                <button onClick={btn3} className='button-tech border text-white  hover:text-black hover:bg-white  duration-300'>3</button>
              </div>
              <div className='w-[470px] h-[303px] text-white'>
                <p className='text-base uppercase'>the terminology...</p>
                <p className='text-5xl uppercase mt-5' id="launch" >{name}</p>
                <p className='text-lg w-[444px] h-[192px] mt-12 text-indigo-200' id="desc">{description}</p>
              </div>
            </div>
          </div>
          <div className='mt-[272px] ml-[450px]'>
            <img className='w-[515px] h-[527px]' src={images.portrait} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
