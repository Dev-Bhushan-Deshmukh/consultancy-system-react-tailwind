import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export const Navbar = ({setToggleNavbar,toggleNavbar}) => {
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





  const items = [
    {name:'User',
      link:"/home/user"
    },
    {name:'Services',
      link:"/home/category",
    
    },
    {name:'consultants',
      link:"/home/consultant",
      // consultant
    },
    {name:'Admin',
      link:"/home/admin",
      
    },
    {name:'consultantlist',
      link:"/home/consultantlist",
      
    },
    
  ]

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };







  return (
  
    <motion.div
         
            initial="hidden"
            animate={toggleNavbar ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
    
    
    className='hover:bg-white max-[355px]:w-full max-[411px]:w-1/2 max-[620px]:w-2/5 max-[1083px]:w-1/3  min-[883px]:bg-sidebarColor  z-10 max-[883px]:absolute bg-yellow-300  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 block md: h-full w-1/6 '>

<span   className='min-[883px]:hidden' onClick={()=>setToggleNavbar(false)}>c</span>



<motion.ul
        className=" h-1/2 flex flex-col gap-3 items-center"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map(item => (<> 
       
          <motion.li  className=" no-underline hover:none text-orange-600 text-lg decoration-orange-700 decoration-2" variants={navItem} key={item.name}>
          <NavLink  key={item.name} to={item.link}  >{item.name}</NavLink>
          </motion.li>
          </>
        ))}
      </motion.ul>










</motion.div>
//  </AnimatePresence>
  )
}
