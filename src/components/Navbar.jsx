import React, { useEffect, useState } from 'react'
import {TbVinyl} from 'react-icons/tb'
import { BsDashLg } from 'react-icons/bs'



const Navbar = (props) => {


    return (

    <nav className={props.navbarOpen ? "bg-[#001229] z-40 w-[100vw] fixed top-0 h-[4rem] flex overlfow-x-hidden" : "bg-gradient-to-b from-[#00204a] to-[#001229] z-40 w-[100vw]  fixed top-0 h-[4rem] flex"}>
        <div className="flex items-center justify-between w-full dl:w-[80%] px-[2rem] mx-auto">
            {/*Logo */}
            <div onClick={()=>{ document.getElementById("Hero").scrollIntoView()}} className={props.navbarOpen ? "flex flex-row items-center cursor-pointer animate-appearFromUp text-[#006FFF] pointer-events-none" 
                                                                                        : "flex flex-row items-center cursor-pointer animate-appearFromUp text-[#006FFF]"}>
                
                <TbVinyl className="w-12 h-12 ml-2 pr-2 "/>
                <h1 className="font-extrabold text-2xl tracking-widest">Vinilio</h1>
            </div>
            {/*Desktop Nav */}
            <ul className="text-white hidden ds:flex flex-row gap-5 items-center ">
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
                    <li className="animate-appearFromUp cursor-pointer bg-white hover:bg-gray-400 transition-all duration-300 p-2 text-black rounded-lg px-5 text-xl font-bold tracking-wide">Start listening</li>
            </ul>
            {/*Mobile nav */}
                {/*Button */}
                <button className="flex ds:hidden z-30 animate-appearFromUp cursor-pointer flex-col text-2xl text-white"
                    onClick={()=>{props.setNavbarOpen(!props.navbarOpen)}}>
                    <BsDashLg  className={props.navbarOpen ? "relative top-6 transition-all duration-500 rotate-45" 
                                                        : "relative top-4 transition-all duration-500"}/>
                    <BsDashLg className={props.navbarOpen ? "transition-all duration-500 opacity-0 translate-x-[-1rem]" 
                                                        : "transition-all duration-500"}/>
                    <BsDashLg className={props.navbarOpen ? "relative bottom-6 transition-all duration-500 rotate-[-45deg]" 
                                                        : "relative bottom-4 transition-all duration-500"}/>
                </button>     
                {/*Opened */}
                <div className={props.navbarOpen ? "fixed overflow-y-scroll pb-[8rem] right-0 bottom-0 bg-[#000e21] z-40 top-[4rem] w-full gap-5 flex flex-col px-[5rem] ds:hidden h-full text-white pointer-events-auto opacity-100 transition-all duration-[600ms]" 
                                                 : "fixed overflow-y-scroll right-0 bottom-0 bg-[#000e21] z-40 top-[4rem] w-full gap-5 flex flex-col px-[5rem] ds:hidden h-[0rem]  text-white pointer-events-none opacity-0   transition-all duration-[600ms]"}>

                        <div className={props.navbarOpen ? "pt-10 transition-all duration-[200ms] text-2xl font-bold tracking-wide" 
                                                        : "pt-10 transition-all duration-[200ms] text-2xl font-bold tracking-wide translate-y-[-2rem]"}>About</div>
                        <div className={props.navbarOpen ? "transition-all duration-[400ms] ml-2 translate-y-0" 
                                                        : "transition-all duration-[400ms] ml-2 translate-y-[-4rem]"}>Features</div>
                        <div className={props.navbarOpen ? "transition-all duration-[400ms] ml-2" 
                                                        : "transition-all duration-[400ms] ml-2 translate-y-[-6rem]"}>Pricing</div>
                        <div className={props.navbarOpen ? "transition-all duration-[500ms] ml-2" 
                                                        : "transition-all duration-[400ms] ml-2 translate-y-[-8rem]"}>Testimonials</div>

                        <div className={props.navbarOpen ? "pt-2  transition-all duration-[600ms] text-2xl font-bold tracking-wide" 
                                                        : "pt-10 transition-all duration-[200ms] text-2xl font-bold tracking-wide translate-y-[-13rem]"}>Support</div>
                        <div className={props.navbarOpen ? "transition-all duration-[700ms] ml-2 translate-y-0" 
                                                        : "transition-all duration-[400ms] ml-2 translate-y-[-15rem]"}>FAQ</div>
                        <div className={props.navbarOpen ? "transition-all duration-[800ms]      translate-y-0 ml-2" 
                                                        : "transition-all duration-[400ms] ml-2 translate-y-[-17rem]"}>Supported devices</div>
                        <div className={props.navbarOpen ? "transition-all duration-[900ms]      translate-y-0 ml-2" 
                                                        : "transition-all duration-[400ms] ml-2 translate-y-[-19rem]"}>Contact us</div>


                        <div className={props.navbarOpen ? "transition-all duration-[1000ms] bg-white flex justify-center items-center h-14 text-black rounded-lg text-xl font-bold tracking-wide" 
                                            : "transition-all duration-[500ms]  bg-white flex justify-center items-center h-14 text-black rounded-lg text-xl font-bold tracking-wide translate-y-[-25rem]"}>Start listening</div>

                </div>
        </div>
    </nav>
  )
}

export default Navbar