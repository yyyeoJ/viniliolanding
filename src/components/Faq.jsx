import React, { useEffect, useRef, useState } from 'react'
import Question from './Question'
import {BsFillTriangleFill, BsTriangleFill} from "react-icons/bs"


const Faq = (props) => {


  const title = useRef()

  useEffect(()=>{
    const titleObserver = new IntersectionObserver(entries=>{
      const entry = entries[0]
      if(entry.isIntersecting){
          title.current.className = "pb-[2rem] dl:pb-[5rem] transition-all duration-[1000ms] translate-x-[0rem] opacity-100 font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center  ps:text-[3.5rem] p:text-[3.9rem] tp:text-[6rem] tp:text-[6rem] dl:text-[10.5rem]"
          
      }
    },{threshold:0.5})
    titleObserver.observe(title.current)

  },[])


  return (
    // main container
    <div ref={props.faqRef} className="ps:pt-[5rem] tp:pt-[10rem] tl:pt-[5rem] ds:pt-[5rem] dl:pt-[15rem] tp:pb-[10rem] transition-all duration-300 w-[100vw] bg-[#172d52] relative flex items-center flex-col">
      {/* title */}
      <div ref={title} className="pb-[5rem] dl:pb-[5rem] transition-all duration-[1000ms] translate-x-[-20vw] opacity-0  font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text  ps:text-[3.5rem] text-center  p:text-[3.9rem] tp:text-[6rem] tp:text-[6rem] dl:text-[10.5rem]">FAQ</div>
      {/* questions container */}
      <div className="pb-[10rem] flex flex-col gap-[1rem] tp:gap-[2.1rem] tl:gap-[1rem] dl:gap-[2rem] transition-all duration-300 items-center align-center justify-center w-[50vw]">

      <Question question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi quam numquam quaerat et dolore eaque fuga enim autem tempore."}/>
      <Question question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum culpa animi et ab ea ducimus."}/>
      <Question question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum culpa animi et ab ea ducimus."}/>
      <Question question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum culpa animi et ab ea ducimus."}/>
      <Question question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum culpa animi et ab ea ducimus."}/>



          
      </div>



        {/* Divider bottom */}
        <div className="absolute bottom-0 left-0 w-[100vw] overflow-hidden leading-0">
            <svg className="relative block w-[100vw] h-[3rem] tp:h-[7rem] tl:h-[6rem]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#000E21]"></path>
            </svg>
        </div>

    </div>

  )
}

export default Faq