import React from 'react'
const Navbar = () => {
  return (
    <div className='w-[150px] h-[200px] absolute top-[100px] left-[32px]'>
      <h2 className='w-[71px] h-[32px] text-[#FFFFFF] leading-8 font-normal text-xl'>For You</h2>
      <h2 className='w-[71px] h-[32px] text-[#FFFFFF] leading-8 font-normal text-xl'>Top Tracks</h2> 
      <br/>
      <h2 className='w-[71px] h-[32px] text-[#FFFFFF] leading-8 font-normal text-xl'>Favorites</h2> 
      <h2 className='w-[71px] h-[32px] text-[#FFFFFF] leading-8 font-normal text-xl'>Recently Played</h2> 
    </div>  
  )
}

export default Navbar