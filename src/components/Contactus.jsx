import React, { useEffect, useRef } from 'react'
import {BsInstagram, BsTwitter, BsFacebook,BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"



const Contactus = (props) => {

  const container = useRef()
  useEffect(()=>{
    const containerObserver = new IntersectionObserver(entries=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        container.current.className = "pb-[10rem] pt-[2rem] tp:pb-[5rem] opacity-100 transition-all duration-[1000ms] w-[100vw] bg-[#000e21]  flex flex-col tl:flex-row gap-[3rem] items-center justify-center"
        containerObserver.unobserve(container.current)
      }
    },{threshold:0.5})
    containerObserver.observe(container.current)
  },[])


  return (

    <div ref={container} className="pb-[10rem] pt-[2rem] tp:pb-[5rem] opacity-0 transition-all duration-[1000ms] w-[100vw]  bg-[#000e21]  flex flex-col tl:flex-row gap-[3rem] items-center justify-center">

      {/* location */}
      <div ref={props.contactRef} className="h-[5rem] tp:h-[8rem] tl:h-[5rem]   tl:w-[25rem] w-[40rem]  flex flex-col items-center align-center justify-center">
        <div className=" text-center tl:text-start font-bold w-full tracking-widest tl:text-[1rem] text-[1.5rem] tp:text-[2rem]">Headquarters</div>
        <div className=" text-center tl:text-start w-full tl:text-[1rem] text-[1rem] tp:text-[1.5rem]">Imaginary st. 404 - 2nd floor 13</div>
        <div className=" text-center tl:text-start w-full tl:text-[1rem] text-[1rem] tp:text-[1.5rem]">1111 Budapest - Hungary</div>
      </div>

      {/* socials */}
      <div className="h-[10rem] tl:h-[5rem]  tl:w-[25rem] w-[40rem]  flex flex-col items-center justify-center">
        <div className="font-bold tracking-widest w-full text-center tl:text-start text-[1.5rem] tp:text-[2rem] tl:text-[1rem]">Contact us:</div>
        <div className="relative flex flex-row gap-[1rem] items-center justify-center tl:justify-start  w-full h-[5rem]">
              <BsInstagram className='cursor-pointer ds:hover:scale-[110%] transition-all duration-300 text-[2.5rem] tl:text-[2rem]'/>
              <BsTwitter className='cursor-pointer ds:hover:scale-[110%] transition-all duration-300 text-[2.5rem] tl:text-[2rem]'/>
              <BsFacebook className='cursor-pointer ds:hover:scale-[110%] transition-all duration-300 text-[2.5rem] tl:text-[2rem]'/>
              <MdEmail className='cursor-pointer ds:hover:scale-[110%] transition-all duration-300 text-[3.5rem] tl:text-[2.5rem]'/>
              <div className=' tl:text-[1rem] text-[1.3rem] cursor-pointer ds:hover:scale-[110%] transition-all duration-300 absolute bottom-[-4rem] tp:relative tp:bottom-[0] flex font-bold align-center justify-center gap-[0.5rem]'><BsFillTelephoneFill className='text-[2.5rem] tl:text-[2rem]'/>+36 69 420 1337</div>

        </div>
      </div>

    </div>
  )
}

export default Contactus