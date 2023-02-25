import React, { useEffect, useRef, useState } from 'react'
import {BsCheck} from "react-icons/bs"





const Pricing = (props) => {

  const title = useRef()
  const price1desktop = useRef()
  const price3desktop = useRef()
  const price1mobile = useRef()
  const price2mobile = useRef()
  const price3mobile = useRef()


const container = useRef()


  useEffect(()=>{

    setTimeout(()=>{
      const titleObserver = new IntersectionObserver(
        entries=>{
          const entry = entries[0]
          if(entry.isIntersecting){
            titleObserver.unobserve(title.current)
            title.current.className = "animate-appearFromDown transition-all pt-[5rem] duration-[700ms] ps:pb-[2rem] tp:pb-[5rem] tl:pb-[5rem] ds:pb-[5rem] font-bold  bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]"
          }
        },
        {threshold: 1})
        titleObserver.observe(title.current)

        const priceObserver = new IntersectionObserver(
          entries=>{
            const entry = entries[0]
            if(entry.isIntersecting){
              setTimeout(() => {
                
                price1desktop.current.className = "hover:scale-[110%] ps:hidden tl:block transition-all duration-500 tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]  relative tl:left-[0rem] ds:left-[2rem] dl:left-[0rem] dxl:left-[10rem]"
                price3desktop.current.className = "hover:scale-[110%] ps:hidden tl:block transition-all duration-500 tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#d0ff00] relative  tl:left-[0rem] ds:left-[-2rem] dl:left-[0rem] dxl:left-[-10rem]"
              }, 500);
              priceObserver.unobserve(container.current)
              
              container.current.className = "transition-all duration-[700ms] tl:animate-appearFromDown w-[100vw] tp:h-full tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] pb-[0rem] flex flex-col tl:flex-row justify-center items-center gap-[1rem] tl:gap-0 ds:gap-[1rem] relative"
            }
          },
          {threshold: 0.9})
          priceObserver.observe(container.current)

          const price1Observer = new IntersectionObserver(
            entries=>{
              const entry = entries[0]
              if(entry.isIntersecting){
                setTimeout(() => {
                  price1mobile.current.className = "translate-x-[0rem] tp:translate-x-[0]  ps:block tl:hidden transition-all duration-500 ps:w-[100vw] p:w-[90vw] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]  relative"
                  price1Observer.unobserve(price1mobile.current)
                  

                }, 600);
              }
            },
            {threshold: 0.3})
            price1Observer.observe(price1mobile.current)

            const price2Observer = new IntersectionObserver(
              entries=>{
                const entry = entries[0]
                if(entry.isIntersecting){
                  setTimeout(() => {
                    price2Observer.unobserve(price2mobile.current)
                    price2mobile.current.className = "translate-x-[0]  ps:block tl:hidden transition-all duration-[700ms] ps:w-[100vw] p:w-[90vw] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#006FFF] to-[#00bbff] z-20 relative"
                  
                  }, 500);
                }
              },
              {threshold: 0.3})
              price2Observer.observe(price2mobile.current)

              const price3Observer = new IntersectionObserver(
                entries=>{
                  const entry = entries[0]
                  if(entry.isIntersecting){
                    setTimeout(() => {
                      price3mobile.current.className = "translate-x-[0rem] ps:block tl:hidden transition-all duration-500 ps:w-[100vw] p:w-[90vw] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#d0ff00] relative"
                      price3Observer.unobserve(price3mobile.current)
                    },600);
                  }
                },
                {threshold: 0.3})
                price3Observer.observe(price3mobile.current)

    },1000)
    
  
  },[])
  


  return (
      //Main container
      <div ref={props.pricingRef} className="flex-col will-change-transform">
        {/* Title */}
        <div ref={title} className="opacity-0 transition-all duration-[700ms] pt-[5rem] ps:pb-[2rem] tp:pb-[5rem] tl:pb-[5rem] ds:pb-[5rem] font-bold  bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]">Pricing & Plans</div>
        {/* Cards container */}
        <div ref={container} className="transition-all duration-[700ms] opacity-100 tl:opacity-0 w-[100vw] h-full tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] pb-[0rem] flex flex-col tl:flex-row justify-center items-center gap-[1rem] tl:gap-0  ds:gap-[1rem] relative">
        
            {/* Price1 desktop */}
            <div ref={price1desktop} className="hover:scale-[110%] ps:hidden tl:block opacity-100 transition-all duration-[700ms] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]   relative tl:left-[15rem] ds:left-[20rem] dl:left-[35rem] dxl:left-[50rem]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem] font-semibold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className=" p-[0.55rem]  ps:mb-[3rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>
            {/* Price1 mobile */}
            <div ref={price1mobile} className="ps:block tl:hidden opacity-0 transition-all duration-[700ms] ps:w-[100vw] p:w-[90vw] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]   relative ps:translate-x-[50vw]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem] font-semibold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className=" p-[0.55rem]  ps:mb-[3rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>


            {/* Price2 desktop */}
            <div className="hover:scale-[110%] ps:hidden tl:block opacity-100 transition-all duration-[700ms] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#006FFF] to-[#00bbff] z-20 relative">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className="p-[0.5rem]  ps:mb-[3rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>
            {/* Price2 mobile */}
            <div ref={price2mobile} className="ps:block tl:hidden opacity-0 transition-all duration-[700ms] ps:w-[100vw] p:w-[90vw] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#006FFF] to-[#00bbff] z-20 relative ps:translate-x-[-50vw]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className="p-[0.5rem]  ps:mb-[3rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>


            {/* Price3 desktop */}
            <div ref={price3desktop} className="hover:scale-[110%] ps:hidden tl:block opacity-100 transition-all duration-[700ms] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#d0ff00] relative tl:left-[-15rem] ds:left-[-20rem] dl:left-[-35rem] dxl:left-[-50rem]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#6fff00] to-[#d0ff00] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#6fff00] to-[#d0ff00] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className=" p-[0.55rem]  ps:mb-[3rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>
            {/* Price3 mobile */}
            <div ref={price3mobile} className="ps:block tl:hidden opacity-0 transition-all duration-[700ms] ps:w-[100vw] p:w-[90vw] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[46rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#d0ff00] relative ps:translate-x-[50vw]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#6fff00] to-[#d0ff00] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#6fff00] to-[#d0ff00] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className=" p-[0.55rem]  ps:mb-[3rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.55rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>



        </div>

      </div>


  )
}

export default Pricing