import React from 'react'

const Player = () => {
  return (
    <div className='w-[480px] h-[708.24px] absolute top-[93px] left-[875px] flex flex-col gap-[40px]'>
        <div className='w-[184px] h-[68px] flex flex-col gap-[8px]'>
           <h1 className='w-[184px] h-[36px] font-bold text-[32px] leading-6 text-[#FFFFFF]'>Viva La Vida</h1>
           <h4 className='w-[65px] h-[24px] font-normal text-base leading-6 text-[#FFFFFF]'>Coldplay</h4>
        </div>
        <div className='w-[480px] h-[510px] flex gap-[24px]'>
        <img src="public\Cover.png" alt="Cover Image" className='w-[480px] h-[480px] rounded-[8px]'/>
        </div>
        
    </div>  
  )
}

export default Player