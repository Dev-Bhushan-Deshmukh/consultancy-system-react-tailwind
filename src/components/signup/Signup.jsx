import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
    const navigate=useNavigate()

  const userNameref = useRef(null);
  const passwordref = useRef(null);
  function signUpUser(){

  }

  return (
       
    <form id='s' onSubmit={signUpUser} className='  shadow-md flex flex-col border-slate-100 border-2 bg-slate-50  w-11/12 h-1/2 sm:w-3/4 md:w-4/5  lg:w-8/12 md:h-1/3 justify-center  items-center gap-2 '>

    <input  type='text' ref={userNameref} className='bg-white  border-slate-100 border-2 w-11/12 outline-none h-1/4 pl-3 text-slate-500' />

    <input  type='password' ref={passwordref} className='border-slate-100 border-2 2 w-11/12 outline-none h-1/4 pl-3 text-slate-500' />
    <button type='submit' className='bg-blue-600 2 w-11/12  h-1/4 text-teal-50' onClick={()=>navigate('/home/user')}>Login</button>
  </form>
  )
}
