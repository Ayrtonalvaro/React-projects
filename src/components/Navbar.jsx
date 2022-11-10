import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'


const Navbar = () => {
  return (
    
    <div >
      <header>
        <div className='fixed w-full text-slate-50 flex justify-between items-center p-4'>
          <div className='ml-10'>
            <img src={Logo} alt='_blank' />
          </div>
          <nav className=' bg-gray-800/90 h-[96px] w-[830px] '>
            <ul className='md:flex gap-8 uppercase p-10 justify-center ' >
              <li className='mb-5'><Link className='hover:border-b-4 border-white delay-100 duration-100 mb-5' to='/' >00 home</Link></li>
              <li ><Link className='hover:border-b-4 border-white delay-100 duration-100' to='/Destination'>01 destination</Link></li>
              <li ><Link className='hover:border-b-4 border-white delay-100 duration-100' to='/Crew'>02 crew</Link></li>
              <li ><Link className='hover:border-b-4 border-white delay-100 duration-100' to='/Technology'>03 technology</Link></li>
              </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
