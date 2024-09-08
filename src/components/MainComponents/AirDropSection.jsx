
// import svgicons1 from '../../assets/6581547-removebg-preview.png'
// import svgicons from '../../assets/4725691-removebg-preview.png';
// import { company } from '../../company';
// const AirDrop = () =>{
//     return(
//         <>

//                 <div className='flex md-section '>
// <div className='w-1/2'>
//     <div className='text-white  items-center ml-[200px]'>
        
// <span className='text-[#00e7ff] float-left text-[32px] font-bold'>Code with rich features</span>
// <span className='text-white font-sm  float-left'>There's a lot more to an editor. Whether it's using built-in features or rich extensions, there's something for everyone.</span>
// </div>
// </div>
// <div className='w-1/2'>
    
    
// <div className='text-white text-[40px] float-right mr-[160px]  p-8   drop-shadow-lg underline leading-[100px]'>
// <div className='float-left'>
//     <div className='w-[15px] h-[15px] bg-[#33c7ff] border-4 decoration border-white m-4 absolute ml-[5px] mt-[0px] rounded-[100px]'></div>
//     <div className='w-[15px] h-[15px] bg-[#33c7ff]  border-4 border-white absolute ml-[35px] rounded-[100px]'></div>
//     <div className='w-[15px] h-[15px] bg-[#33c7ff] border-4 border-white rounded-[100px] absolute ml-[65px] '></div>
//     </div>
//     HOTDROP
//     <div className='float-left mt-[100px]'>
//     <div className='w-[15px] h-[15px] bg-[#33c7ff] border-4 decoration border-white m-4 absolute ml-[5px] mt-[0px] rounded-[100px]'></div>
//     <div className='w-[15px] h-[15px] bg-[#33c7ff]  border-4 border-white absolute ml-[35px] rounded-[100px]'></div>
//     <div className='w-[15px] h-[15px] bg-[#33c7ff] border-4 border-white rounded-[100px] absolute ml-[65px] '></div>
//     </div>
//     </div>
// </div>
// </div>
// <div className="flex flex-wrap gap-6 mb-[100px]"> 
//     {company[0]?.features?.map((item, index) => (
//         <div key={index} className="flex-shrink-0 max-w-xs mx-2"> 
//             <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col min-h-72 items-center p-4">
//                 <div className="flex justify-center mb-4">
//                     <img src={item.icons} style={{height: 40, width: 40}} alt={item.title} />
//                 </div>
//                 <div className="p-4 flex-1">
//                     <h2 className="text-xl text-center font-semibold mb-1 text-[#00e7ff]">{item.title}</h2>
//                     <p className="text-white text-center">{item.subTitle}</p>
//                 </div>
//             </div>
//         </div>
//     ))}
// </div>



       
//         </>
//     )
// }

// export default AirDrop;

import svgicons1 from '../../assets/6581547-removebg-preview.png';
import svgicons from '../../assets/4725691-removebg-preview.png';
import { company } from '../../company';

const AirDrop = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-12 flex flex-col text-center items-center">
              
              

                <div>
  <div>
    <span className="text-[#db7a23] text-2xl lg:text-4xl font-bold text-center">The Editor with rich features</span>
   
  </div>
  <span className="text-white text-base lg:text-lg lg:ml-4">
      There's a lot more to an editor. Whether it's using built-in features or rich extensions, there's something for everyone.
    </span>
</div>


               
               
            </div>

            {/* <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-white text-4xl lg:text-5xl drop-shadow-lg p-8 space-y-12">
                    <div className="relative">
                        <div className="absolute top-[-20px] left-0 space-x-4 flex">
                            <div className="w-4 h-4 bg-[#33c7ff] border-4 border-white rounded-full"></div>
                            <div className="w-4 h-4 bg-[#33c7ff] border-4 border-white rounded-full"></div>
                            <div className="w-4 h-4 bg-[#33c7ff] border-4 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10 text-center">
                            HOTDROP
                        </div>
                        <div className="absolute bottom-[-28px] left-0 space-x-4 flex">
                            <div className="w-4 h-4 bg-[#33c7ff] border-4 border-white rounded-full"></div>
                            <div className="w-4 h-4 bg-[#33c7ff] border-4 border-white rounded-full"></div>
                            <div className="w-4 h-4 bg-[#33c7ff] border-4 border-white rounded-full"></div>
                        </div>
                    </div>
                </div> */}

            {/* <div className="container mx-auto px-4 py-12 flex flex-wrap gap-6 justify-center">
  {company[0]?.features?.map((item, index) => (
    <div
      key={index}
      className="flex-shrink-0 max-w-xs mx-2 transition-transform duration-300 transform hover:scale-105"
    >
      <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col min-h-72 items-center p-4 bg-gray-800">
        <div className="flex justify-center mb-4">
          <img src={item.icons} style={{ height: 40, width: 40 }} alt={item.title} />
        </div>
        <div className="p-4 flex-1">
          <h2 className="text-xl text-center font-semibold mb-1 text-[#00e7ff]">{item.title}</h2>
          <p className="text-white text-center">{item.subTitle}</p>
        </div>
      </div>
    </div>
  ))}
</div> */}
<div className="container mx-auto px-4 py-12 flex flex-wrap gap-6 justify-center">
{company[0]?.features?.map((item, index) => (

<div class="card"  key={index}>
  <div class="card__border"></div>
  <div class="card_title__container">
    <span class="card_title">{item.title}</span>
    <p class="card_paragraph">{item.title}</p>
  </div>
  <hr class="line" />
  <ul class="card__list">
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Set Clear Goals</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Stay Organized</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Continuous Learning</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Time Management</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Maintain a Positive Attitude</span>
    </li>
  </ul>
  <button class="button">Get Your Success</button>
</div>))}
</div>

        </>
    );
}

export default AirDrop;
