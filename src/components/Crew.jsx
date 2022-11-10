import React from 'react'
import { useState } from 'react'
import '../components/styles/crew.css'
import {crew} from '../data.json'


const Crew = () => {

  const[crewMember] =useState(crew)
  const [value, setValue] = useState(0)
  const {name,images,role,bio} = crewMember[value]



  const boton1 = () =>{
    setValue(0);
  }
  const boton2 = () =>{
    setValue(1)
    
  }
  const boton3 = () =>{
    setValue(2)
  }
  const boton4 = () =>{
    setValue(3)
  }



  return (
    <div>
      <section className='crew'>
        <div className='crew-container'>
          <div className='grid grid-cols-2'>
            <div>
              <div className='mt-[210px] ml-[166.5px] flex gap-5 items-center ' >
                <p className='text-gray-200 font-black'><span>02</span></p>
                <p id="meet-your">meet your crew</p>
              </div>
              <div className='ml-[166.5px] mt-[188px]'>
                <p className='text-gray-500' id="rol">{role}</p>
                <p id="name">{name}</p>
                <p id="description">{bio}</p>
              </div>
              <div className='ml-[166.5px] flex flex-row gap-5' id="button-container">
                <button onClick={boton1} className='button-crew hover:bg-white'></button>
                <button onClick={boton2} className='button-crew hover:bg-white'></button>
                <button onClick={boton3} className='button-crew hover:bg-white'></button>
                <button onClick={boton4} className='button-crew hover:bg-white'></button>
              </div>
            </div>
            <div>
              <div className='w-[568.07px] h-[712px] mt-[265px] ml-[150px]'>
                <img src={images.png} alt="_blank" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Crew
