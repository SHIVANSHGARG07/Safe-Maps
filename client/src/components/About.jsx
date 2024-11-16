import React from 'react'

function About() {
  return (
    <div className="w-full p-20 text-black  bg-[#8f8c8f] rounded-tl-3xl rounded-tr-3xl ">
      <h1 className=" text-[4.5vw] leading-[4vw] tracking-tight font-semibold">
      "Real-time safety navigation for travelers, ensuring secure city exploration."
        </h1>
        <div className="w-full flex gap-5 mt-20 border-t-[1px]  border-[#5e427f]">
          
        <div className="w-1/2 ">
          <h1 className="text-7xl mt-4 ml-4 p-5">Our Approach</h1>
          <button className="flex gap-10 uppercase items-center px-8 ml-[4vw] py-4 bg-zinc-900 rounded-full mt-10 text-white">Read More
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
          <button className="flex gap-10 uppercase items-center px-8 py-4 ml-[4vw] bg-zinc-900 rounded-full mt-7 text-white">Suggestions
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
          <h1 className="text-7xl mt-4 p-5 font-semibold">"Now or Never"</h1>

        </div>

        <div className="w-full md:w-1/2 h-[70vh] rounded-3xl mt-4 overflow-hidden">
  <video 
    className="w-full h-full object-cover rounded-3xl" 
    src="https://assets.citizen.com/web-assets/flow-v03.mp4" 
    muted 
    autoPlay 
    loop 
    playsInline
  />
</div>
        </div>
    </div>
  )
}

export default About
