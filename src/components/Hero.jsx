import React, { useRef, useState } from 'react'

const Hero = (props) => {

  
  const hero1Ref = useRef();
  const hero2Ref = useRef();
  const [loaded,setLoaded] = useState(false)

  return (
    <div id="hero" className="bg-[#000e21] w-[99vw] pt-[7rem]  ps:pt-[27vh] tp:pt-[11vh] tl:pt-[20vh] dl:pt-[22vh] border-0 border-red-500 flex flex-row overflow-hidden">
        

            


            {/* Hero1 */}
            {!props.buttonClicked && 
              <div ref={hero1Ref} className={loaded ? "animate-hero1 relative transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"
                                                    : "relative transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"}>
                  <div className="flex flex-col tl:flex-row  items-center gap-2 ds:gap-[5rem] dl:gap-[15rem]">
                      <img className={loaded ? "w-[30rem] ps:w-[15rem] tp:w-[30rem] tl:w-[35rem] dl:w-[45rem]"
                                             : "animate-appearFromLeft w-[30rem] ps:w-[15rem] tp:w-[30rem] tl:w-[35rem] dl:w-[45rem]"} 
                           src="./src/assets/more-music-animate.svg"/>
                      <div className={loaded ? "flex flex-col items-center" 
                                             : "animate-appearFromRight flex flex-col items-center"}>
                          <div className=" font-bold text-[#006FFF] text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5rem]">For your ears</div>
                          <div className=" text-center tl:text-end font-semibold pb-3 w-[20rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]">The future of listening to music & more</div>
                          <button className=" bg-white text-black rounded-xl p-3 w-[15rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] font-bold text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]"
                                  onClick={()=>{
                                    hero1Ref.current.className = "translate-x-[-100vw] relative transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"
                                    setTimeout(() => {props.setButtonClicked(!props.buttonClicked),setLoaded(true)}, 400);
                                    }}>What is Vinilio?</button>
                      </div>
                  </div>
              </div>            
            }


            {/* Hero2 */}
            {props.buttonClicked &&
                <div ref={hero2Ref} className="relative animate-hero2 transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white">
                  <div className="flex flex-col tl:flex-row  items-center gap-2 ds:gap-[5rem] dl:gap-[15rem] ">
                      <img className="w-[30rem] ps:w-[15rem] tp:w-[30rem] tl:w-[35rem] dl:w-[45rem]" 
                           src="./src/assets/headphone-animate.svg"/>
                      <div className="flex flex-col items-center">
                          <div className=" font-bold text-[#006FFF] text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5rem]">For your ears</div>
                          <div className=" text-center tl:text-end font-semibold pb-3 w-[20rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]">The future of listening to music & more</div>
                          <button className=" bg-white text-black rounded-xl p-3 w-[15rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] font-bold text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]"
                                  onClick={()=>{
                                    hero2Ref.current.className = "translate-x-[100vw] relative transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"
                                    setTimeout(() => {props.setButtonClicked(!props.buttonClicked)}, 400);
                                    }}>What is Vinilio?</button>
                      </div>
                  </div>
              </div>
            }
   



    </div>
  )
}

export default Hero