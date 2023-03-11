import React, { useEffect, useRef, useState } from 'react'

const Hero = (props) => {

const heroIllustration1Ref = useRef()
const heroIllustration2Ref = useRef()

useEffect(()=>{
    const heroObserver = new IntersectionObserver(entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
            heroIllustration1Ref.current.src="/assets/illustrations/more-music-animate.svg"
            heroIllustration2Ref.current.src="/assets/illustrations/headphone-animate.svg"

        }else{
            heroIllustration1Ref.current.src="/assets/loading.gif"
            heroIllustration2Ref.current.src="/assets/loading.gif"

        }
    },{threshold:0.000005})
    heroObserver.observe(props.heroRef.current)
},[])


  return (

    <div ref={props.heroRef} id="hero" className="bg-[#000e21] w-[200vw] p:pt-[20vh]  ps:pt-[27vh] tp:pt-[11vh] tl:pt-[20vh] dl:pt-[22vh] flex flex-row ">
      
        
    {/* Hero1 */}
    <div className={props.buttonClicked ? "translate-x-[-100vw] transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white" 
                                        : "translate-x-[0vw]    transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"}>
        <div className="flex flex-col tl:flex-row  items-center gap-2 ds:gap-[5rem] dl:gap-[15rem]">
            <img ref={heroIllustration1Ref} className="pb-[2rem] animate-appearFromLeft p:w-[20rem] p:h-[20rem] ps:w-[15rem] ps:h-[15rem] tp:w-[30rem] tp:h-[30rem] dl:w-[45rem] dl:h-[45rem]" src="/assets/illustrations/more-music-animate.svg"/>
            <div className="flex flex-col items-center">
                <div className="animate-appearFromRight font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]">For your ears</div>
                <div className="animate-appearFromRight text-center tl:text-end font-semibold pb-3 w-[20rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[2.5rem]">The future of listening to music & more</div>
                <button className="animate-appearFromRight bg-white ds:hover:scale-[105%] transition-all duration-300 text-black rounded-xl p-3 w-[15rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] font-bold text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]"
                        onClick={()=>props.setButtonClicked(!props.buttonClicked)}>What is Vinilio?</button>
            </div>
        </div>
    </div>

    {/* Hero2 */}
    <div className={props.buttonClicked ? "translate-x-[-100vw] transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white" 
                                        : "translate-x-[0vw]    transition-all duration-500 w-[100vw] flex flex-row justify-center items-center align-center text-white"}>
        <div className="flex flex-col tl:flex-row  items-center gap-2 ds:gap-[5rem] dl:gap-[15rem] ">
            <img ref={heroIllustration2Ref} className="pb-[2rem] animate-appearFromLeft p:w-[20rem] p:h-[20rem] ps:w-[15rem] ps:h-[15rem] tp:w-[30rem] tp:h-[30rem] dl:w-[45rem] dl:h-[45rem]" src="/assets/illustrations/headphone-animate.svg"/>
            <div className="flex flex-col items-center">
                <div className="animate-appearFromRight font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]">For your ears</div>
                <div className="animate-appearFromRight text-center tl:text-end font-semibold pb-3 w-[20rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[2.5rem]">The future of listening to music & more</div>
                <button className="animate-appearFromRight bg-white ds:hover:scale-[105%] transition-all duration-300 text-black rounded-xl p-3 w-[15rem] tp:w-[30rem] tl:w-[20rem] dl:w-[35rem] font-bold text-[1rem] ps:text-[0.8rem] tp:text-[2rem] tl:text-[1.5rem] dl:text-[3rem]"
                        onClick={()=>props.setButtonClicked(!props.buttonClicked)}>What is Vinilio?</button>
            </div>
        </div>
    </div>




</div>




  )
}

export default Hero