import React, { useEffect, useRef, useState } from 'react'
import {BsFillTriangleFill} from "react-icons/bs"


const Question = React.memo((props) => {


const [open,setOpen] = useState(false)

  const question = useRef()
  useEffect(()=>{
    const questionObserver = new IntersectionObserver(entries=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        questionObserver.unobserve(question.current)
        setTimeout(() => {
          question.current.className = "animate-appearFromDown relative ps:w-[100vw] p:w-[95vw] tl:w-[35rem] dl:w-[40rem] overflow-hidden rounded-xl shadow-lg ds:hover:scale-[103%] transition-all duration-500"
        }, 500);
      }
    },{threshold:1})
    questionObserver.observe(question.current)
  },[])



  return (

    <div ref={question} className="opacity-0 relative ps:w-[100vw] p:w-[95vw] tl:w-[35rem] dl:w-[40rem] overflow-hidden rounded-xl shadow-lg  transition-all duration-500">
            <input onClick={()=>{setOpen(!open)}} className="absolute top-0 inset-x-0 w-full h-[7rem] tl:h-[7rem] dl:h-[7rem] opacity-0 z-10 cursor-pointer peer" type="checkbox" />
        <div className=" bg-gradient-to-b from-[#00204a] to-[#001229] h-[7rem] tl:h-[7rem] dl:h-[7rem] w-full pl-5 flex items-center">
            <h1 className="font-semibold text-[1rem] tp:text-[1.5rem] w-[70%]">{props.question}</h1>
            <BsFillTriangleFill size={25} className={open ? "absolute ps:right-[1rem] p:right-[2rem] tp:right-[3rem] transition-transform duration-500 rotate-180" 
                                                          : "absolute ps:right-[1rem] p:right-[2rem] tp:right-[3rem] transition-transform duration-500 rotate-0"}/>
        </div>
            <div className={open ? "text-[1rem] tp:text-[1.4rem] flex items-center h-[13rem] bg-[#001229] text-white px-[2rem]  overflow-hidden transition-all duration-500" 
                                 : "text-[1rem] tp:text-[1.4rem] flex items-center h-0 bg-[#001229] text-[#001229] px-[2rem] overflow-hidden transition-all duration-500"}>{props.answer}</div>
        {/* content */}
    </div>


  )
})

export default Question