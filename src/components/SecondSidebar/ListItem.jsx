import React from 'react'

const ListItem = () => {
  return (
    <div className='w-full h-[88px] flex justify-between p-[20px]'>
      <div className='w-[144px] h-[48px] flex gap-[16px]'>
         <img src="public\image 4.png" alt="Avatar" className='w-[48px] h-[48px] rounded-full' />  
         <div className='w-[80px] h-[48px]'>
           <h3 className='w-[66px] h-[24px] font-normal text-[#FFFFFF] text-lg leading-6'>Starboy</h3>
           <p className='w-[80px] h-[24px] font-normal text-sm leading-6 text-[#FFFFFF]'>The Weeknd</p>
        </div>        
      </div>
      <div>
      <h3 className='w-[34px] h-[24px] font-normal text-lg leading-6 text-[#FFFFFF]'>4:16</h3>
      </div>
    </div>
  )
}

export default ListItem