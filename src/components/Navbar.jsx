import React, { useState } from 'react'
import {TbVinyl} from "react-icons/tb"
import {BsDashLg} from "react-icons/bs"
import {AiOutlineDown} from "react-icons/ai"

const Navbar = (props) => {

  return (
    <div className="flex flex-col">

      <div className="z-10 bg-[#001229] h-20 text-white pt-3 p-2 flex flex-row relative items-center align-center">
       <TbVinyl className="text-[#006FFF] w-12 h-12 ml-2 lg:ml-5 lg:w-16 lg:h-16 pr-2 "/>
        <h1 className=" text-[#006FFF] font-extrabold text-2xl tracking-widest">
          Vinilio</h1>
        <ul className="text-white hidden lg:flex flex-row gap-5 items-center absolute right-14 ">
           <li>
              <div className="group h-14 relative top-[5px]">
                <div className="cursor-pointer group-hover:bg-[#203147] transition-all duration-300 py-2 px-3 rounded-lg text-xl font-bold tracking-wide">About</div>
                <div className="translate-y-[-0.5rem] group-hover:translate-y-0 absolute mt-2 opacity-0 flex pointer-events-none flex-col group-hover:pointer-events-auto group-hover:opacity-100 bg-white text-black text-xl rounded-lg p-3 transition-all duration-200 group-hover:duration-500">
                  <a className="hover:underline cursor-pointer">Features</a>
                  <a className="hover:underline cursor-pointer">Pricing</a>
                  <a className="hover:underline cursor-pointer">Testimonials</a>
                </div>
                </div>
            </li>
           <li className="cursor-pointer hover:bg-[#203147] transition-all duration-300 py-2 px-3 rounded-lg text-xl font-bold tracking-wide">FAQ</li>
           <li className="cursor-pointer hover:bg-[#203147] transition-all duration-300 py-2 px-3 rounded-lg text-xl font-bold tracking-wide">Contact us</li>
           <li className="cursor-pointer bg-white hover:bg-gray-400 transition-all duration-300 p-2 text-black rounded-lg px-5 text-xl font-bold tracking-wide">Start free trial</li>
        </ul>
        <button className="cursor-pointer flex flex-col lg:hidden absolute right-5 text-2xl text-white"
                onClick={()=>{props.setNavbarOpen(!props.navbarOpen)}}>
          <BsDashLg  className={props.navbarOpen ? "relative top-6 rotate-45 transition-all duration-500" : "relative top-4 transition-all duration-500"}/>
          <BsDashLg className={props.navbarOpen ? "transition-all duration-500 opacity-0 translate-x-[-1rem]" : "transition-all duration-500"}/>
          <BsDashLg className={props.navbarOpen ? "relative bottom-6 rotate-[-45deg] transition-all duration-500" : "relative bottom-4 transition-all duration-500"}/>
        </button>     
      </div>

      <div className={props.navbarOpen ?  "absolute w-full gap-5 flex flex-col px-5 lg:hidden bg-[#001229] h-screen text-white pointer-events-auto opacity-100 transition-all duration-[600ms]" : "absolute w-full bg-[#001229] gap-5 flex flex-col px-5 h-screen text-white pointer-events-none opacity-0 transition-all duration-[600ms]"}>
        <div className={props.navbarOpen ? "pt-10 transition-all duration-[200ms] text-2xl font-bold tracking-wide" : "transition-all duration-[200ms] translate-y-[-4rem] text-2xl font-bold tracking-wide"}>About<AiOutlineDown className="inline pl-2 text-2xl font-bold"/></div>
        <div className={props.navbarOpen ? "transition-all duration-[300ms] ml-2" : "transition-all duration-[300ms] translate-y-[-1rem] ml-2"}>Features</div>
        <div className={props.navbarOpen ? "transition-all duration-[400ms] ml-2" : "transition-all duration-[400ms] translate-y-[-4rem] ml-2"}>Pricing</div>
        <div className={props.navbarOpen ? "transition-all duration-[500ms] ml-2" : "transition-all duration-[500ms] translate-y-[-5rem] ml-2"}>Testimonials</div>
        <div className={props.navbarOpen ? "transition-all duration-[600ms] text-2xl font-bold tracking-wide" : "transition-all duration-[600ms] translate-y-[-6rem] text-2xl font-bold tracking-wide"}>FAQ</div>
        <div className={props.navbarOpen ? "transition-all duration-[700ms] text-2xl font-bold tracking-wide" : "transition-all duration-[700ms] translate-y-[-7rem] text-2xl font-bold tracking-wide"}>Contact us</div>
        <div className={props.navbarOpen ? "transition-all duration-[800ms] bg-white flex justify-center items-center h-14 text-black rounded-lg text-xl font-bold tracking-wide" : "transition-all duration-[800ms] translate-y-[-8rem] bg-white flex justify-center items-center h-14 text-black rounded-lg text-xl font-bold tracking-wide"}>Start free trial</div>

      </div>

    </div>
  )
}

export default Navbar