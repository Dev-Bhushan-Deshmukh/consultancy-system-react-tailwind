import React, { useEffect, useState } from 'react'
import { Searchbar } from '../utility components/search/Searchbar'
import { Link, useParams } from 'react-router-dom';

export const ConsultantProfile = () => {
    let { category } = useParams();
    const [personelList,setPersonelList]=useState([]);
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
          socialMedia: {
            facebook: "facebook/alexjohnson"
          },
          categoryName: "Real Estate Consulting",
          img: 'https://img.freepik.com/free-photo/african-man-black-suit_1157-45553.jpg',
          description: "Advises clients on real estate investments, property development, property management, market analysis, valuation, and leasing strategies."
        }
      ];
      

useEffect(()=>{
console.log(category)
    category=='all'?setPersonelList(consultancyServices):setPersonelList(consultancyServices.filter((item)=>item.categoryName==category));

    



},[category])

  



// setPersonelList(
//     consultancyServices.map((item)=>item.categoryName===category))
    // console.log(category);


  return (
    <div className='h-full   '>
    <Searchbar/>
    
    <div className='  p-3 mt-4 h-4/5 flex-shrink-0  w-full  max-[445px]:w-full   md:w-full  sm:rounded-lg md:rounded-2xl flex flex-wrap  overflow-y-scroll   justify-center items-start gap-3 bg-white '>
    
    
    {personelList.map((item)=><div key={item.categoryName} className='text-textLighter font-semibold max-[533px]:w-full max-[891px]:w-2/3  max-[1128px]:w-1/3  bg-white border-2 border-slate-100 w-2/5  h-2/5 flex-shrink-0  flex flex-row  items-center'>
    <img src={item.img}  className='h-full w-1/2 object-cover' alt="" />
    {item.name}
    <div className='h-full w-1/2 flex flex-col justify-between text-sm'>
      <span className='w-full font-bold  h-1/6 p-1 bg-slate-50'>{item.firstName} &nbsp; {item.lastName}</span>
      <span className='w-full h-1/6 p-1 text-blue-600'>{item.qualification} </span>
      <span className='w-full  h-1/6 p-1'>{item.experience}</span>
      <span className='w-full  h-1/6 p-1'>{item.age}</span>
      {/* {item.categoryName} */}
   
      <span className='w-full  h-1/5 p-1'>
      <Link to={`/home/user/${item.id}`}> <button className='bg-orange-500 w-2/3 h-full text-white  '>View</button></Link>
    </span>
    </div>
    </div>)}    
    
    
    
    
    
    
    
    </div>  
    
    
    
        </div>
  )
}


