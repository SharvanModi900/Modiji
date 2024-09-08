import svgicons1 from '../../assets/6581547-removebg-preview.png'
import svgicons from '../../assets/4725691-removebg-preview.png'
export const SecondSection = ()=>{
    
    return(
        <div className='md-section w-auto'>
        
        <div className='w-auto'>
                <h1 className='text-white text-2xl w-1/2 ml-[450px] mt-[100px]'>
                    Unveiling the Future of AI Text Editing: 
                    <span className='text-[#db7a23] px-2 font-bold'>
                        Discover the Cutting-Edge Technology
                    </span> 
                    Driving Precision, Efficiency, and Innovation in Modern Software Programming.
                </h1>

               <div className='flex'>
               <div className='w-1/2'>
                <div className='lg-curcle shadow-inner	 bg-[#db7a23] mt-[100px] ml-[150px] float-left rounded-[100%] border-8	'>
            <div className='lg-square float-left bg-black ml-[-14px] mt-[100px] border-t-8 border-b-8 border-white'>
            </div>
            <div className='vr-square float-left bg-black ml-[110px] border-l-8 border-white border-r-8 border-white mt-[-183px]'>
            <div className='sm-curcle  bg-black ml-[-78px] mt-[54px] border-8 shadow-lg shadow-cyan-500/50   rounded-[100%] float-left'>
            <span className='text-white text-[160px] font-bold items-center w-[100px] float-left mt-[-40px] ml-[40px]'> 
            1
            
            </span>
            </div>
            </div>
            
            </div>
            
            
            </div>
            <div className='w-1/2'>
    <img src={svgicons} className="mt-[90px] w-[500px]" />
</div>
               </div>

                </div>
                
        </div>
    )
}