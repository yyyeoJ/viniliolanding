import React, { useState } from 'react'

const Hero = (props) => {

  

  return (
    <div className="overflow-hidden text-white h-[calc(100vh-5rem)] bg-[#001229] relative px-5 xl:px-10 justify-start xl:justify-center items-center align-center">

      <div className={props.buttonClicked ? "absolute w-[100vw] left-0 top-[-3.5rem] h-[calc(100vh-5rem)]  px-5 transition-all duration-500 translate-x-[-100vw] flex flex-col xl:flex-row items-center align-center justify-center xl:gap-40" 
                                          : "absolute w-[100vw] left-0 top-[-3.5rem] h-[calc(100vh-5rem)]  px-5 transition-all duration-500 translate-x-[0vw] flex flex-col xl:flex-row items-center align-center justify-center xl:gap-40"
      }>
        <img className={props.navbarOpen ? "transition-opacity duration-500  opacity-0 xl:opacity-100 animate-appearFromLeft w-[18rem] md:w-[30rem] xl:w-[45rem] xl:mt-[5rem] pointer-events-none xl:pb-0 pb-6" 
                                         : "transition-none animate-appearFromLeft xl:pb-0 pb-6 w-[18rem] xl:w-[45rem] xl:mt-[5rem] md:w-[30rem]"} src="./src/assets/more-music-animate.svg" />
        <div className=" animate-appearFromRight flex flex-col justify-center align-center items-center xl:items-end text-right h-[45vw] xl:pt-24">
          <div className="text-[#006FFF] font-bold xl:text-right text-center text-6xl md:text-8xl xl:text-9xl pb-5 md:pb-16 xl:pb-12">For your <br className="hidden xl:block" /> ears</div>
          <div className="font-semibold pb-5 xl:w-[30rem] text-xl px-0 text-center md:text-5xl md:w-[40rem] xl:text-right xl:text-3xl w-[18rem] md:pb-16">The future of listening to music & more.</div>
          <button onClick={()=>{props.setButtonClicked(!props.buttonClicked)}} className="xl:w-[15rem] w-[18rem] p-[1rem] md:w-[35rem] md:h-[5rem] md:text-3xl xl:h-[4rem] xl:p-2 cursor-pointer bg-white hover:bg-gray-400 traduration-500 transition-all  text-black rounded-lg px-5 text-xl font-bold tracking-wide">What is Vinilio?</button>
        </div>
      </div> 

    <div className={props.buttonClicked ? "absolute w-[100vw] left-0 top-[-2rem] h-[calc(100vh-5rem)]  px-5 transition-all duration-500 translate-x-0 flex flex-col xl:flex-row items-center align-center justify-center xl:gap-40" 
                                        : "absolute w-[100vw] left-0 top-[-2rem] h-[calc(100vh-5rem)]  px-5 transition-all duration-500 translate-x-[100vw] flex flex-col xl:flex-row items-center align-center justify-center xl:gap-40"
      }>
      <img className={props.navbarOpen ? "transition-opacity duration-500  opacity-0 xl:opacity-100 animate-appearFromLeft w-[18rem] xl:w-[45rem] md:w-[30rem] xl:mt-[5rem] pointer-events-none xl:pb-0 pb-6" 
                                       : "transition-none animate-appearFromLeft xl:pb-0 pb-6 w-[18rem] xl:w-[45rem] xl:mt-[5rem] md:w-[30rem]"} src="./src/assets/headphone-animate.svg" />
      <div className=" animate-appearFromRight flex flex-col justify-center align-center items-center xl:items-end text-right h-[45vw] xl:pt-24">
        <div className="text-[#006FFF] font-bold xl:text-right text-center text-xl xl:text-2xl pb-5 xl:pb-12 md:pb-6 md:text-4xl">What is Vinilio?</div>
        <div className="font-semibold pb-5 xl:w-[30rem] text-md px-0 text-center xl:text-right xl:text-3xl w-[18rem] md:text-4xl md:pb-6 md:w-[40rem]">Vinilio is a global music streaming platform that lets you listen to your favourite songs as the artist intended, in lossless studio quality.</div>
        <button className="xl:w-[15rem] w-[18rem] p-[1rem] xl:h-[4rem] xl:p-2 md:w-[35rem] md:h-[5rem] md:text-3xl cursor-pointer bg-white hover:bg-gray-400 duration-500 transition-all  text-black rounded-lg px-5 text-xl font-bold tracking-wide">Start free trial</button>
      </div>
    </div> 

     
    </div>
  )
}

export default Hero