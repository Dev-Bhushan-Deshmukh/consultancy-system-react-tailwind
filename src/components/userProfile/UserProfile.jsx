import React, { useState } from 'react'

export const UserProfile = () => {
  const[toggle,setToggle]=useState(true)


  let content=<div className=' w-2/3 h-full  text-slate-500 '>

  <h1 className='font-normal text-sm text-slate-400 '>Information</h1>
  
  John is a passionate React.js developer with a knack for crafting beautiful user interfaces and interactive web applications. He thrives on the challenges of front-end development and enjoys staying updated with the latest trends and best practices in the React ecosystem.
  
  </div>



if(!toggle)
  {

    content=<div className=' w-2/4 h-full   text-slate-500 flex flex-col justify-between items-start'>

    <h1 className='font-normal text-sm text-slate-400 '>Information</h1>
    <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Fist name:
    
    <span className='text-sm w-3/4  font-semibold text-blue-500'>  Bhushan</span>
     </span>
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Last name: 
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>Deshmukh</span>
     </span>
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Age: 
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>26 years.</span>
     </span>
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Qualification: 
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>B.B.A.-computer applications</span>
     </span>
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Experience:
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>1.2 years</span>
     </span>
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Client:
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>21</span>
     </span>
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Contact:
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>+91 7350206770</span>
     </span>
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Email:
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>bhushanvd1235@gmail.com</span>
     </span> 
     <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Socail media:
    
     <span className='text-sm w-3/4  font-semibold text-blue-500'>facebook/bvd.com</span>
     </span>
    </div> 
  }

  let x='border-blue-600 border-b-4 w-fit'
  let y='border-blue-600 border-b-0 w-fit'
  return (
    <div className='h-full w-full bg-white flex flex-col justify-center gap-3 items-center'>
<div className='w-11/12 h-1/3 bg-cardcolor flex justify-start  gap-5'>


<img src='https://miro.medium.com/v2/resize:fit:1024/1*vTSyTeYVlQTwOFZEUkgmNg.jpeg' className='h-full w-1/5 object-cover' alt="" />


<div className='h-full w-1/3 flex flex-col justify-between'>

<span className='w-full font-bold text-xl h-1/5 p-1 flex  flex-col justify-start  '>Bhushan Deshmukh 

<span className='text-sm text-blue-500'> Software Engineer</span>
 </span>
 <span className='w-full font-semibold text-lg h-1/5 p-1 flex  flex-col justify-start text-slate-600  '>Age

<span className='text-sm text-slate-700 '> 26 years</span>
 </span>
 <span className='w-full font-semibold text-lg h-1/5 p-1 flex  flex-col justify-start  text-slate-600  '>Location

<span className='text-sm text-slate-700'> Pune</span>
 </span>
      <div className='w-4/5  h-1/5 flex items-end  justify-start gap-4 text-slate-600  ' >

      <div className={toggle && x} onClick={()=>setToggle(true)}>       <i class="fa-regular fa-eye" style={{color: "#4f5869",}}></i> &nbsp; Timeline</div>

         <div className={!toggle  && x} onClick={()=>setToggle(false)}>
         <i class="fa-regular fa-user" style={{color: "#4f5869",}}></i>  &nbsp; About</div>
         </div>

</div>


</div>

<div className='w-11/12 h-1/2 flex gap-5'>
<div className='w-1/5 h-full bg-cardcolor'></div>



{content}






  

</div>
    </div>
  )
}
