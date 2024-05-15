import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Searchbar = () => {
  return (
    <div className='h-20 w-full flex justify-center items-center ' >


<div className='h-1/2 w-2/5 items-center  border border-orange-400 flex'>  <input type="text"  className=' focus:outline-none  h-full w-4/5'/> <button className='flex-grow bg-orange-400 h-full text-white'>click</button> </div>


    </div>
  )
}
