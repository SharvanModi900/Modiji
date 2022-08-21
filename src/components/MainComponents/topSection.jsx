import svgicons from '../../assets/4725691-removebg-preview.png'
const topSection = () =>{
    return(
    <><div className=" imgac-1">
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
    </>
    )
}
export default topSection