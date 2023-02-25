import React, { lazy, useEffect, useRef } from 'react'
import {BsChevronLeft , BsChevronRight,} from "react-icons/bs"
import Card from './Card'


const Features = (props) => {


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
  const sliderRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{

      const lazyloadObserver = new IntersectionObserver(entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
          card1.current.children[0].src="./src/assets/illustrations/online-world-animate.svg"
          card2.current.children[0].src="./src/assets/illustrations/composer-music-animate.svg"
          card3.current.children[0].src="./src/assets/illustrations/user-flow-animate.svg"
          card4.current.children[0].src="./src/assets/illustrations/analyze-animate.svg"
          card5.current.children[0].src="./src/assets/illustrations/rock-band-animate.svg"
          card6.current.children[0].src="./src/assets/illustrations/karaoke-animate.svg"
          card7.current.children[0].src="./src/assets/illustrations/podcast-audience-animate.svg"

        }else{
          card1.current.children[0].src="./src/assets/loading.gif"
          card2.current.children[0].src="./src/assets/loading.gif"
          card3.current.children[0].src="./src/assets/loading.gif"
          card4.current.children[0].src="./src/assets/loading.gif"
          card5.current.children[0].src="./src/assets/loading.gif"
          card6.current.children[0].src="./src/assets/loading.gif"
          card7.current.children[0].src="./src/assets/loading.gif"
        }
      },{threshold:0.1})
      lazyloadObserver.observe(featureRef.current)


      const featureObserver = new IntersectionObserver(
        entries=>{
          const entry = entries[0]
          if(entry.isIntersecting){
            featureRef.current.className = "will-change-transform opacity-100 w-[100vw] flex flex-col opacity-100 transition-all duration-1000"
            featureObserver.unobserve(featureRef.current)
          }
        },
        {threshold: 0.6})
        featureObserver.observe(featureRef.current)


      const leftObserver = new IntersectionObserver(
        entries=>{
          const entry = entries[0]
          if(entry.isIntersecting){
          leftRef.current.className = "ds:hover:scale-[130%] will-change-transform opacity-100 hidden tl:block transition-all duration-300 relative translate-x-[-5rem] z-10"

          }else{
            leftRef.current.className = "ds:hover:scale-[130%] will-change-transform opacity-100 hidden tl:block transition-all duration-300 relative z-10"

          }
        },
        {threshold: 0.1})
        leftObserver.observe(card1.current)

        const rightObserver = new IntersectionObserver(
          entries=>{
            const entry = entries[0]
            if(entry.isIntersecting){
              rightRef.current.className = "ds:hover:scale-[130%] will-change-transform hidden tl:block opacity-100 relative translate-x-[5rem] pl-[0.8rem] transition-all duration-300 z-10 absolute"
            }else{
              rightRef.current.className = "ds:hover:scale-[130%] will-change-transform hidden tl:block opacity-100 relative  pl-[0.8rem] transition-all duration-300 z-10 absolute"
            }
          },
          {threshold: 0.1})
          rightObserver.observe(card7.current)

          const observer1 = new IntersectionObserver(
            entries=>{
              const entry = entries[0]
              if(entry.isIntersecting){
              dot1.current.className = "transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text"
              dot2.current.className = "transition-all duration-300 text-[2rem]"
              dot3.current.className = "transition-all duration-300 text-[2rem]"
              dot4.current.className = "transition-all duration-300 text-[2rem]"
              dot5.current.className = "transition-all duration-300 text-[2rem]"
              dot6.current.className = "transition-all duration-300 text-[2rem]"
              dot7.current.className = "transition-all duration-300 text-[2rem]"
              }
            },
            {threshold: 0.1})
            observer1.observe(card1.current)

            const observer2 = new IntersectionObserver(
              entries=>{
                const entry = entries[0]
                if(entry.isIntersecting){
                dot1.current.className = "transition-all duration-300 text-[2rem]"
                dot2.current.className = "transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text"
                dot3.current.className = "transition-all duration-300 text-[2rem]"
                dot4.current.className = "transition-all duration-300 text-[2rem]"
                dot5.current.className = "transition-all duration-300 text-[2rem]"
                dot6.current.className = "transition-all duration-300 text-[2rem]"
                dot7.current.className = "transition-all duration-300 text-[2rem]"

                }
              },
              {threshold: 0.1})
              observer2.observe(card2.current)

              const observer3 = new IntersectionObserver(
                
                entries=>{
                  const entry = entries[0]
                  if(entry.isIntersecting){
                  dot1.current.className = "transition-all duration-300 text-[2rem]"
                  dot2.current.className = "transition-all duration-300 text-[2rem]"
                  dot3.current.className = "transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text"
                  dot4.current.className = "transition-all duration-300 text-[2rem]"
                  dot5.current.className = "transition-all duration-300 text-[2rem]"
                  dot6.current.className = "transition-all duration-300 text-[2rem]"
                  dot7.current.className = "transition-all duration-300 text-[2rem]"
    
                  }
                },
                {threshold: 0.1})
                observer3.observe(card3.current)

                const observer4 = new IntersectionObserver(
                  
                  entries=>{
                    const entry = entries[0]
                    if(entry.isIntersecting){
                    dot1.current.className = "transition-all duration-300 text-[2rem]"
                    dot2.current.className = "transition-all duration-300 text-[2rem]"
                    dot3.current.className = "transition-all duration-300 text-[2rem]"
                    dot4.current.className = "transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text"
                    dot5.current.className = "transition-all duration-300 text-[2rem]"
                    dot6.current.className = "transition-all duration-300 text-[2rem]"
                    dot7.current.className = "transition-all duration-300 text-[2rem]"
      
                    }
                  },
                  {threshold: 0.1})
                  observer4.observe(card4.current)

                  const observer5 = new IntersectionObserver(
                    
                    entries=>{
                      const entry = entries[0]
                      if(entry.isIntersecting){
                      dot1.current.className = "transition-all duration-300 text-[2rem]"
                      dot2.current.className = "transition-all duration-300 text-[2rem]"
                      dot3.current.className = "transition-all duration-300 text-[2rem]"
                      dot4.current.className = "transition-all duration-300 text-[2rem]"
                      dot5.current.className = "transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text"
                      dot6.current.className = "transition-all duration-300 text-[2rem]"
                      dot7.current.className = "transition-all duration-300 text-[2rem]"
        
                      }
                    },
                    {threshold: 0.1})
                    observer5.observe(card5.current)

                    const observer6 = new IntersectionObserver(
                      
                      entries=>{
                        const entry = entries[0]
                        if(entry.isIntersecting){
                        dot1.current.className = "transition-all duration-300 text-[2rem]"
                        dot2.current.className = "transition-all duration-300 text-[2rem]"
                        dot3.current.className = "transition-all duration-300 text-[2rem]"
                        dot4.current.className = "transition-all duration-300 text-[2rem]"
                        dot5.current.className = "transition-all duration-300 text-[2rem]"
                        dot6.current.className = "transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text"
                        dot7.current.className = "transition-all duration-300 text-[2rem]"
        
                      }
                    },
                      {threshold: 0.1})
                      observer6.observe(card6.current)

                      const observer7 = new IntersectionObserver(
                        
                        entries=>{
                          const entry = entries[0]
                          if(entry.isIntersecting){
                          dot1.current.className = "transition-all duration-300 text-[2rem]"
                          dot2.current.className = "transition-all duration-300 text-[2rem]"
                          dot3.current.className = "transition-all duration-300 text-[2rem]"
                          dot4.current.className = "transition-all duration-300 text-[2rem]"
                          dot5.current.className = "transition-all duration-300 text-[2rem]"
                          dot6.current.className = "transition-all duration-300 text-[2rem]"
                          dot7.current.className = "transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text"
            
                          }
                        },
                        {threshold: 0.1})
                        observer7.observe(card7.current)




    },1000)
    

  },[])
 
 
  
   const slideLeft = (amount)=>{
     sliderRef.current.scrollLeft -= amount
 
   }
   const slideRight = (amount)=>{
     sliderRef.current.scrollLeft += amount
 
 
   }
 



  return (

    <>
              {/* main container */}
              <div ref={featureRef} className='w-[100vw] flex  flex-col justify-center opacity-0 transition-all duration-1000'>
             
              {/* slider container */}
              <div className="flex items-center justify-center align-center w-[100vw] ">
              {/*left arrow */}
              <div ref={leftRef} onClick={()=>{slideLeft(500)}} className="ds:hover:scale-[130%] will-change-transform opacity-0 translate-x-[-5rem] hidden tl:block transition-all duration-300"><BsChevronLeft  size={40} className="text-white z-10"/></div>
              {/* slider  */}
              <div id="slider" ref={sliderRef} className=" snap-x snap-mandatory flex flex-row scroll-smooth items-center relative w-[100vw] ps:h-[35rem] tp:h-[50rem] tl:h-[43rem] ds:h-[38rem] dl:h-[55rem] overflow-x-visible overflow-y-hidden">
                {/* Cards container */}
                <div className="flex flex-row gap-[1.2rem] absolute left-[40vw] pr-[8rem]">

                  <Card refprop={card1} image="" title="Title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam et eos rem quis amet esse consequuntur. Eius, assumenda amet!"/>
                  <Card refprop={card2} image="" title="Title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam et eos rem quis amet esse consequuntur. Eius, assumenda amet!"/>
                  <Card refprop={card3} image="" title="Title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam et eos rem quis amet esse consequuntur. Eius, assumenda amet!"/>
                  <Card refprop={card4} image="" title="Title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam et eos rem quis amet esse consequuntur. Eius, assumenda amet!"/>
                  <Card refprop={card5} image="" title="Title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam et eos rem quis amet esse consequuntur. Eius, assumenda amet!"/>
                  <Card refprop={card6} image="" title="Title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam et eos rem quis amet esse consequuntur. Eius, assumenda amet!"/>
                  <Card refprop={card7} image="" title="Title" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam et eos rem quis amet esse consequuntur. Eius, assumenda amet!"/>

                </div>
              </div>
              {/* Right arrow */}
              <div ref={rightRef} onClick={()=>{slideRight(500)}} className="ds:hover:scale-[130%] will-change-transform hidden tl:block opacity-100 relative translate-x-[-1rem] pl-[0.8rem] transition-all duration-300"><BsChevronRight  size={40} className="text-white-500 z-10"/></div>
              </div>

             {/* dots container */}
             <div className="w-[100vw] h-[3rem] tp:hidden flex items-center align-center justify-center gap-[0.5rem]">
                  <div onClick={()=>{slider.scrollLeft = (slider.scrollWidth / 7) -200}}     ref={dot1} className="transition-all duration-300 text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text">●</div>
                  <div onClick={()=>{slider.scrollLeft = (slider.scrollWidth / 7 * 2) -300,console.log(slider)}} ref={dot2} className="transition-all duration-300 text-[2rem] ">●</div>
                  <div onClick={()=>{slider.scrollLeft = (slider.scrollWidth / 7 * 3) -300}} ref={dot3} className="transition-all duration-300 text-[2rem] ">●</div>
                  <div onClick={()=>{slider.scrollLeft = (slider.scrollWidth / 7 * 4) -300}} ref={dot4} className="transition-all duration-300 text-[2rem] ">●</div>
                  <div onClick={()=>{slider.scrollLeft = (slider.scrollWidth / 7 * 5) -300}} ref={dot5} className="transition-all duration-300 text-[2rem] ">●</div>
                  <div onClick={()=>{slider.scrollLeft = (slider.scrollWidth / 7 * 6) -300}} ref={dot6} className="transition-all duration-300 text-[2rem] ">●</div>
                  <div onClick={()=>{slider.scrollLeft = (slider.scrollWidth / 7 * 7) -300}} ref={dot7} className="transition-all duration-300 text-[2rem] ">●</div>
                </div>
          

        </div>
    </>


  )
}

export default Features