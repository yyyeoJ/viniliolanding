import React, { useRef, useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'

const Testimonial = React.memo((props) => {



  const title = useRef()
  const container = useRef()
  const [loaded,setLoaded] = useState(false)
  

  useEffect(()=>{
    const titleObserver = new IntersectionObserver(entries=>{
      const entry = entries[0]
      if(entry.isIntersecting){
          title.current.className = "mb-[5rem] pt-[10rem] dl:pb-[5rem] transition-all duration-[1000ms] translate-x-[0rem] opacity-100 font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center  ps:text-[2rem]  tp:text-[4rem] tl:text-[3rem] dl:text-[5.5rem]"
          setLoaded(true)
      }
    },{threshold:0.5})
    titleObserver.observe(title.current)

    const containerObserver = new IntersectionObserver(entries=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        container.current.className = "animate-appearFromDown transition-all duration-500 "
        containerObserver.unobserve(container.current)
      }
    },{threshold:0.5})
    containerObserver.observe(container.current)

  },[])




  return (


    <div ref={props.reviewsRef}  className="ps:h-[130%] tp:h-[80%] tl:h-[110%] ds:h-[100%] w-[100vw]  bg-[#172d52] relative flex flex-col items-center" >

        {/* title */}
        <div ref={title} className=" mb-[5rem] pt-[10rem]  dl:pb-[5rem] transition-all duration-[1000ms] translate-x-[-8rem] opacity-0 font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center  ps:text-[2rem]  tp:text-[4rem] tl:text-[3rem] dl:text-[5.5rem]">
          What our clients say about us</div>

        <div ref={container} className="opacity-0 transition-all duration-500 rounded-[3rme]">
          {loaded &&   <ImageSlider autoSlide={true}/>}
        </div>



        {/* Divider top  */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
            <svg className="relative block w-[100vw] h-[3rem] tp:h-[7rem] tl:h-[6rem]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#000E21]"></path>
            </svg>
        </div>

    </div>

  )
})

export default Testimonial