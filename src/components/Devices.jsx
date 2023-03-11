import React, { useEffect, useRef, useState } from 'react'

const Devices = (props) => {

 const title = useRef()
 const text = useRef()
 const windows = useRef()
 const linux = useRef()
 const apple = useRef()
 const android = useRef()
 const container = useRef()
  
 
 useEffect(()=>{
     
    const titleObserver = new IntersectionObserver(entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
            title.current.className = "ps:pb-[5rem] tp:pb-[10rem] transition-all duration-[1000ms] translate-x-[0rem] opacity-100 font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center  ps:text-[1.5rem] p:text-[1.9rem] tp:text-[4rem] tl:text-[4rem] dl:text-[8.5rem]"
            
        }
    },{threshold:0.5})
    titleObserver.observe(title.current)
    



    const textObserver = new IntersectionObserver(entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
            text.current.className = "animate-appearFromDown relative flex flex-col items-center justify-center p:w-[20rem] tp:w-[35rem] tl:w-[35rem] dl:w-[55rem]"
            setTimeout(() => {
                windows.current.className = "ds:hover:scale-[110%] transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] animate-appearFromDown"
            }, 500);
            setTimeout(() => {
                linux.current.className = "ds:hover:scale-[110%] transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] opacity-100 animate-appearFromDown"
            }, 700);
            setTimeout(() => {
                apple.current.className = "ds:hover:scale-[110%] transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] opacity-100 animate-appearFromDown"
            }, 900);
            setTimeout(() => {
                android.current.className = "ds:hover:scale-[110%] transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] opacity-100 animate-appearFromDown"
            }, 1100);



            titleObserver.unobserve(text.current)
        }
    },{threshold:0.8})
    textObserver.observe(text.current)
 },[])

 

  return (


    // Main container
    <div ref={props.deviceRef} className="ps:pb-[5rem] tl:pb-[15rem] relative">
        {/* title */}
        <div ref={title} className="ps:pb-[5rem] tp:pb-[10rem] transition-all duration-[1000ms] translate-x-[-20vw] opacity-0  font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text  ps:text-[1.5rem] text-center  p:text-[1.9rem] tp:text-[4rem] tl:text-[4rem] dl:text-[8.5rem]">Supported devices</div>
        
        {/* Content container  */}
        <div ref={container} className="flex flex-col tl:flex-row items-center align-center justify-center relative">
            {/* text-container */}
            <div ref={text} className="opacity-0 items-center relative tl:top-[10rem] flex flex-col justify-center p:w-[20rem] tp:w-[35rem] tl:w-[35rem] dl:w-[55rem]">
                <div className="pb-[3rem] font-semibold p:w-[80vw]  tp:w-[70vw] text-center tl:w-[30rem] dl:w-[45rem] ps:text-[0.7rem] tp:text-[2rem] tl:text-[1.8rem] dl:text-[3.5rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, magnam!</div>
                {/* os container */}
                <div className="flex gap-[1rem] tp:gap-[2rem] relative justify-center tl:justify-start px-[2rem]">
                    <img ref={windows} className="rotate-180 transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] opacity-0" src="/assets/os/windows.png" />
                    <img ref={linux}   className="rotate-180 transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] opacity-0" src="/assets/os/linux.png" />
                    <img ref={apple}   className="rotate-180 transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] opacity-0" src="/assets/os/apple.png" />
                    <img ref={android} className="rotate-180 transition-all duration-[300ms] relative ps:h-[2rem] p:h-[3rem] tp:h-[5rem] dl:h-[7rem] opacity-0" src="/assets/os/android.png" />
                </div>
            </div>
        </div>
        
    </div>



  )
}

export default Devices