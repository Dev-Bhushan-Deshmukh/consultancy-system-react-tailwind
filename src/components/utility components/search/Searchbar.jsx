import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Searchbar = () => {
  return (
    <div className='h-20 w-full flex justify-center items-center ' >


<div className='h-1/2   max-[444px]:w-11/12 max-[1023px]:w-2/3 lg:w-2/5 items-center  border border-orange-400 flex'>  <input type="text"  className='  focus:outline-none  h-full w-4/5'/> <button className='flex-grow bg-orange-400 h-full text-white hover:bg-blue-600'><i class="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i></button> </div>


    </div>
  )
}
