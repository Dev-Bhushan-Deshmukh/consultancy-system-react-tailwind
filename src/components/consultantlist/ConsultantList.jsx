import React from 'react'
import { Searchbar } from '../utility components/search/Searchbar';

export const ConsultantList = () => {
  const consultancyServices = [
    {
        categoryName: "Management Consulting",
        description: "Offers advice and solutions to organizations on various aspects of management, including strategy, operations, finance, and human resources."
    },
    {
        categoryName: "IT Consulting",
        description: "Provides expertise and guidance on information technology-related matters, such as software development, systems integration, cybersecurity, and digital transformation."
    },
    {
        categoryName: "Financial Consulting",
        description: "Assists clients with financial planning, analysis, risk management, investment strategies, mergers and acquisitions, and compliance with financial regulations."
    },
    {
        categoryName: "Human Resources Consulting",
        description: "Offers HR-related services, including talent acquisition, performance management, organizational development, employee training and development, and HR technology implementation."
    },
    {
        categoryName: "Marketing Consulting",
        description: "Advises clients on marketing strategies, branding, market research, digital marketing, advertising campaigns, social media management, and customer relationship management."
    },
    {
        categoryName: "Legal Consulting",
        description: "Provides legal advice and services to individuals and businesses on various legal matters, including contract drafting and negotiation, regulatory compliance, intellectual property, and dispute resolution."
    },
    {
        categoryName: "Environmental Consulting",
        description: "Assists organizations with environmental compliance, sustainability initiatives, pollution prevention, environmental impact assessments, and resource management."
    },
    {
        categoryName: "Healthcare Consulting",
        description: "Offers consulting services to healthcare organizations and professionals on healthcare delivery, patient care, healthcare IT, regulatory compliance, and healthcare management."
    },
    {
        categoryName: "Education Consulting",
        description: "Provides expertise to educational institutions and stakeholders on curriculum development, teacher training, educational technology integration, student assessments, and accreditation."
    },
    {
        categoryName: "Real Estate Consulting",
        description: "Advises clients on real estate investments, property development, property management, market analysis, valuation, and leasing strategies."
    }
];
  return (
    <div className='w-full h-full'>

<Searchbar/>
<div className='  p-3 mt-4 h-4/5 flex-shrink-0  w-full  max-[445px]:w-full   md:w-full  sm:rounded-lg md:rounded-2xl flex flex-wrap  overflow-y-scroll   justify-center items-center gap-3   '>


{consultancyServices.map((item)=><div className='text-textLighter font-semibold max-[533px]:w-full max-[891px]:w-2/3  max-[1128px]:w-1/3  rounded-3xl bg-slate-00 border-2 border-slate-200 w-2/5  h-1/2 flex-shrink-0  flex flex-col justify-center items-center'>
<img src={item.imgPath}  className='h-1/2' alt="" />
{item.name}

</div>)}    







</div>  





    </div>
  )
}
