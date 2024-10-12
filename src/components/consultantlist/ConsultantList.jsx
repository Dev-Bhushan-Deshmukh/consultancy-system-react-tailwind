import React from 'react'
import { Searchbar } from '../utility components/search/Searchbar';

export const ConsultantList = () => {
  const consultancyServices = [
   
    { date: '12-Jan-2024', status: 'Order Placed' },
    { date: '13-Jan-2024', status: 'Payment Confirmed' },
    { date: '14-Jan-2024', status: 'Shipped' },
    { date: '15-Jan-2024', status: 'Out for Delivery' },
    { date: '16-Jan-2024', status: 'Delivered' },
    { date: '17-Jan-2024', status: 'Return Requested' },
    { date: '18-Jan-2024', status: 'Return Approved' },
    { date: '19-Jan-2024', status: 'Refund Processed' }
    
      
];
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center '>


        <div className='h-[60%] w-[50%] border   rounded-md flex flex-col items-center pt-[10px]'> 
          
            {consultancyServices.map((item)=><div  className='w-[90%] h-[10%] flex items-center gap-10'>

<span className='text-slate-500  font-semibold'> {item.date}</span>

<div className='h-full w-[80%] flex items-center border-l-green-500 border-l-[4px] gap-2'>
<div className='h-[25px] w-[25px] rounded-full bg-green-500 grid place-content-center ml-[-14px] '></div>

<div className='h-[95%] flex items-center pl-3 w-[90%]  bg-slate-50 rounded-md'>{item.status}</div>


</div>


            </div>)}
            
           
        
        
        </div>








    </div>
  )
}
