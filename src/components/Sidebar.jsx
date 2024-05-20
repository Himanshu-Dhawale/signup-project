import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <div className='w-[440px] h-[924px] absolute top-[40px] left-[32px] rounded-lg'>
     <Logo/>
     <Navbar/>
    </div>
  )
}

export default Sidebar