// import React from 'react'
// import { MdArrowOutward } from "react-icons/md";
// import { LuArrowUpRightFromCircle } from "react-icons/lu";
// import { motion } from 'framer-motion';


// function LandingPage() {
//   motion
//   return (
//     <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
//       <div className='textstructure mt-52 px-20'>
//         {["We Provide's","Safest-Paths","Possibility"].map((item,index)=>{
//             return (
//                 <div className="masker">
//                  <div className="w-fit flex items-center">
//                  {index===1 && 
//                  (<motion.div
//                    initial={{width:0}}
//                     animate={{width:"9vw"}}
//                      transition={{ease:[0.76,0,0.24,1],duration:1}}
//                       className="w-[8vw] rounded-md mr-5 h-[6vw] relative-top[1vw] bg-purple-500"></motion.div>)}
//             <h1 className=" flex items-center uppercase text-[7vw] tracking-tighter font-medium leading-[6.5vw] font-">
//                 {item}
                
//             </h1>
//                  </div>
//     </div> 
//             );
//         })}
//       </div>
//       <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center bg-zinc-900 py-5 px-20">
//         {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
//         <p className="text-bold text-[1.3vw] font-light tracking-tight leading-none ">{item}</p>
//         ))}
//         <div className="start flex justify-center items-center gap-[4px]">
//             <div className="px-5 py-2 border-[1px] border-zinc-500 border-light text-md capitalize rounded-full">start the project</div>
//             <div classname="w-10  flex items-center justify-center h-10 rounded-full border-zinc-500 border-[2px] "><LuArrowUpRightFromCircle></LuArrowUpRightFromCircle></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LandingPage
import React from 'react';
import { LuArrowUpRightFromCircle } from 'react-icons/lu';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className='textstructure mt-52 px-20'>
        {["We Provide's","Safest-Paths","Possibility"].map((item, index) => {
          return (
            <div key={index} className="masker"> {/* Add the key prop here */}
              <div className="w-fit flex items-center">
                 
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: index === 1 && "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="rounded-md mr-5 h-[6vw] relative-top[1vw] bg-purple-500"></motion.div>
                
                <h1 className="flex items-center uppercase text-[7vw] tracking-tighter font-medium leading-[6.5vw] font-">
                  {item}
                </h1>
              </div>
            </div> 
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center bg-zinc-900 py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-bold text-[1.3vw] font-light tracking-tight leading-none"> {/* Add the key prop here */}
            {item}
          </p>
        ))}
        <div className="start flex justify-center items-center gap-[4px]">
          <div className="px-5 py-2 border-[1px] border-zinc-500 border-light text-md capitalize rounded-full">
            start the project
          </div>
          <div className="w-10 flex items-center justify-center h-10 rounded-full border-zinc-500 border-[2px]">
            <LuArrowUpRightFromCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
