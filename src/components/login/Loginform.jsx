import React, { useRef } from 'react'

export const Loginform = ({signUpUser}) => {



    const newUserNameref = useRef(null);
    const newPasswordref = useRef(null);

    async function signUpUsers(e){
        e.preventDefault();
         signUpUser()
    }
  return (
   
    <form onSubmit={signUpUsers}  className='shadow-md flex flex-col border-slate-100 border-2 bg-slate-50  w-11/12 h-1/2 sm:w-3/4 md:w-4/5  lg:w-8/12 md:h-1/3 justify-center  items-center gap-2'>

    <input ref={newUserNameref} type='text'className='bg-white  border-slate-100 border-2 w-11/12 outline-none h-1/4 text-slate-500 pl-3' />
    
    <input ref={newPasswordref} type='password' className='bg-white  border-slate-100 border-2 w-11/12 outline-none h-1/4 text-slate-500 pl-3'  />
    <button type='submit' className='bg-blue-600 2 w-11/12  h-1/4 text-teal-50'>Sign Up</button>
    </form> 
  )
}
