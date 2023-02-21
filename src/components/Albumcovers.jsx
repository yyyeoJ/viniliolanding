import React, { useEffect, useRef, useState } from 'react'


const Albumcovers = (props) => {

 const albumref = useRef()


 


 useEffect(()=>{


    const app = document.getElementById("app")
    let temp = 1
    let scrollvalue = 1
    let loaded = false


    const handleScroll = ()=>{
        scrollvalue = (app.scrollTop-temp)
        albumref.current.scrollLeft += scrollvalue*0.8
        if(albumref.current.scrollLeft > 0){
        }
        temp = app.scrollTop
      }     
      handleScroll()
  
    

    const albumObserver = new IntersectionObserver(entries=>{
        let entry = entries[0]
        if(entry.isIntersecting){
            app.addEventListener("scroll",handleScroll)
            setTimeout(() => {
                
                if(!loaded){
                    albumref.current.scrollLeft = 0,
                    loaded = true
                    document.querySelectorAll("#cover").forEach(cover=>coverObserver.observe(cover))
                }

            }, 50);
        }
        else{app.removeEventListener("scroll",handleScroll)}
    },{threshold:0.2})
    albumObserver.observe(albumref.current)

    const coverObserver = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.className = "opacity-100 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]"
            }else{
                entry.target.className = "opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]"
            }
        })
    },{threshold:0.3})

    



 },[])


  return (
        <div ref={albumref} id="albumcovers" className="h-[20rem] mt-[5rem] relative flex items-center overflow-x-scroll pointer-events-none">
            <div className="absolute flex items-center gap-[1rem]">
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/thewall.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/fotofobia.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/abbeyroad.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/darkside.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/nirvana.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/cali.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/fourmoods.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/stadium.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/am.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/americanbeauty.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/bytheway.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/stoney.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/getaway.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/divide.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/wishyouwerehere.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/thatsthespirit.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/apetite.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/animals.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/equals.jpg'></img>
                <img id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src='./src/assets/rumours.jpg'></img>
    
            </div>
        </div>
  )
}

export default Albumcovers