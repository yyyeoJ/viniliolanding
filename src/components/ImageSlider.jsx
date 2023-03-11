import React, { useCallback, useEffect, useRef, useState,memo } from 'react'
import {BsChevronLeft , BsChevronRight,} from "react-icons/bs"
import Testimonialcard from './Testimonialcard'


const ImageSlider = React.memo((props) => {



    const slides = [
        <Testimonialcard  userName={"Vinilio user"} user={"/assets/user.png"} quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque obcaecati minus eos reiciendis repellendus ipsum, incidunt facere deleniti id?"}/>,
        <Testimonialcard  userName={"Vinilio user"} user={"/assets/user.png"} quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque obcaecati minus eos reiciendis repellendus ipsum, incidunt facere deleniti id?"}/>,
        <Testimonialcard  userName={"Vinilio user"} user={"/assets/user.png"} quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque obcaecati minus eos reiciendis repellendus ipsum, incidunt facere deleniti id?"}/>,
        <Testimonialcard  userName={"Vinilio user"} user={"/assets/user.png"} quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque obcaecati minus eos reiciendis repellendus ipsum, incidunt facere deleniti id?"}/>,
        <Testimonialcard  userName={"Vinilio user"} user={"/assets/user.png"} quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque obcaecati minus eos reiciendis repellendus ipsum, incidunt facere deleniti id?"}/>,
    ]




    const reviewSlider = useRef()


    const [currentIndex,setCurrentIndex] = useState(0)



    const previous = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1
        const scrollValue = reviewSlider.current.scrollWidth / slides.length
        reviewSlider.current.scrollLeft = newIndex * scrollValue
        setCurrentIndex(newIndex)
       
    }
    const next = ()=>{
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        const scrollValue = reviewSlider.current.scrollWidth / slides.length
        reviewSlider.current.scrollLeft = newIndex * scrollValue
        setCurrentIndex(newIndex)
       
    }
    
    const goToSlide = (index)=>{
        setCurrentIndex(index)
        const scrollValue = reviewSlider.current.scrollWidth / slides.length
        reviewSlider.current.scrollLeft = index * scrollValue
        
    }


    const timerRef = useRef(null)
    if(timerRef.current){clearInterval(timerRef.current)}

    
    useEffect(()=>{


        

        if(props.autoSlide){timerRef.current = setTimeout(()=>{
            next()
        },5000)

        return () => clearTimeout(timerRef.current)
        }else{clearInterval(timerRef.current)} 
    },[next])


  return (

    // main container
    <div  className='tp:w-[45rem] ps:w-[95vw] ps:h-[30rem] tl:w-[40rem] dl:w-[60rem] tp:h-[25rem] tl:h-[20rem] dl:h-[30rem] flex justify-center relative  shadow-2xl'>
        {/* Left arrow */}
        <BsChevronLeft size={30}  onClick={previous} className="tp:hover:scale-[130%]  transition-all duration-300 z-10 select-none cursor-pointer absolute left-0 top-[50%] translate-y-[-50%]"/>
        {/* right arrow */}
        <BsChevronRight size={30} onClick={next}     className="tp:hover:scale-[130%]  transition-all duration-300 z-10 select-none cursor-pointer absolute right-0 top-[50%] translate-y-[-50%]"/>
        
        {/* slides */}
        <div ref={reviewSlider} id="testimonial"  className="rounded-[2rem] select-none flex overflow-scroll pointer-events-none scroll-smooth snap-x snap-mandatory">
            {slides.map((slide,slideIndex)=>(
                 <div id="slide" data-key={slideIndex} key={slideIndex} className="select-none">
                    {slide}
                 </div>
            ))}
        </div>
        {/* Dots container */}
        <div className="flex absolute gap-[0.5rem] bottom-[-3rem]">
            {slides.map((_, slideIndex)=>(
                <div onClick={()=>{goToSlide(slideIndex)}} key={slideIndex} className={currentIndex === slideIndex ?  "select-none text-[2rem] bg-gradient-to-b from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text cursor-pointer" : "select-none text-[2rem] text-white cursor-pointer"}>●</div>
            ))}
        </div>



    </div>

   
  )
})

export default ImageSlider