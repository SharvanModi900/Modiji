import React from 'react';

import AirDrop from './AirDropSection';
import TopSection from './topSection'
const  Container = () =>{
 
    return(
        <div>

        
        <TopSection />
        
        <div>
        <button className='float-left ml-[220px] h-14 mt-[-190px] w-40 bg-[#53d927] hover:text-white px-3 py-2 rounded-md text-white font-bold'>PLAY NOW
        
       
        </button>
        <button className='float-left ml-[410px] h-14 mt-[-190px] w-40 bg-[#53d927] hover:text-white px-3 py-2 rounded-md text-white font-bold'>JOIN PRESALE
        
       
        </button>
      
        </div>
     
      <div>
        <AirDrop />
      </div>
       
        </div>
    )
}
export default Container