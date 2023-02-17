import React, { useRef, useState } from 'react'

const Hero = (props) => {

  

  return (

    <div  id="Hero" className="bg-[#000e21] w-[200vw] p:pt-[20vh]  ps:pt-[27vh] tp:pt-[11vh] tl:pt-[20vh] dl:pt-[22vh] border-0 border-red-500 flex flex-row ">
      
        
    {/* Hero1 */}
    <div className={props.buttonClicked ? "translate-x-[-100vw] transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white" 
                                        : "translate-x-[0vw]    transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"}>
        <div className="flex flex-col tl:flex-row  items-center gap-2 ds:gap-[5rem] dl:gap-[15rem]">
            <img className="animate-appearFromLeft p:w-[20rem] ps:w-[15rem] tp:w-[30rem] tl:w-[35rem] dl:w-[45rem]" src="./src/assets/more-music-animate.svg"/>
            <div className="flex flex-col items-center">
                <div className="animate-appearFromRight font-bold text-[#006FFF] text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5rem]">For your ears</div>
                <div className="animate-appearFromRight text-center tl:text-end font-semibold pb-3 w-[20rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]">The future of listening to music & more</div>
                <button className="animate-appearFromRight bg-white text-black rounded-xl p-3 w-[15rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] font-bold text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]"
                        onClick={()=>props.setButtonClicked(!props.buttonClicked)}>What is Vinilio?</button>
            </div>
        </div>
    </div>

    {/* Hero2 */}
    <div className={props.buttonClicked ? "translate-x-[-100vw] transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white" 
                                        : "translate-x-[0vw]    transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"}>
        <div className="flex flex-col tl:flex-row  items-center gap-2 ds:gap-[5rem] dl:gap-[15rem] ">
            <img className="animate-appearFromLeft p:w-[20rem] ps:w-[15rem] tp:w-[35rem] tl:w-[35rem] dl:w-[45rem]" src="./src/assets/headphone-animate.svg"/>
            <div className="flex flex-col items-center">
                <div className="animate-appearFromRight font-bold text-[#006FFF] text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5rem]">For your ears</div>
                <div className="animate-appearFromRight text-center tl:text-end font-semibold pb-3 w-[20rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]">The future of listening to music & more</div>
                <button className="animate-appearFromRight bg-white text-black rounded-xl p-3 w-[15rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] font-bold text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]"
                        onClick={()=>props.setButtonClicked(!props.buttonClicked)}>What is Vinilio?</button>
            </div>
        </div>
    </div>




</div>




  )
}

export default Hero