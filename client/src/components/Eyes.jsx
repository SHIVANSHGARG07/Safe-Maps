// import React ,{useEffect,useRef,useState} from 'react'


// function Eyes() {
//     const[rotate,setRotate] = useState(0);

//     useEffect(()=>{
//         window.addEventListener("mousemove",(e)=>{
//             let mouseX = e.clientX;
//             let mouseY = e.clientY;

//             let deltaX = mouseX - window.innerWidth/2;
//             let deltaY = mouseY - window.innerHeight/2;
        
//             var Angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
//             setRotate(Angle-180);
//         })

//     })


//   return (
//     <div className="eyes w-full h-screen overflow-hidden">
//       <div data-scroll data-scroll-speed="-.9" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
//       <div className="absolute  h-50 flex gap-10 -translate-x-[50%] -translate-y-[50%]  top-1/2 left-1/2 ">

//         <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full ">
//         <div className="w-2/3 h-2/3 relative flex justify-center items-center bg-zinc-900 rounded-full ">
//             <div style={{transform:`translate(-40%,-30%) rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
//             <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
//             </div>
//         </div>
//         </div>

//         <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full ">
//         <div className="w-2/3 h-2/3 relative flex justify-center items-center bg-zinc-900 rounded-full ">
//         <div style={{transform:`translate(-40%,-50%) rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
//             <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
//             </div>
//         </div>
//         </div>

//       </div>

//       </div>
//     </div>
//   )
// }

// export default Eyes

import React from 'react';
import Spline from '@splinetool/react-spline';

function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-[40vw]  ">
        <div className="absolute h-full w-full flex justify-center items-center">
          {/* Render Spline only in the defined area */}
          <div className="w-[100%] h-[100%]">
            <Spline scene="https://prod.spline.design/MddNSLGpCkgn4oKy/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;


// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/MddNSLGpCkgn4oKy/scene.splinecode" />
//   );
// }
