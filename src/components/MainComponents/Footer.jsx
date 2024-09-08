// const Footer = () =>{
//     return (
//         <footer>
//   <div class="bg-gray-900 mx-auto px-4">
//     <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
//       <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
//         <h5 class="text-xl text-white font-bold mb-6">Features</h5>
//         <ul class="list-none footer-links">
//           <li class="mb-2">
//             <a href="#" class="border-b  text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b  text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another one</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Last time</a>
//           </li>
//         </ul>
//       </div>
     
     
//       <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
//         <h5 class="text-xl text-white font-bold mb-6">Resources</h5>
//         <ul class="list-none footer-links">
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
//           </li>
//         </ul>
//       </div>
//       <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
//         <h5 class="text-xl text-white font-bold mb-6">About</h5>
//         <ul class="list-none footer-links">
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</a>
//           </li>
//         </ul>
//       </div>
//       <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
//         <h5 class="text-xl text-white font-bold mb-6">Help</h5>
//         <ul class="list-none footer-links">
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
//           </li>
//           <li class="mb-2">
//             <a href="#" class="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
//           </li>
//         </ul>
//       </div>
//       <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
//         <h5 class="text-xl text-white font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
//         <div class="flex sm:justify-center xl:justify-start">
//           <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
//             <i class="fab fa-facebook"></i>
//           </a>
//           <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
//             <i class="fab fa-twitter"></i>
//           </a>
//           <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
//             <i class="fab fa-google-plus-g"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
//     )
// }
// export default Footer;


const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 py-6">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center max-w-6xl">
        {/* Column 1: Features */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h5 className="text-xl text-white font-bold mb-4">Features</h5>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="#"
                className="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Cool stuff
              </a>
            </li>
            {/* Add other list items here */}
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h5 className="text-xl text-white font-bold mb-4">Resources</h5>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="#"
                className="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Resource
              </a>
            </li>
            {/* Add other list items here */}
          </ul>
        </div>

        {/* Column 3: About */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h5 className="text-xl text-white font-bold mb-4">About</h5>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="#"
                className="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Team
              </a>
            </li>
            {/* Add other list items here */}
          </ul>
        </div>

        {/* Column 4: Help */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h5 className="text-xl text-white font-bold mb-4">Help</h5>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="#"
                className="border-b text-slate-300 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
              >
                Support
              </a>
            </li>
            {/* Add other list items here */}
          </ul>
        </div>

        {/* Column 5: Social Media */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h5 className="text-xl text-white font-bold mb-4 text-center lg:text-left">
            Stay connected
          </h5>
          <div className="flex justify-center lg:justify-start space-x-2">
            <a
              href="#"
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
            >
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
