import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../utility components/sidebar/Navbar'

export const Home = () => {
  return (
    <div className='flex w-screen h-screen'>
<Navbar />
<div className=" w-10/12 bg-hero-pattern bg-center bg-contain bg-no-repeat">





<Outlet/>



</div>






    </div>
  )
}
