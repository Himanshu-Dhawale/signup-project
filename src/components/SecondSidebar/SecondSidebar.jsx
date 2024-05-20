import React from 'react'
import Title from './Title'
import Search from './Search'
import ListView from './ListView'

const SecondSidebar = () => {
  return (
    <div className='w-[440px] h-[924px] flex flex-col absolute top-[40px] left-[278px]'>
        <Title/>
        <Search/>
        <ListView/>
    </div>
  )
}

export default SecondSidebar