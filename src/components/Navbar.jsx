import React, { useState } from 'react'
import {TbVinyl} from "react-icons/tb"
import {BsDashLg} from "react-icons/bs"
import {AiOutlineDown} from "react-icons/ai"

const Navbar = (props) => {

  return (
    <div className="flex flex-col">

      <div className={props.navbarOpen ? "z-40 bg-[#001229] xl:bg-gradient-to-b xl:from-[#00204a] xl:to-[#001229] h-20 text-white pt-3 p-2 flex flex-row relative items-center align-center transition-all duration-300" : "z-40 bg-gradient-to-b from-[#00204a] h-20 text-white pt-3 p-2 flex flex-row relative items-center align-center transition-all duration-300"}>
       <TbVinyl className="animate-appearFromUp text-[#006FFF] w-12 h-12 ml-2 xl:ml-5 xl:w-16 xl:h-16 pr-2 "/>
        <h1 className="animate-appearFromUp text-[#006FFF] font-extrabold text-2xl tracking-widest">
          Vinilio</h1>
        <ul className="text-white hidden xl:flex flex-row gap-5 items-center absolute right-14 ">
           <li>
              <div className="group h-14 relative top-[5px]">
                <div className="animate-appearFromUp cursor-pointer group-hover:bg-[#203147] transition-all duration-300 py-2 px-3 rounded-lg text-xl font-bold tracking-wide">About</div>
                <div className="translate-y-[-0.5rem] group-hover:translate-y-0 absolute mt-2 opacity-0 flex pointer-events-none flex-col group-hover:pointer-events-auto group-hover:opacity-100 bg-white text-black text-xl rounded-lg p-3 transition-all duration-200 group-hover:duration-500">
                  <a className="hover:underline cursor-pointer">Features</a>
                  <a className="hover:underline cursor-pointer">Pricing</a>
                  <a className="hover:underline cursor-pointer">Testimonials</a>
                </div>
                </div>
            </li>
            <li>
              <div className="group h-14 relative top-[5px]">
                <div className="animate-appearFromUp cursor-pointer group-hover:bg-[#203147] transition-all duration-300 py-2 px-3 rounded-lg text-xl font-bold tracking-wide">Support</div>
                <div className="w-[12rem] translate-y-[-0.5rem] group-hover:translate-y-0 absolute mt-2 opacity-0 flex pointer-events-none flex-col group-hover:pointer-events-auto group-hover:opacity-100 bg-white text-black text-xl rounded-lg p-3 transition-all duration-200 group-hover:duration-500">
                  <a className="hover:underline cursor-pointer">FAQ</a>
                  <a className="hover:underline cursor-pointer">Supported devices</a>
                  <a className="hover:underline cursor-pointer">Contact us</a>
                </div>
                </div>
            </li>           
            <li className="animate-appearFromUp cursor-pointer bg-white hover:bg-gray-400 transition-all duration-300 p-2 text-black rounded-lg px-5 text-xl font-bold tracking-wide">Start free trial</li>
        </ul>
        <button className="z-30 animate-appearFromUp cursor-pointer flex flex-col xl:hidden absolute right-5 text-2xl text-white"
                onClick={()=>{props.setNavbarOpen(!props.navbarOpen)}}>
          <BsDashLg  className={props.navbarOpen ? "relative top-6 rotate-45 transition-all duration-500" : "relative top-4 transition-all duration-500"}/>
          <BsDashLg className={props.navbarOpen ? "transition-all duration-500 opacity-0 translate-x-[-1rem]" : "transition-all duration-500"}/>
          <BsDashLg className={props.navbarOpen ? "relative bottom-6 rotate-[-45deg] transition-all duration-500" : "relative bottom-4 transition-all duration-500"}/>
        </button>     
      </div>

      <div className={props.navbarOpen ?  "z-50 absolute top-[4rem] w-full gap-5 flex flex-col px-5 xl:hidden bg-[#001229] h-[calc(100vh-5rem)] text-white pointer-events-auto opacity-100 transition-all duration-[600ms]" : "z-50 absolute top-[4rem] w-full gap-5 flex flex-col px-5 xl:hidden bg-[#001229] h-[calc(100vh-5rem)] text-white pointer-events-none opacity-0 transition-all duration-[600ms]"}>
        <div className={props.navbarOpen ? "pt-10 transition-all duration-[200ms] text-2xl font-bold tracking-wide" : "pt-10 translate-y-[-2rem] transition-all duration-[200ms] text-2xl font-bold tracking-wide"}>About<AiOutlineDown className="inline pl-2 text-2xl font-bold"/></div>
        <div className={props.navbarOpen ? "transition-all duration-[400ms] ml-2 translate-y-0" : "transition-all duration-[400ms] translate-y-[-4rem] ml-2"}>Features</div>
        <div className={props.navbarOpen ? "transition-all duration-[400ms] ml-2" : "transition-all duration-[400ms] translate-y-[-6rem] ml-2"}>Pricing</div>
        <div className={props.navbarOpen ? "transition-all duration-[500ms] ml-2" : "transition-all duration-[400ms] translate-y-[-8rem] ml-2"}>Testimonials</div>
        <div className={props.navbarOpen ? "transition-all duration-[600ms] text-2xl font-bold tracking-wide" : "transition-all duration-[500ms] translate-y-[-10rem] text-2xl font-bold tracking-wide"}>FAQ</div>
        <div className={props.navbarOpen ? "transition-all duration-[700ms] text-2xl font-bold tracking-wide" : "transition-all duration-[500ms] translate-y-[-12rem] text-2xl font-bold tracking-wide"}>Contact us</div>
        <div className={props.navbarOpen ? "transition-all duration-[800ms] bg-white flex justify-center items-center h-14 text-black rounded-lg text-xl font-bold tracking-wide" : "transition-all duration-[500ms] translate-y-[-13.5rem] bg-white flex justify-center items-center h-14 text-black rounded-lg text-xl font-bold tracking-wide"}>Start free trial</div>

      </div>

    </div>
  )
}

export default Navbar