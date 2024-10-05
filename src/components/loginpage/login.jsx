import React, { useRef, useState } from 'react'
import connectImg from '../../assets/8104960.jpg'
import { json } from 'react-router-dom';
import { Loginform } from '../login/Loginform';
import { Signup } from '../signup/Signup';
// import connectImg from '../../assets/5182460.jpg'
// import { Form } from 'react-router-dom'
export const Login = () => {


  const [showSignIn, setSignIn] = useState(false);
  const[logins,setLogins]=useState({user:'',password:''})
  // console.log(document.cookie.split('=')[1])



  async function authenticatUser(e) {
    const token = document.cookie.split('=')[1]

    e.preventDefault();
    const response = await fetch('http://localhost:8000/authenticateuser', {

      headers: {
        Authorization: `Bearer ${token}`


      },


    })

    const data = await response.json();
    console.log(data);




  }



  async function signUpUser(e) {
   
    console.log()
   
//     e.preventDefault();
//     const response = await fetch('http://localhost:8000/signup', {

//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username: newUserNameref.current.value,
//         password: newPasswordref.current.value
//       })

//     })
setSignIn(true)

// if(response.status==200)
// {
// setSignIn(true)
// }
  }






  return (
    <div className='flex h-screen items-center '>
      <div className='w-full h-2/3 sm:w-11/12   md:h-2/3 md:w-2/3 flex-col  flex  items-start justify-center pl-10  '>
<h1  className='w-10/12 text-blue-600 text-2xl  font-bold'>FindSpot</h1>
<h2 className='w-10/12 text-slate-400 text-xl font-semibold'>Find the best consultant near you!</h2>
        {showSignIn? <Signup/>
    :
        <Loginform signUpUser={signUpUser}/>



        }



      </div>
      <img className='hidden md:block h-full w-1/2 object-contain' src={connectImg} alt="" />








    </div>
  )
}
