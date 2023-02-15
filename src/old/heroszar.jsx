import React from 'react'

const Hero = (props) => {
  return (



    <div className={props.navbarOpen ? "border-4 border-red-500 transition-all duration-300 relative w-[100vw] bg-[#001229] pointer-events-none opacity-20"
                                     : "border-4 border-red-500 transition-all duration-300 relative w-[100vw] bg-[#001229]"}>
        
        <div className="flex flex-row items-center w-[200vw] h-[calc(100vh-5rem)]">

            <div className={props.buttonClicked ? "relative translate-x-[-100vw] transition-all duration-500 h-[calc(100vh-5rem)] w-[100vw] flex flex-col justify-center items-center text-white" 
                                                : "relative translate-x-[0vw]    transition-all duration-500 h-[calc(100vh-5rem)] w-[100vw] flex flex-col justify-center items-center text-white"}>
                <div className="h-[calc(100vh-5rem)] absolute flex flex-col items-center tp:top-[5rem] tl:top-0 ps:justify-center gap-2 dl:gap-[15rem] tl:flex-row">
                    <img className="animate-appearFromLeft ps:w-[15rem] p:w-[18rem] tp:w-[25rem] ds:w-[30rem] dl:w-[40rem]" src="./src/assets/more-music-animate.svg"/>
                    <div className="flex flex-col items-center">
                        <div className="animate-appearFromRight font-bold text-[#006FFF] text-center ps:text-[2.9rem] p:text-[3rem] tp:text-[5rem] tp:w-[31rem] tl:text-end ">For your ears</div>
                        <div className="animate-appearFromRight text-center font-semibold pb-3 w-[20rem] ps:w-[15rem] p:text-[1.2rem] tp:text-[2.5rem] tp:w-[31rem] tl:text-end">The future of listening to music & more</div>
                        <button className="animate-appearFromRight bg-white text-black rounded-xl p-2 w-[20rem] font-bold ps:w-[15rem] p:text-[1.2rem] tp:text-[2.5rem] tp:w-[31rem]"
                                onClick={()=>props.setButtonClicked(!props.buttonClicked)}>What is Vinilio?</button>
                    </div>
                </div>
            </div>


            <div className={props.buttonClicked ? "relative translate-x-[-100vw] transition-all duration-500 h-[calc(100vh-5rem)] w-[100vw] flex flex-col justify-center items-center text-white" 
                                                : "relative translate-x-[0vw]    transition-all duration-500 h-[calc(100vh-5rem)] w-[100vw] flex flex-col justify-center items-center text-white"}>
                <div className="h-[calc(100vh-5rem)] absolute flex flex-col items-center tp:top-[5rem] tl:top-0 ps:justify-center gap-2 dl:gap-[15rem] tl:flex-row">
                    <img className="animate-appearFromLeft ps:w-[15rem] p:w-[18rem] tp:w-[25rem] ds:w-[30rem] dl:w-[40rem]" src="./src/assets/headphone-animate.svg"/>
                    <div className="flex flex-col items-center">
                        <div className="animate-appearFromRight font-bold text-[#006FFF] text-center ps:text-[2.9rem] p:text-[3rem] tp:text-[5rem] tp:w-[31rem] tl:text-end ">For your ears</div>
                        <div className="animate-appearFromRight text-center font-semibold pb-3 w-[20rem] ps:w-[15rem] p:text-[1.2rem] tp:text-[2.5rem] tp:w-[31rem] tl:text-end">The future of listening to music & more</div>
                        <button className="animate-appearFromRight bg-white text-black rounded-xl p-2 w-[20rem] font-bold ps:w-[15rem] p:text-[1.2rem] tp:text-[2.5rem] tp:w-[31rem]"
                                onClick={()=>props.setButtonClicked(!props.buttonClicked)}>What is Vinilio?</button>
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Hero