import React from 'react'
import { Searchbar } from '../utility components/search/Searchbar'

export const Category = () => {


  const consultancyServices = [
    {
        categoryName: "Management Consulting",
        img:'https://i0.wp.com/financialhotspot.com/wp-content/uploads/2022/02/shutterstock_1503919118.jpg?fit=1200%2C800&ssl=1',
        description: "Offers advice and solutions to organizations on various aspects of management, including strategy, operations, finance, and human resources."
    },
    {
        categoryName: "IT Consulting",
        img:'https://www.keenesystems.com/hubfs/blog-images/bigstock-It-Consultant-Presenting-Tag-C-435713942.jpg',
        description: "Provides expertise and guidance on information technology-related matters, such as software development, systems integration, cybersecurity, and digital transformation."
    },
    {
        categoryName: "Financial Consulting",
        img:'https://img1.wsimg.com/isteam/ip/2cdd937c-6619-4712-8b7c-e0cc3b5ce6a5/shutterstock_1384423862.jpg/:/rs=w:360,h:270,cg:true,m/cr=w:360,h:270',
        description: "Assists clients with financial planning, analysis, risk management, investment strategies, mergers and acquisitions, and compliance with financial regulations."
    },
    {
        categoryName: "Human Resources Consulting",
        img:'https://www.inventiva.co.in/wp-content/uploads/2023/10/7-2.jpg',
        description: "Offers HR-related services, including talent acquisition, performance management, organizational development, employee training and development, and HR technology implementation."
    },
    {
        categoryName: "Marketing Consulting",
        img:'https://www.studio98.com/wp-content/uploads/2022/05/studio98-actual-site-do-not-use-as-a-test-site-digital-marketing-consultant.jpg',
        description: "Advises clients on marketing strategies, branding, market research, digital marketing, advertising campaigns, social media management, and customer relationship management."
    },
    {
        categoryName: "Legal Consulting",
        img:'https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/c_fill,q_auto:best,f_auto,e_unsharp_mask:80,w_825,h_478/Lawyers%20Weekly%2Fcyber-tech-law_f5gpb1',
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
        img:'https://themargroups.com/wp-content/uploads/2019/11/uni-Copy.jpg',
        description: "Provides expertise to educational institutions and stakeholders on curriculum development, teacher training, educational technology integration, student assessments, and accreditation."
    },
    {
        categoryName: "Real Estate Consulting",
        img:'https://au.valenta.io/wp-content/uploads/2022/10/How-can-Real-Estate-Property-Companies-benefit-from-process-consulting.jpg',
        description: "Advises clients on real estate investments, property development, property management, market analysis, valuation, and leasing strategies."
    }
];

  return (
    <div className='h-full   '>
<Searchbar/>

<div className='  p-3 mt-4 h-4/5 flex-shrink-0  w-full  max-[445px]:w-full   md:w-full  sm:rounded-lg md:rounded-2xl flex flex-wrap  overflow-y-scroll   justify-center items-center gap-3  '>


{consultancyServices.map((item)=><div className='text-textLighter font-semibold max-[533px]:w-full max-[891px]:w-2/3  max-[1128px]:w-1/3  bg-white border-2 border-slate-100 w-1/4  h-1/2 flex-shrink-0  flex flex-col  items-center'>
<img src={item.img}  className='h-4/5 w-full object-cover' alt="" />
{item.name}
<span>{item.categoryName}</span>
</div>)}    







</div>  



    </div>
  )
}
