import React, { useEffect, useRef, useState } from 'react'


const Albumcovers = (props) => {

 const albumref = useRef()

let images = [
    "./src/assets/thewall.jpg",
    "./src/assets/fotofobia.jpg",
    "./src/assets/abbeyroad.jpg",
    "./src/assets/darkside.jpg",
    "./src/assets/nirvana.jpg",
    "./src/assets/cali.jpg",
    "./src/assets/fourmoods.jpg",
    "./src/assets/stadium.jpg",
    "./src/assets/am.jpg",
    "./src/assets/americanbeauty.jpg",
    "./src/assets/bytheway.jpg",
    "./src/assets/stoney.jpg",
    "./src/assets/getaway.jpg",
    "./src/assets/divide.jpg",
    "./src/assets/wishyouwerehere.jpg",
    "./src/assets/thatsthespirit.jpg",
    "./src/assets/apetite.jpg",
    "./src/assets/animals.jpg",
    "./src/assets/equals.jpg",
    "./src/assets/rumours.jpg",
    "./src/assets/metallica.jpg",
    "./src/assets/eminem.jpg",
    "./src/assets/poliphia.jpg",
    "./src/assets/joji.jpg",
    "./src/assets/mayer.jpg",
    "./src/assets/peep.jpg",
    "./src/assets/greenday.jpg",
    "./src/assets/hofi.jpg",
    "./src/assets/weeknd.jpg",
    "./src/assets/krubi.jpg",
    "./src/assets/pilots.jpg",
    "./src/assets/eilish.jpg",
    "./src/assets/dragons.jpg",
    "./src/assets/lofi1.jpg",
    "./src/assets/lofi2.jpg",
    "./src/assets/bells.jpg",
    "./src/assets/josha.jpg",
    "./src/assets/autumngloom.jpg",
    "./src/assets/miafa.jpg",
    "./src/assets/szornyeteg.jpg",
]


//fisher-yates shuffle
function shuffle(array) {
    let currentIndex = array.length
    let randomIndex

    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [ array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
 
images = shuffle(images)


 useEffect(()=>{


    const app = document.getElementById("app")
    let temp = 1
    let scrollvalue = 1
    let loaded = false


    const handleScroll = ()=>{
        scrollvalue = (app.scrollTop-temp)
        albumref.current.scrollLeft += scrollvalue*0.9
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
    },{threshold:0.1})
    albumObserver.observe(albumref.current)

    const coverObserver = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.className = "opacity-100 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]"
            }else{
                entry.target.className = "opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]"
            }
        })
    },{threshold:0.1})

    



 },[])


  return (
        <div ref={albumref} id="albumcovers" className="h-[50rem] mt-[10rem] relative flex items-center overflow-x-scroll pointer-events-none">
            <div className="absolute flex items-center gap-[1rem]">
             {images.map((image)=>{return <img key={image} id="cover" className="opacity-0 transition-all duration-300 w-[15rem] h-[15rem] shadow-lg rounded-[0.5rem]" src={image}></img>})}    
            </div>
                
        </div>
  )
}

export default Albumcovers