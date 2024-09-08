import svgicons1 from '../../assets/6581547-removebg-preview.png'
import { company } from '../../company';
const middleSection = () =>{
    return(
        <div className='md-section w-auto'>
          <div className=" container mx-auto  flex flex-col lg:flex-row items-center">
                {/* Left Image */}
                <div class="outer">
  <div class="dot"></div>
  <div class="card-new">
    <div class="ray"></div>
    <div class="text">Features</div>
    <div>Views</div>
    <div class="line topl"></div>
    <div class="line leftl"></div>
    <div class="line bottoml"></div>
    <div class="line rightl"></div>
  </div>
</div>
                {/* <div className="w-full lg:w-1/2 px-6 flex justify-center lg:justify-start mb-8 lg:mb-0">
                    {/* <img src={svgicons1} alt="AirDrop Illustration" className="max-w-full h-auto" /> 
                    


                </div> */}

                <div className="w-full lg:w-full">
    <div className="flex flex-wrap mx-3 gap-6">
        {company[0]?.codeAutoma?.map((item, index) => (
            <div key={index} className="book  px-3 mb-6">
                <p>{item.subTitle}</p>
                <div className="cover">
                    <h1 className="text-[#db7a23] font-bold text-xl text-center">{item.title}</h1>
                </div>
            </div>
        ))}
    </div>
</div>


                
                    
                
                {/* Right Text Sections */}
                {/* <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 px-9">
                   
                    <div className="border-2 border-[#db7a23] rounded bg-black text-white p-4">
                        <h1 className="text-[#db7a23] font-bold text-xl text-center">New Era of AI Editor</h1>
                        <p>Revolutionize Your Coding Experience: The New Era of AI-Powered Text Editing.</p>
                    </div>
                    
                   
                    <div className="border-2 border-[#db7a23] rounded bg-black text-white p-7">
                        <h1 className="text-[#db7a23] font-bold text-xl text-center">AI Code Editing</h1>
                        <p>AI-Driven Code Editing: Precision, Efficiency, and Intelligence at Your Fingertips.</p>
                    </div>
                    
                   
                    <div className="border-2 border-[#db7a23] rounded bg-black text-white p-4">
                        <h1 className="text-[#db7a23] font-bold text-xl text-center">Streamline Your Coding with the Power of AI</h1>
                        <p>Transform Your Coding Workflow: Streamline and Optimize with Cutting-Edge AI Technology.</p>
                    </div>
                    
                    
                    <div className="border-2 border-[#db7a23] rounded bg-black text-white p-4">
                        <h1 className="text-[#db7a23] font-bold text-xl text-center">Efficient, Intelligent, and Automated</h1>
                        <p>Effortless Coding: Experience Efficiency, Intelligence, and Automation with AI Integration.</p>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default middleSection;