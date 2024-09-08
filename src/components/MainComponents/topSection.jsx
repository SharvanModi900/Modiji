// import svgicons from '../../assets/4725691-removebg-preview.png'
// const topSection = () =>{
//     return(
//     <><div className=" imgac-1">
//     <marquee> <span className='text-white bg-red-400 p-10 font-bold'>Application is still on development phase be Carefull</span></marquee>
//      <div className="w-auto">
//      <span className="text-white mt-[110px] ml-[222px] w-1/2  text-3xl float-left  font-bold">
//      Welcome to the Future of Coding
// </span>
// <span className="text-[#00d0ff] text-7xl w-1/2 float-left mt-[10px] ml-[222px] font-bold"> The Oinek Editor</span>

// <span className='text-white float-left w-1/2 ml-[220px] text-3xl mt-[20px]'>Revolutionize Your Workflow with AI-Driven Text Editing—Precision, Efficiency, and Intelligence Combined for Unmatched Automation.</span>

//      </div>
//      <div className="float-right mr-8">
// <img src={svgicons} className="mt-[-90px] mr-[100px] w-[330px]  float-right"/>
// </div>

//  </div>
//     </>
//     )
// }
// export default topSection

//import svgicons from '../../assets/63fe79100e2a3a24a8d684b6_head v3.webp';
//text-[#00d0ff]
const topSection = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const firstCmd = document.getElementById('cmd1');
        const secondCmd = document.getElementById('cmd2');
      
        // Start the first animation
        firstCmd.style.visibility = 'visible';
        firstCmd.querySelector('::before').style.animationPlayState = 'running';
      
        // Wait for the first animation to complete before starting the second
        setTimeout(() => {
          secondCmd.style.visibility = 'visible';
          secondCmd.querySelector('::before').style.animationPlayState = 'running';
        }, 8000); // Duration of the first animation
      });
      
    return (
        <>
        {/* <marquee className="bg-red-400 p-4 font-bold text-center">
                Application is still in the development phase. Be careful!
            </marquee> */}
        <div className="relative text-white imgac-1 ">
            
            <div className="container mx-auto px-4  flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-8">
                    <span className="text-3xl lg:text-4xl font-bold block mb-4">
                        Welcome to the GenAI Tool
                    </span>
                    <span className="text-4xl lg:text-5xl font-bold text-[#db7a23] block mb-4">
                        The Oinek Editor
                        {/* <code class="cmd " data-cmd="The Oinek Editor"></code> */}
                    </span>
                    {/* <span className="text-xl lg:text-2xl block">
                        Revolutionize Your Workflow with AI-Driven Text Editor, Efficiency, and Intelligence Combined for Unmatched Automation.
                    </span> */}
                    <code class="cmd " data-cmd="Revolutionize Your Workflow with AI-Driven Text Editor"></code>
                    <code class="cmd " data-cmd="Efficiency, and Intelligence Combined for Unmatched Automation."></code>
       
                    <button className='float-left ml-[0px] h-14 mt-[70px] w-60 bg-[#db7a23] hover:text-white px-3 py-2 rounded-md text-white font-bold'>DOWNLOAD NOW
                    
       
        </button>
        <pre class="pre">          <code>-&nbsp;</code>
          <code>npx&nbsp;</code>
          <code class="cmd" data-cmd="The Oinek Editor"></code>
        </pre>
        <code class="cmd" data-cmd="The Oinek Editor"></code>
                </div>
                
                {/* <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-0">
                    <img src={svgicons} alt="Oinek Editor" className="w-full " />
                    
                    
                </div> */}
            </div>
        </div>
        </>
    );
};

export default topSection;
