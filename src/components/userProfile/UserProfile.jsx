import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'
export const UserProfile = () => {
  const[toggle,setToggle]=useState("Timeline")
  const{id}=useParams();

  const consultancyServices = [
    {
      id: 1,
      firstName: "Bhushan",
      lastName: "Deshmukh",
      age: 26,
      qualification: "B.B.A.-computer applications",
      experience: "1.2 years",
      client: 21,
      contact: "+91 7350206770",
      email: "bhushanvd1235@gmail.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/bvd.com"
      },
      categoryName: "Management Consulting",
      img: 'https://www.freecodecamp.org/news/content/images/2019/09/jackson_1-1-.jpg',
      description: "Offers advice and solutions to organizations on various aspects of management, including strategy, operations, finance, and human resources."
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      age: 30,
      qualification: "M.S.-Information Technology",
      experience: "3.5 years",
      client: 15,
      contact: "+91 9876543210",
      email: "john.doe@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/johndoe"
      },
      categoryName: "IT Consulting",
      img: 'https://www.scripps.org/sparkle-assets/images/new_doctor_fb-32abb9ba141c8223aadebce90782ac68.jpeg',
      description: "Provides expertise and guidance on information technology-related matters, such as software development, systems integration, cybersecurity, and digital transformation."
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      age: 28,
      qualification: "B.Tech.-Computer Science",
      experience: "2 years",
      client: 10,
      contact: "+91 9876543211",
      email: "jane.smith@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/janesmith"
      },
      categoryName: "IT Consulting",
      img: 'https://www.scripps.org/sparkle-assets/images/new_doctor_fb-32abb9ba141c8223aadebce90782ac68.jpeg',
      description: "Provides expertise and guidance on information technology-related matters, such as software development, systems integration, cybersecurity, and digital transformation."
    },
    {
      id: 4,
      firstName: "Michael",
      lastName: "Johnson",
      age: 32,
      qualification: "MBA-Marketing",
      experience: "5 years",
      client: 25,
      contact: "+91 9876543212",
      email: "michael.johnson@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/mjohnson"
      },
      categoryName: "Financial Consulting",
      img: 'https://www.scripps.org/sparkle-assets/images/new_doctor_fb-32abb9ba141c8223aadebce90782ac68.jpeg',
      description: "Assists clients with financial planning, analysis, risk management, investment strategies, mergers and acquisitions, and compliance with financial regulations."
    },
    {
      id: 5,
      firstName: "Emily",
      lastName: "Davis",
      age: 27,
      qualification: "B.A.-Graphic Design",
      experience: "2.8 years",
      client: 12,
      contact: "+91 9876543213",
      email: "emily.davis@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/emilydavis"
      },
      categoryName: "Human Resources Consulting",
      img: 'https://img.freepik.com/free-photo/african-man-black-suit_1157-45553.jpg',
      description: "Offers HR-related services, including talent acquisition, performance management, organizational development, employee training and development, and HR technology implementation."
    },
    {
      id: 6,
      firstName: "David",
      lastName: "Wilson",
      age: 35,
      qualification: "PhD-Data Science",
      experience: "7 years",
      client: 30,
      contact: "+91 9876543214",
      email: "david.wilson@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/davidwilson"
      },
      categoryName: "Marketing Consulting",
      img: 'https://www.studio98.com/wp-content/uploads/2022/05/studio98-actual-site-do-not-use-as-a-test-site-digital-marketing-consultant.jpg',
      description: "Advises clients on marketing strategies, branding, market research, digital marketing, advertising campaigns, social media management, and customer relationship management."
    },
    {
      id: 7,
      firstName: "Sophia",
      lastName: "Brown",
      age: 29,
      qualification: "MCA-Computer Science",
      experience: "4 years",
      client: 18,
      contact: "+91 9876543215",
      email: "sophia.brown@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/sophiabrown"
      },
      categoryName: "Legal Consulting",
      img: 'https://www.yourfreecareertest.com/wp-content/uploads/2016/07/become_a_lawyer.jpg',
      description: "Provides legal advice and services to individuals and businesses on various legal matters, including contract drafting and negotiation, regulatory compliance, intellectual property, and dispute resolution."
    },
    {
      id: 8,
      firstName: "Sophia",
      lastName: "Williams",
      age: 29,
      qualification: "M.C.A.-Software Engineering",
      experience: "4 years",
      client: 25,
      contact: "+91 9876543215",
      email: "sophia.williams@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/sophiawilliams"
      },
      categoryName: "Environmental Consulting",
      img: 'https://ntgenvironmental.com/wp-content/uploads/2022/06/shutterstock_1476053768.jpeg',
      description: "Assists organizations with environmental compliance, sustainability initiatives, pollution prevention, environmental impact assessments, and resource management."
    },
    {
      id: 9,
      firstName: "Michael",
      lastName: "Clark",
      age: 40,
      qualification: "B.E.-Electronics",
      experience: "10 years",
      client: 18,
      contact: "+91 9876543214",
      email: "michael.clark@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/michaelclark"
      },
      categoryName: "Healthcare Consulting",
      img: 'https://www.bishamconsulting.com/wp-content/uploads/2017/12/shutterstock_421302316-1024x683.jpg',
      description: "Offers consulting services to healthcare organizations and professionals on healthcare delivery, patient care, healthcare IT, regulatory compliance, and healthcare management."
    },
    {
      id: 10,
      firstName: "Emily",
      lastName: "Brown",
      age: 32,
      qualification: "PhD.-Artificial Intelligence",
      experience: "6 years",
      client: 9,
      contact: "+91 9876543213",
      email: "emily.brown@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/emilybrown"
      },
      categoryName: "Education Consulting",
      img: 'https://www.yourfreecareertest.com/wp-content/uploads/2016/07/become_a_lawyer.jpg',
      description: "Provides expertise to educational institutions and stakeholders on curriculum development, teacher training, educational technology integration, student assessments, and accreditation."
    },
    {
      id: 11,
      firstName: "Alex",
      lastName: "Johnson",
      age: 35,
      qualification: "MBA-Finance",
      experience: "7 years",
      client: 12,
      contact: "+91 9876543212",
      email: "alex.johnson@example.com",
      location:'cincinati',
      socialMedia: {
        facebook: "facebook/alexjohnson"
      },
      categoryName: "Real Estate Consulting",
      img: 'https://img.freepik.com/free-photo/african-man-black-suit_1157-45553.jpg',
      description: "Advises clients on real estate investments, property development, property management, market analysis, valuation, and leasing strategies."
    }
  ];
  

  const[user_,setUSer]=useState(consultancyServices.filter((item)=>item.id==id))
console.log(user_)
 


  let x='border-blue-600 border-b-4 w-fit'
  let y='border-blue-600 border-b-0 w-fit'
  return (
    <div className='h-full w-full bg-white flex flex-col justify-center gap-3 items-center'>
<div className='w-11/12 h-1/3 bg-cardcolor flex justify-start  gap-5'>


<img src={user_[0].img} className='h-full w-1/5 object-cover' alt="" />


<div className='h-full w-1/3 flex flex-col justify-between'>

<span className='w-full font-bold text-xl h-1/5 p-1 flex  flex-col justify-start  '>{user_[0].firstName} {user_[0].lastName} 

<span className='text-sm text-blue-500'> {user_[0].qualification} </span>
 </span>
 <span className='w-full font-semibold text-lg h-1/5 p-1 flex  flex-col justify-start text-slate-600  '>Age

<span className='text-sm text-slate-700 '> {user_[0].age} years </span>
 </span>
 <span className='w-full font-semibold text-lg h-1/5 p-1 flex  flex-col justify-start  text-slate-600  '>Location

<span className='text-sm text-slate-700'> {user_[0].location} </span>
 </span>
      <div className='w-4/5  h-1/5 flex items-end  justify-start gap-4 text-slate-600  ' >

      <div className={toggle=="Timeline" && x} onClick={()=>setToggle("Timeline")}>       <i class="fa-regular fa-eye" style={{color: "#4f5869",}}></i> &nbsp; Timeline</div>

         <div className={toggle =="About" && x} onClick={()=>setToggle("About")}>
         <i class="fa-regular fa-user" style={{color: "#4f5869",}}></i>  &nbsp; About</div>
         </div>

</div>


</div>

<div className='w-11/12 h-1/2 flex gap-5'>
<div className='w-1/5 h-full bg-cardcolor'></div>


<AnimatePresence >
  {toggle=='About'
   &&
<motion.div   
initial={{
// rotate:'10deg',
opacity:0,
// scale:0

}}
exit={{
opacity:0,
// scale:0

}}
animate={{
  // rotate:"100deg"
opacity:1,
// scale:1
}}
transition={{
  duration:0.5
}}

 className=' w-2/3 h-full  text-slate-500 '>

  <h1 className='font-normal text-sm text-slate-400 '>Information</h1>
  
  John is a passionate React.js developer with a knack for crafting beautiful user interfaces and interactive web applications. He thrives on the challenges of front-end development and enjoys staying updated with the latest trends and best practices in the React ecosystem.
  
  </motion.div>}
  </AnimatePresence>
  <AnimatePresence >
     {toggle=="Timeline" &&
      <motion.div
    
      initial={{
        // rotate:'10deg',
        opacity:0,
        // scale:0
        
        }}
        exit={{
        opacity:0,
        // scale:0
        
        }}
        animate={{
          // rotate:"100deg"
        opacity:1,
        // scale:1
        }}
        transition={{
          duration:0.5
        }}
      
      className=' w-2/4 h-full   text-slate-500 flex flex-col justify-between items-start'>
  
      <h1 className='font-normal text-sm text-slate-400 '>Information</h1>
      <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Fist name:
      
      <span className='text-sm w-3/4  font-semibold text-blue-500'>  {user_[0].firstName}</span>
       </span>
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Last name: 
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].lastName}</span>
       </span>
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Age: 
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].age} years.</span>
       </span>
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Qualification: 
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].qualification}</span>
       </span>
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Experience:
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].experience}</span>
       </span>
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Client:
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].client}</span>
       </span>
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Contact:
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].contact}</span>
       </span>
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Email:
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].email}</span>
       </span> 
       <span className='w-full font-semibold text-sm h-1/5 p-1 flex   justify-between'>Socail media:
      
       <span className='text-sm w-3/4  font-semibold text-blue-500'> {user_[0].socialMedia.facebook}</span>
       </span>
      </motion.div> }
</AnimatePresence>







  

</div>
    </div>
  )
}
