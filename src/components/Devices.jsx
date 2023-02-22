import React, { useEffect, useRef, useState } from 'react'

const Devices = () => {

 const title = useRef()
 const text = useRef()
 const illustration = useRef()
 const windows = useRef()
 const linux = useRef()
 const apple = useRef()
 const android = useRef()
 const container = useRef()
  
 
 useEffect(()=>{
     
    const containerObserver = new IntersectionObserver(entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
            illustration.current.src="./src/assets/illustrations/devices-animate.svg"
        }else{
            illustration.current.src="./src/assets/loading.png"
        }
    },{threshold:0.1})
    containerObserver.observe(container.current)
    const titleObserver = new IntersectionObserver(entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
            title.current.className = "pl-[5rem] transition-all duration-[1000ms] translate-x-[0] opacity-100 pl-[1rem] font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-[6rem] ps:text-[5.5rem] tp:text-[8rem] tl:text-[6rem] dl:text-[8.5rem]"
            
        }
    },{threshold:0.5})
    titleObserver.observe(title.current)
    
    const textObserver = new IntersectionObserver(entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
            text.current.className = "animate-appearFromDown h-[50rem] absolute left-[5rem] flex flex-col justify-center"
            setTimeout(() => {
                illustration.current.className = "animate-appearFromDown transition-all duration-500 h-[50rem] absolute top-[5rem] right-[5rem]"
            }, 500);
            setTimeout(() => {
                windows.current.className = "z-40 transition-all duration-[300ms] relative h-[7rem] animate-appearFromDown"
            }, 1500);
            setTimeout(() => {
                linux.current.className = "z-30 transition-all duration-[300ms] relative h-[7rem] opacity-100 animate-appearFromDown"
            }, 1700);
            setTimeout(() => {
                apple.current.className = "z-20 transition-all duration-[300ms] relative h-[7rem] opacity-100 animate-appearFromDown"
            }, 1900);
            setTimeout(() => {
                android.current.className = "z-10 transition-all duration-[300ms] relative h-[7rem] opacity-100 animate-appearFromDown"
            }, 2100);



            titleObserver.unobserve(text.current)
        }
    },{threshold:0.8})
    textObserver.observe(text.current)
 },[])

 

  return (


    // Main container
    <div ref={container} className="h-[70rem]">
        {/* title */}
        <div ref={title} className="pl-[5rem] transition-all duration-[1000ms] translate-x-[-30rem] opacity-0  font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-[6rem] ps:text-[5.5rem] tp:text-[8rem] tl:text-[6rem] dl:text-[8.5rem]">Supported devices</div>
        
        {/* Content container  */}
        <div className="h-[50rem] flex items-center align-center justify-center relative">
            {/* Illustration */}
            <img ref={illustration} src="./src/assets/loading.png" className="opacity-0 transition-all duration-500 h-[50rem] absolute top-[5rem] right-[5rem]"></img>
            {/* text-container */}
            <div ref={text} className="opacity-0 h-[50rem] absolute left-[5rem] flex flex-col justify-center">
                <div className="pb-[3rem] font-semibold w-[45rem] text-[1rem] ps:text-[2.8rem] tp:text-[4rem] tl:text-[3.5rem] dl:text-[3.5rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, magnam!</div>
                {/* os container */}
                <div className="flex gap-[2rem] relative">
                    <img ref={windows} className="z-40 transition-all duration-[300ms] relative h-[7rem] opacity-0" src="./src/assets/os/windows.png" />
                    <img ref={linux} className="z-30 transition-all duration-[300ms] relative h-[7rem] opacity-0" src="./src/assets/os/linux.png" />
                    <img ref={apple} className="z-20 transition-all duration-[300ms] relative h-[7rem] opacity-0" src="./src/assets/os/apple.png" />
                    <img ref={android} className="z-10 transition-all duration-[300ms] relative h-[7rem] opacity-0" src="./src/assets/os/android.png" />
                </div>
            </div>
        </div>
        
    </div>



  )
}

export default Devices