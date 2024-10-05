import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../utility components/sidebar/Navbar'
import { AnimatePresence } from 'framer-motion';
import { useNavigation } from 'react-router-dom';
export const Home = () => {

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

const[toggleNavbar,setToggleNavbar]=useState(true)

  return (
    <div className='flex w-screen h-screen'>
        <AnimatePresence>
 {toggleNavbar? <Navbar setToggleNavbar={setToggleNavbar} toggleNavbar={toggleNavbar} />:<button className='absolute' onClick={()=>setToggleNavbar(true)} >open</button>}
 </AnimatePresence>
<div className=" max-[882px]:w-full w-10/12 bg-hero-pattern bg-center bg-contain bg-no-repeat">


{/* {navigations.state==='loading' && <p>Loading...</p>} */}


<Outlet/>



</div>






    </div>
  )
}
