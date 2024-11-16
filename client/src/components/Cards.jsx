// // import React from 'react'

// // function Cards() {
// //   return (
// //     <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 ">
// //       <div className="cardcontainer w-1/2 h-[50vh]">
// //          <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#3c133d] ">
// //           <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
// //           <button className="absolute px-5 py-1 boredr-2 rounded-full  left-10 bottom-10 ">&copy;2019</button>
// //          </div>
// //       </div>
// //       <div className="cardcontainer flex gap-5 h-[50vh] items-center w-1/2">
// //       <div className="card relative flex items-center  rounded-xl justify-center w-1/2 h-full bg-[#89589f] ">
// //       <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
// //           <button className="absolute px-5 py-1 boredr-2 rounded-full  left-10 bottom-10 ">&copy;2019</button>
// //       </div>
// //       <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#3c133d] ">
// //       <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
// //           <button className="absolute px-5 py-1 boredr-2 rounded-full  left-10 bottom-10 ">&copy;2019</button>
// //           </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Cards
// import React from 'react'

// function Cards() {
//   return (
//     <div className="w-full h-screen bg-zinc-900 flex flex-col md:flex-row items-center px-8 md:px-16 lg:px-32 gap-5">
      
//       {/* First Card */}
//       <div className="cardcontainer w-full md:w-1/2 h-[50vh] mb-5 md:mb-0">
//         <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#3c133d]">
//           <img className="w-24 md:w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo" />
//           <button className="absolute px-4 py-1 border-2 rounded-full left-5 bottom-5 text-xs md:text-base">&copy;2019</button>
//         </div>
//       </div>
      
//       {/* Second Card Section */}
//       <div className="cardcontainer flex flex-col md:flex-row gap-5 h-[50vh] items-center w-full md:w-1/2">
        
//         {/* Second Card */}
//         <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#89589f]">
//           <img className="w-24 md:w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo" />
//           <button className="absolute px-4 py-1 border-2 rounded-full left-5 bottom-5 text-xs md:text-base">&copy;2019</button>
//         </div>
        
//         {/* Third Card */}
//         <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#3c133d]">
//           <img className="w-24 md:w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo" />
//           <button className="absolute px-4 py-1 border-2 rounded-full left-5 bottom-5 text-xs md:text-base">&copy;2019</button>
//         </div>
        
//       </div>
      
//     </div>
//   )
// }

// export default Cards
import React from 'react'
function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col md:flex-row items-center px-8 md:px-16 lg:px-32 gap-5">
      
      {/* First Card */}
      <div className="cardcontainer w-full md:w-1/2 h-[50vh] mb-5 md:mb-0">
      <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#3c133d]">
        <div className="text-center text-white">
          <h1 className="text-3xl font-semibold mb-4">Navigate Safely, Avoid Danger with SafeMaps.</h1>
          {/* <p className="text-lg">Additional details or description.</p> */}
        </div>
        <button className="absolute px-4 py-1 border-2 rounded-full left-5 bottom-5 text-xs md:text-base text-white border-white">
          &copy;2024
        </button>
      </div>
    </div>
      
      {/* Second Card Section */}
      <div className="cardcontainer flex flex-col md:flex-row gap-5 h-[50vh] items-center w-full md:w-1/2">
        
        <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#89589f]">
        <h1 className="text-3xl font-semibold mb-4">Crime-Free Routes for a Safer Journey.</h1>
        <button className="absolute px-2 py-1 border-2 rounded-full left-5 bottom-5 text-xs md:text-base">&copy;2024</button>
        </div>
        
        <div className="card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#3c133d]">
        <h1 className="text-3xl font-semibold mb-4">Find the Safest Way Home with SafeMaps.</h1>          
        <button className="absolute px-4 py-1 border-2 rounded-full left-5 bottom-5 text-xs md:text-base">&copy;2024</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Cards;
