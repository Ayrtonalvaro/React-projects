import React from 'react'
import destination from '../assets/destination/image-moon.png'
import './styles/destination.css'
import {destinations} from '../data.json'
import { useState } from 'react'

const Destination = () => {

  const [planet] = useState(destinations);
  const [value, setValue] = useState(0);
  const {name,images,description,distance,travel} = planet[value];

  console.log(images.png)
  const buttonMoon = () =>{
    setValue(0)
  }
  const buttonMars = () => {
    setValue(1)
  }
  const buttonEuropa = () => {
    setValue(2)
  }
  const buttonTitan = () => {
    setValue(3)
  }



  return (
    <>
      <section className='destination'>
        <div className='destination-container'>
          <div className='grid grid-cols-2'>
            <div className='mt-[212px] ml-[166.5px]'>
              <p id="pick"><span>01</span>   pick your destination</p>
              <img className='w-[445px] h-[455px] mt-[131px]' src={images.png} alt="_blank" />
            </div>
            <div className='mt-[310px] w-[445px] h-[472px]'>
              <ul className='flex flex-row space-x-6 ' id="list-destination">
                <li ><button className='text-indigo-300 hover:text-white uppercase ;' onClick={buttonMoon}>Moon</button></li>
                <li><button className='text-indigo-300 hover:text-white uppercase' onClick={buttonMars}>Mars</button></li>
                <li><button className='text-indigo-300 hover:text-white uppercase' onClick={buttonEuropa}>Europa</button></li>
                <li><button className='text-indigo-300 hover:text-white uppercase' onClick={buttonTitan}>Titan</button></li>
              </ul>
              <p id="title-destination">{name}</p>
              <p id="text-destination">{description}</p>
              <div className='linea mt-[180px]'></div>
              <div className='flex flex-row space-x-20 mt-[20px]' id="info-destination" >
                <div >
                  <div>
                    <p className='text-indigo-300'>avg.distance</p>
                    <p id="info-dist">{distance}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='text-indigo-300'>est. travel time</p>
                    <p id="info-time">{travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Destination
