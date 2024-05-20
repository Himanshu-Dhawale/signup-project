import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className='w-[400px] h-[48px] absolute top-[100px] left-[10px] flex justify-between px-[16px] py-[8px] border-[1px]'>
        <input type="text" placeholder='Search Song, Artist' className=' border-none outline-none bg-transparent text-white'/>
        <FaSearch className='w-[32px] h-[32px] fill-white cursor-pointer'/>
     </div>
  )
}

export default Search