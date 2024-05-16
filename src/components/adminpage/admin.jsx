import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import profile from '../../assets/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg'
export const Admin = () => {
    const indianNames = [
        "Aarav Patel",
        "Aditi Sharma",
        "Alok Gupta",
        "Ananya Singh",
        "Arjun Kumar",
        "Chetan Desai",
        "Deepika Reddy",
        "Gaurav Mehta",
        "Ishaan Shah",
        "Jasmine Verma",
        "Kavya Joshi",
        "Manish Choudhury",
        "Neha Tiwari",
        "Pranav Sharma",
        "Riya Khanna",
        "Rohan Gupta",
        "Shreya Sharma",
        "Siddharth Mehra",
        "Tanvi Singh",
        "Vikram Patel"
      ];
      
      // Example usage
      console.log(indianNames[Math.floor(Math.random() * indianNames.length)]);
      const[updateUser,setUpdateUser]=useState(false)
const[imgData,setImgData]=useState(profile);
    function files(e){
// e.target.files
console.log(e.target.value,e.target.files)
setImgData(URL.createObjectURL(e.target.files[0]))
    }
let unselectedOptionStyle=' h-full grid place-content-center w-1/6 text-slate-700 font-semibold text-lg'
    let selectedOptionStyle=' h-full grid place-content-center w-1/6 text-slate-700 font-semibold text-lg  border-b-4 border-blue-500'

    const[active,secActive]=useState('users')
  return (
    <div className='h-full w-full flex flex-col justify-center  items-center'>

<div className='w-11/12 h-barHeight bg-cardcolor flex justify-evenly items-center '>


<div  className={active=='users'?selectedOptionStyle:unselectedOptionStyle} onClick={()=>secActive('users')}>User</div>
<div className={active=='consultants'?selectedOptionStyle:unselectedOptionStyle}  onClick={()=>secActive('consultants')}>Consultant</div>

<div  className={active=='category'?selectedOptionStyle:unselectedOptionStyle}  onClick={()=>secActive('category')}>Category</div>
</div>



<div className='w-full h-5/6  flex justify-evenly items-center' >

    {!updateUser && <div className='w-1/3 border-2 border-slate-50 h-5/6 flex flex-col items-center justify-start gap-3 overflow-y-scroll'>
<h1 className='text-center font-semibold text-lg text-slate-600'>Users</h1>  


{
    indianNames.map((item)=><span className='w-full bg-white shrink-0 h-barHeight flex justify-between items-center pl-1 text-slate-700 font-semibold' key={item}>{item} <span className=' h-full w-1/3 gap-2 flex shrink-0' > <button className='h-full w-1/2 bg-slate-50 '><i class="fa-regular fa-pen-to-square"></i></button> <button className='w-1/2 bg-slate-50'><i class="fa-solid fa-trash"></i></button>  </span> </span>)
}








</div>}

<div className='w-1/3 border-2 border-slate-50 h-5/6 flex flex-col items-center justify-start gap-3 overflow-y-scroll'>
<h1 className='text-center font-semibold text-lg text-slate-600'>Users</h1>  


{
    indianNames.map((item)=><span className='w-full bg-white shrink-0 h-barHeight flex justify-between items-center pl-1 text-slate-700 font-semibold' key={item}>{item} <span className=' h-full w-1/3 gap-2 flex shrink-0' > <button onClick={()=>setUpdateUser(true)} className='h-full w-1/2 bg-slate-50 '><i class="fa-regular fa-pen-to-square"></i></button> <button className='w-1/2 bg-slate-50'><i class="fa-solid fa-trash"></i></button>  </span> </span>)
}








</div>

{updateUser && <div className=' w-2/5 border-2 border-slate-50 h-5/6 flex flex-col items-center justify-center gap-4 '>
<h1 className='text-center font-semibold text-lg text-slate-600'>Update</h1>   
<Form className=' flex flex-col  h-Heightninet w-full items-center justify-start gap-3 '>

   
    
<span className='w-11/12 h-1/5  flex justify-between items-center border-2 border-slate-200 p-2 '>
<img src={imgData} className='h-16 w-16 rounded-full' alt="" />
    
     <input type="file" className='shrink-0 h-9 file:rounded-full file:bg-blue-500 file:w-2/3 file:h-full file:outline-none file:border-none  file:text-white text-slate-500' placeholder='chose' onChange={files} /> </span>
<span className='w-11/12  h-barHeight flex justify-between'>First name: <input className='w-2/3 h-full border-2 border-slate-100' /> </span>
<span className='w-11/12  h-barHeight flex justify-between'>Last name: <input className='w-2/3 h-full border-2 border-slate-100' /> </span>
<span className='w-11/12  h-barHeight flex justify-between'>Location:  <input className='w-2/3 h-full border-2 border-slate-100' /> </span>
<span className='w-11/12  h-barHeight flex justify-between'>Contact:<input className='w-2/3 h-full border-2 border-slate-100' /> </span>
<span className='w-11/12  h-barHeight flex justify-between'>Email:  <input className='w-2/3 h-full border-2 border-slate-100' /> </span>
<button type='' className='w-11/12 h-barHeight bg-orange-500 text-white' onClick={()=>setUpdateUser(false)}>Update</button>

</Form>

</div>  }
{/* */}


</div>


    </div>
  )
}
