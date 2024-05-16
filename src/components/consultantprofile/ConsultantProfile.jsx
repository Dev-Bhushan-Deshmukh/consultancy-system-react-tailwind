import React from 'react'
import { Searchbar } from '../utility components/search/Searchbar'

export const ConsultantProfile = () => {
  const consultancyServices = [
    {
        categoryName: "Management Consulting",
        img:'https://www.freecodecamp.org/news/content/images/2019/09/jackson_1-1-.jpg',
        description: "Offers advice and solutions to organizations on various aspects of management, including strategy, operations, finance, and human resources."
    },
    {
        categoryName: "IT Consulting",
        img:'https://www.scripps.org/sparkle-assets/images/new_doctor_fb-32abb9ba141c8223aadebce90782ac68.jpeg',
        description: "Provides expertise and guidance on information technology-related matters, such as software development, systems integration, cybersecurity, and digital transformation."
    },
    {
        categoryName: "Financial Consulting",
        img:'https://www.scripps.org/sparkle-assets/images/new_doctor_fb-32abb9ba141c8223aadebce90782ac68.jpeg',
        description: "Assists clients with financial planning, analysis, risk management, investment strategies, mergers and acquisitions, and compliance with financial regulations."
    },
    {
        categoryName: "Human Resources Consulting",
        img:'https://img.freepik.com/free-photo/african-man-black-suit_1157-45553.jpg',
        description: "Offers HR-related services, including talent acquisition, performance management, organizational development, employee training and development, and HR technology implementation."
    },
    {
        categoryName: "Marketing Consulting",
        img:'https://www.studio98.com/wp-content/uploads/2022/05/studio98-actual-site-do-not-use-as-a-test-site-digital-marketing-consultant.jpg',
        description: "Advises clients on marketing strategies, branding, market research, digital marketing, advertising campaigns, social media management, and customer relationship management."
    },
    {
        categoryName: "Legal Consulting",
        img:'https://www.yourfreecareertest.com/wp-content/uploads/2016/07/become_a_lawyer.jpg',
        description: "Provides legal advice and services to individuals and businesses on various legal matters, including contract drafting and negotiation, regulatory compliance, intellectual property, and dispute resolution."
    },
    {
        categoryName: "Environmental Consulting",
        img:'https://ntgenvironmental.com/wp-content/uploads/2022/06/shutterstock_1476053768.jpeg',
        description: "Assists organizations with environmental compliance, sustainability initiatives, pollution prevention, environmental impact assessments, and resource management."
    },
    {
        categoryName: "Healthcare Consulting",
        img:'https://www.bishamconsulting.com/wp-content/uploads/2017/12/shutterstock_421302316-1024x683.jpg',
        description: "Offers consulting services to healthcare organizations and professionals on healthcare delivery, patient care, healthcare IT, regulatory compliance, and healthcare management."
    },
    {
        categoryName: "Education Consulting",
        img:'https://www.yourfreecareertest.com/wp-content/uploads/2016/07/become_a_lawyer.jpg',
        description: "Provides expertise to educational institutions and stakeholders on curriculum development, teacher training, educational technology integration, student assessments, and accreditation."
    },
    {
        categoryName: "Real Estate Consulting",
        img:'https://img.freepik.com/free-photo/african-man-black-suit_1157-45553.jpg',
        description: "Advises clients on real estate investments, property development, property management, market analysis, valuation, and leasing strategies."
    }
];
  return (
    <div className='h-full   '>
    <Searchbar/>
    
    <div className='  p-3 mt-4 h-4/5 flex-shrink-0  w-full  max-[445px]:w-full   md:w-full  sm:rounded-lg md:rounded-2xl flex flex-wrap  overflow-y-scroll   justify-center items-start gap-3 bg-white '>
    
    
    {consultancyServices.map((item)=><div key={item.categoryName} className='text-textLighter font-semibold max-[533px]:w-full max-[891px]:w-2/3  max-[1128px]:w-1/3  bg-white border-2 border-slate-100 w-2/5  h-2/5 flex-shrink-0  flex flex-row  items-center'>
    <img src={item.img}  className='h-full w-1/2 object-cover' alt="" />
    {item.name}
    <div className='h-full w-1/2 flex flex-col justify-between text-sm'>
      <span className='w-full font-bold  h-1/6 p-1 bg-slate-50'>Bhushan Deshmukh </span>
      <span className='w-full h-1/6 p-1 text-blue-600'>Software Engineer </span>
      <span className='w-full  h-1/6 p-1'>1.2 years</span>
      <span className='w-full  h-1/6 p-1'>21.</span>
      {/* {item.categoryName} */}
   
      <span className='w-full  h-1/5 p-1'>
    <button className='bg-orange-500 w-2/3 h-full text-white  '>View</button>
    </span>
    </div>
    </div>)}    
    
    
    
    
    
    
    
    </div>  
    
    
    
        </div>
  )
}
