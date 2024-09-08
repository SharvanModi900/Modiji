import { ethers } from "ethers"
import { useEffect } from "react";
import { useState } from "react";
import { company } from "../../company";
const {ethereum} = window;
const NavBar = () =>{
 const [haveMetaMask, setHaveMetaMask] = useState(true);
 const [isConnected,setIsConneted] = useState(false)
 const[accountAddress, setAccountsAddress] = useState('');

 const {ethereum} = window;
 const availibilityOfMetaMask = async() =>{
  if(!ethereum){
    setHaveMetaMask(false)
  }
  setHaveMetaMask(true)
      }
      const connectToWallet = async() =>{
        console.log('cled')
try{
  if(!ethereum){
    setHaveMetaMask(false)
  }
  const accounts = await ethereum.request({
    method:'eth_requestAccounts'
  })

}
catch(error){
setIsConneted(false)
}
      }
  useEffect(()=>{
    

    availibilityOfMetaMask();
    connectToWallet();
  },[])

 console.log(company.brandName)
    return(
       
      
        <nav class="bg-gray-800 ">
          <div class="max-w-7xl mx-auto  sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
               
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                 
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex-shrink-0 flex items-center">
                  <img src={company[0].brandLogo} style={{width:48,marginTop:1}}/>
                  <a href="https://www.blockrog.com" className="text-white px-3 py-2 rounded-md  font-bold">
                    <h3 className="text-xl ">{company[0].brandName}</h3></a>
                </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
               
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    
                    <a href="#" class=" text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
        
                    <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
        
                    <a href="#" class="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book Demo</a>
        
                    <a href="#" class="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
                   {haveMetaMask ?<>
                   {isConnected ?<>
                    <a href="#" class="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Download</a>
                   </>:<>
                   
                   <button onClick={connectToWallet} class="text-gray-300 bg-[#db7a23] hover:bg-[#db7a25] hover:text-white px-3 py-2 rounded-md text-white font-medium">Download</button></>}
                   </>:<></>}
                  </div>
                </div>
              </div>
        
               
            </div>
          </div>
        
         
          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              </div>
              <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
        
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
        
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
        
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
         
        </nav>
        

    )
}
export default NavBar;