import React, { useEffect, useRef } from 'react'

const Sponsors = () => {

    const sponsorRef = useRef();
    const reactRef = useRef();
    const tailwindRef = useRef();
    const storysetRef = useRef();
    const shazamRef = useRef();
    const geniusRef = useRef();
  
  
    useEffect(()=>{
      setTimeout(()=>{
        const sponsorObserver = new IntersectionObserver(
          entries=>{
            const entry = entries[0]
            if(entry.isIntersecting){
              setTimeout(() => {
                reactRef.current.className =   "opacity-100 transition-all hover:scale-[110%] duration-[600ms] flex flex-row justify-center align-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem] "
              }, 10);
              setTimeout(() => {
                tailwindRef.current.className ="opacity-100 transition-all hover:scale-[120%] duration-[600ms] flex flex-row justify-center align-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem] "
              }, 100);
              setTimeout(() => {
                storysetRef.current.className ="opacity-100 transition-all hover:scale-[120%] duration-[600ms] flex flex-row justify-center align-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem] "
              }, 200);
              setTimeout(() => {
                shazamRef.current.className =  "opacity-100 transition-all hover:scale-[120%] duration-[600ms] flex flex-row justify-center align-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem] "
              }, 300);
              setTimeout(() => {
                geniusRef.current.className =  "opacity-100 transition-all hover:scale-[120%] duration-[600ms] flex flex-row justify-center align-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem] "
              }, 400);
              sponsorObserver.unobserve(reactRef.current)
              
            }
          },
          {threshold: 0.3})
          sponsorObserver.observe(reactRef.current)
      },1000)
      
  
    },[])
    
    return (
  
      <div className="w-[99vw] ps:pb-[3rem] tp:pb-[5rem] ds:pb-[12rem] dl:pb-[12rem] pt-[20vh] bg-[#000e21] border-0 border-blue-500 flex flex-col items-center">

  
        <div ref={sponsorRef}    className="opacity-100 transition-all flex flex-row gap-[1rem] dl:gap-[3rem] w-[100vw] justify-center items-center flex-wrap text-white font-bold">
          
          <div ref={reactRef}    className="opacity-0 translate-y-[10rem] hover:scale-[110%] transition-all duration-[500ms] flex flex-row justify-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem]"><a href="https://reactjs.org/" target="_blank"><img  src="/assets/sponsors/reactlogo.png"/></a></div>
          <div ref={tailwindRef} className="opacity-0 translate-y-[10rem] hover:scale-[110%] transition-all duration-[600ms] flex flex-row justify-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem]"><a href="https://tailwindcss.com/" target="_blank"><img  src="/assets/sponsors/tailwindlogo.png"/></a></div>
          <div ref={storysetRef} className="opacity-0 translate-y-[10rem] hover:scale-[110%] transition-all duration-[700ms] flex flex-row justify-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem]"><a href="https://storyset.com/app" target="_blank"><img  src="/assets/sponsors/storysetlogo.png"/></a></div>
          <div ref={shazamRef}   className="opacity-0 translate-y-[10rem] hover:scale-[110%] transition-all duration-[800ms] flex flex-row justify-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem]"><a href="https://www.shazam.com/" target="_blank"><img  src="/assets/sponsors/shazamlogo.png"/></a></div>
          <div ref={geniusRef}   className="opacity-0 translate-y-[10rem] hover:scale-[110%] transition-all duration-[900ms] flex flex-row justify-center items-center  ps:w-[2rem] p:w-[3.5rem] tp:w-[6rem] tl:w-[8rem] ds:w-[8rem] dl:w-[12rem]"><a href="https://genius.com/" target="_blank"><img  src="/assets/sponsors/geniuslogo.png"/></a></div>
          
        </div>


      </div>


    )


}

export default Sponsors