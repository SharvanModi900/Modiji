import React from 'react';
import svgicons from '../../assets/4725691-removebg-preview.png'
import svgicons1 from '../../assets/6581547-removebg-preview.png'


const  Container = () =>{
    return(
        <div>

        
        <div className=" imgac-1">
           <marquee> <span className='text-white bg-red-400 p-10 font-bold'>Application is still on development phase be Carefull</span></marquee>
            <div className="w-auto">
            <span className="text-white mt-[110px] ml-[222px] w-1/3  text-3xl float-left  font-bold">
        WEB 3 GAMING  & PROFIT SHARING
       </span>
       <span className="text-[#00d0ff] text-7xl w-1/2 float-left mt-[10px] ml-[222px] font-bold">METAVERSE</span>
       <span className='text-white float-left w-1/4 ml-[220px] text-3xl mt-[20px] text-sm text-justify'>Start an Extraordinary Era of Virtual Reality World</span>
            </div>
            <div className="float-right mr-8">
<img src={svgicons} className="mt-[-190px] mr-[108px] w-[470px]  float-right"/>
       </div>
       
        </div>
        
        <div>
        <button className='float-left ml-[220px] h-14 mt-[-190px] w-40 bg-[#53d927] hover:text-white px-3 py-2 rounded-md text-white font-bold'>PLAY NOW
        
       
        </button>
        <button className='float-left ml-[410px] h-14 mt-[-190px] w-40 bg-[#53d927] hover:text-white px-3 py-2 rounded-md text-white font-bold'>JOIN PRESALE
        
       
        </button>
      
        </div>
        <div className='md-section w-auto'>
        <div className='w-1/2 float-left px-[100px]'>
<img src={svgicons1} />
        </div>
        <div className='w-auto float-right px-[10px] mr-[100px] mt-[80px]'>
        
      <div className='w-96 border-2 border-cyan-900	rounded text-white px-2 py-2 mb-[20px]  bg-[#000000]	'>
        <h1 className='text-cyan-400 font-bold text-2xl text-center w-auto bg-gray'>Web3 Games</h1>
      
        Enjoy Play-to-Earn games, win convertible GAMEIN tokens.
      </div>
      <div className='w-96 border-2 border-cyan-900	rounded text-white px-2 py-2 mb-[20px]  bg-[#000000]	'>
        <h1 className='text-cyan-400 font-bold text-2xl text-center w-auto bg-gray'>In Game NFT</h1>
        Profit Sharing NFT's , Hold when games played
      </div>
      <div className='w-96 border-2 border-cyan-900	rounded text-white px-2 py-2 mb-[20px] bg-[#000000]	'>
        <h1 className='text-cyan-400 font-bold text-2xl text-center w-auto bg-gray'>Rewards and Community</h1>
        Access to Multiple rewards & Big Crypto Community
      </div>
      <div className='w-96 border-2 border-cyan-900	rounded text-white px-2 py-2  bg-[#000000]	'>
      <h1 className='text-cyan-400 font-bold text-2xl text-center w-auto'>Gamein tokemony</h1>
      Hold GAMEIN & Enjoy great returns
      </div>
     
      {/* <div className='w-auto float-left'>
<h1 className='text-white w-1/4 item-center   mt-[300px]'>
    Unpacking the 
     <span className='text-cyan-400 px-2 font-bold'>Technologies</span> 
     that underpin the 
     <span className='text-cyan-400 px-2 font-bold'>Metaverse</span>  and the myriad of possibilities unlocked
</h1>
        </div> */}
        {/* <div className='w-auto float-left'>
            <h1 className='text-white text-2xl'>
            <span className='text-cyan-600 font-bold items-center text-5xl'>270000000 TOKEN</span>
            Total Supply
            </h1>
            </div> */}
        </div>
        <div className='w-auto md-wave float-left'>
        <h1 className='text-white w-1/4 ml-[450px] mt-[100px] float-left item-center '>
    Unpacking the 
     <span className='text-cyan-400 px-2 font-bold'>Technologies</span> 
     that underpin the 
     <span className='text-cyan-400 px-2 font-bold'>Metaverse</span>  and the myriad of possibilities unlocked
</h1>
<div className='w-1/2 float-left'>
    <div className='lg-curcle bg-[#ff198e] mt-[100px] ml-[150px] float-left rounded-[100%] border-8	'>
<div className='lg-square float-left bg-black ml-[-14px] mt-[100px] border-t-8 border-b-8 border-white'>
</div>
<div className='vr-square float-left bg-black ml-[110px] border-l-8 border-white border-r-8 border-white mt-[-183px]'>
<div className='sm-curcle bg-black ml-[-78px] mt-[54px] border-4   rounded-[100%] float-left'>
<span className='text-[#14dfff] font-bold items-center w-[100px] float-left mt-[60px] ml-[60px]'> Free NFT with every Ticket</span>
</div>
</div>

</div></div>
<div className='w-1/2 float-right'>
    <img src={svgicons} className="mt-[90px] w-[500px]" />
</div>
</div>
        </div>
       
       
        </div>
    )
}
export default Container