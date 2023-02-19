import React, { useEffect, useRef } from 'react'
import {BsChevronLeft , BsChevronRight, BsCircle , BsCircleFill} from "react-icons/bs"


const Features = () => {


  const card1 = useRef()
  const card2 = useRef()
  const card3 = useRef()
  const card4 = useRef()
  const card5 = useRef()
  const card6 = useRef()
  const card7 = useRef()
 
  const dot1 = useRef()
  const dot2 = useRef()
  const dot3 = useRef()
  const dot4 = useRef()
  const dot5 = useRef()
  const dot6 = useRef()
  const dot7 = useRef()
 
 
  const leftRef = useRef()
  const rightRef = useRef()
  const featureRef = useRef()
 
  useEffect(()=>{
    setTimeout(()=>{
      const leftObserver = new IntersectionObserver(
        entries=>{
          const entry = entries[0]
          if(entry.isIntersecting){
          leftRef.current.className = "will-change-transform opacity-100 hidden tl:block transition-all duration-300 relative translate-x-[-5rem]"
          featureRef.current.className = "animate-appearFromDown w-[100vw] flex flex-col opacity-100 transition-all duration-1000"

          }else{
            leftRef.current.className = "will-change-transform opacity-100 hidden tl:block transition-all duration-300 relative translatel-x-[0rem]"

          }
        },
        {threshold: 0.69})
        leftObserver.observe(card1.current)

        const rightObserver = new IntersectionObserver(
          entries=>{
            const entry = entries[0]
            if(entry.isIntersecting){
              rightRef.current.className = "will-change-transform hidden tl:block opacity-100 relative translate-x-[-2rem] pl-[0.8rem] transition-all duration-300"
            }else{
              rightRef.current.className = "will-change-transform hidden tl:block opacity-100 relative translate-x-[1rem] pl-[0.8rem] transition-all duration-300"
            }
          },
          {threshold: 0.69})
          rightObserver.observe(card7.current)

          const observer1 = new IntersectionObserver(
            entries=>{
              const entry = entries[0]
              if(entry.isIntersecting){
              dot1.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"
              dot2.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
              dot3.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
              dot4.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
              dot5.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
              dot6.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
              dot7.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"


              }
            },
            {threshold: 0.1})
            observer1.observe(card1.current)

            const observer2 = new IntersectionObserver(
              entries=>{
                const entry = entries[0]
                if(entry.isIntersecting){
                dot1.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                dot2.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"
                dot3.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                dot4.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                dot5.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                dot6.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                dot7.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"

                }
              },
              {threshold: 0.1})
              observer2.observe(card2.current)

              const observer3 = new IntersectionObserver(
                entries=>{
                  const entry = entries[0]
                  if(entry.isIntersecting){
                  dot1.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                  dot2.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                  dot3.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"
                  dot4.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                  dot5.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                  dot6.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                  dot7.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
    
                  }
                },
                {threshold: 0.1})
                observer3.observe(card3.current)

                const observer4 = new IntersectionObserver(
                  entries=>{
                    const entry = entries[0]
                    if(entry.isIntersecting){
                    dot1.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                    dot2.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                    dot3.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                    dot4.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"
                    dot5.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                    dot6.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                    dot7.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
      
                    }
                  },
                  {threshold: 0.1})
                  observer4.observe(card4.current)

                  const observer5 = new IntersectionObserver(
                    entries=>{
                      const entry = entries[0]
                      if(entry.isIntersecting){
                      dot1.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                      dot2.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                      dot3.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                      dot4.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                      dot5.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"
                      dot6.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                      dot7.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
        
                      }
                    },
                    {threshold: 0.1})
                    observer5.observe(card5.current)

                    const observer6 = new IntersectionObserver(
                      entries=>{
                        const entry = entries[0]
                        if(entry.isIntersecting){
                        dot1.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                        dot2.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                        dot3.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                        dot4.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                        dot5.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                        dot6.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"
                        dot7.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
          
                        }
                      },
                      {threshold: 0.1})
                      observer6.observe(card6.current)

                      const observer7 = new IntersectionObserver(
                        entries=>{
                          const entry = entries[0]
                          if(entry.isIntersecting){
                          dot1.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                          dot2.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                          dot3.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                          dot4.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                          dot5.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                          dot6.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"
                          dot7.current.className = "transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"
            
                          }
                        },
                        {threshold: 0.1})
                        observer7.observe(card7.current)




    },1000)
    

  },[])
 
 
 
   const slideLeft = (amount)=>{
     let slider = document.getElementById("slider")
     slider.scrollLeft -= amount
 
   }
   const slideRight = (amount)=>{
     let slider = document.getElementById("slider")
     slider.scrollLeft += amount
 
 
   }
 



  return (

    <>
              {/* main container */}
              <div id="features" ref={featureRef} className='w-[100vw] flex  flex-col justify-center opacity-0 transition-all duration-1000 h-[50rem]'>
             
              {/* slider container */}
              <div className="flex items-center justify-center align-center w-[100vw] ">
              {/*left arrow */}
              <div ref={leftRef} onClick={()=>{slideLeft(500)}} className=" will-change-transform opacity-0 hidden tl:block transition-all duration-300"><BsChevronLeft  size={40} className="text-white z-10"/></div>
              {/* slider  */}
              <div id="slider" className=" snap-x ds:snap-none snap-mandatory flex flex-row scroll-smooth items-center relative w-[95vw] ps:h-[35rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem] overflow-x-visible overflow-y-hidden">
                {/* Cards container */}
                <div className="flex flex-row gap-[1.2rem] absolute left-[50vw] pr-[5rem]">

                  {/* Feature Card */}
                  <div ref={card1} className="snap-center ds:snap-none ps:h-[30rem] ps:w-[15rem] p:w-[20rem] p:h-[33rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147]  rounded-[1.5rem]">
                      <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                        <img className=" rounded-[100%]  bg-[white]" src="./src/assets/online-world-animate.svg"/>
                      </div>
                      <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
                      <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
                  </div>

                  {/* Feature Card */}
                  <div ref={card2} className="snap-center ds:snap-none ps:h-[30rem] ps:w-[15rem] p:w-[20rem] p:h-[33rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147]  rounded-[1.5rem]">
                      <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                        <img className=" rounded-[100%]  bg-[white]" src="./src/assets/composer-music-animate.svg"/>
                      </div>
                      <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
                      <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
                  </div>

                  {/* Feature Card */}
                  <div ref={card3} className="snap-center ds:snap-none ps:h-[30rem] ps:w-[15rem] p:w-[20rem] p:h-[33rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147]  rounded-[1.5rem]">
                      <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                        <img className=" rounded-[100%]  bg-[white]" src="./src/assets/user-flow-animate.svg"/>
                      </div>
                      <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
                      <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
                  </div>

                  {/* Feature Card */}
                  <div ref={card4} className="snap-center ds:snap-none ps:h-[30rem] ps:w-[15rem] p:w-[20rem] p:h-[33rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147]  rounded-[1.5rem]">
                      <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                        <img className=" rounded-[100%]  bg-[white]" src="./src/assets/analyze-animate.svg"/>
                      </div>
                      <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
                      <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
                  </div>

                  {/* Feature Card */}
                  <div ref={card5} className="snap-center ds:snap-none ps:h-[30rem] ps:w-[15rem] p:w-[20rem] p:h-[33rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147]  rounded-[1.5rem]">
                      <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                        <img className=" rounded-[100%]  bg-[white]" src="./src/assets/rock-band-animate.svg"/>
                      </div>
                      <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
                      <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
                  </div>
                  
                  {/* Feature Card */}
                  <div ref={card6} className="snap-center ds:snap-none ps:h-[30rem] ps:w-[15rem] p:w-[20rem] p:h-[33rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147]  rounded-[1.5rem]">
                      <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                        <img className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] rounded-[100%]  bg-[white]" src="./src/assets/karaoke-animate.svg"/>
                      </div>
                      <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
                      <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
                  </div>

                  {/* Feature Card */}
                  <div ref={card7} className="snap-center ds:snap-none ps:h-[30rem] ps:w-[15rem] p:w-[20rem] p:h-[33rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147]  rounded-[1.5rem]">
                      <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                        <img className=" rounded-[100%]  bg-[white]" src="./src/assets/podcast-audience-animate.svg"/>
                      </div>
                      <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
                      <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
                  </div>


                </div>
              </div>
              <div ref={rightRef} onClick={()=>{slideRight(500)}} className="will-change-transform hidden tl:block opacity-100 relative translate-x-[1rem] pl-[0.8rem] transition-all duration-300"><BsChevronRight  size={40} className="text-white-500 z-10"/></div>
              </div>

             {/* dots container */}
             <div className="w-[100vw] h-[1rem] tp:hidden flex items-center align-center justify-center gap-[0.5rem]">
                  <div ref={dot1} className="transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2 bg-white"></div>
                  <div ref={dot2} className="transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"></div>
                  <div ref={dot3} className="transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"></div>
                  <div ref={dot4} className="transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"></div>
                  <div ref={dot5} className="transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"></div>
                  <div ref={dot6} className="transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"></div>
                  <div ref={dot7} className="transition-all duration-300 w-[0.8rem] h-[0.8rem] rounded-full border-2"></div>
                </div>
          

        </div>
    </>


  )
}

export default Features