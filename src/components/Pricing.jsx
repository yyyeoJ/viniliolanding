import React, { useEffect, useRef } from 'react'
import {BsCheck} from "react-icons/bs"





const Pricing = () => {

  const title = useRef()
  const price1 = useRef()
  const price2 = useRef()
  const price3 = useRef()
  const container = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      const titleObserver = new IntersectionObserver(
        entries=>{
          const entry = entries[0]
          if(entry.isIntersecting){
            titleObserver.unobserve(title.current)
            title.current.className = "animate-appearFromDown transition-all pt-[5rem] duration-[700ms] pb-[5rem] tl:pb-[1rem] ds:pb-[5rem] font-bold  bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]"
          }
        },
        {threshold: 0.8})
        titleObserver.observe(title.current)

        const priceObserver = new IntersectionObserver(
          entries=>{
            const entry = entries[0]
            if(entry.isIntersecting){
              priceObserver.unobserve(container.current)
              container.current.className = "transition-all duration-[700ms] tl:animate-appearFromDown w-[100vw] tp:h-full tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] pb-[0rem] flex flex-col tl:flex-row justify-center items-center tp:gap-[1rem] tl:gap-0 ds:gap-[1rem] relative"
              setTimeout(() => {
                price1.current.className = "transition-all duration-500 tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]  relative tl:left-[0rem] ds:left-[2rem] dl:left-[0rem] dxl:left-[20rem]"
                price3.current.className = "transition-all duration-500 tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#00ffc3] relative  tl:left-[0rem] ds:left-[-2rem] dl:left-[0 rem] dxl:left-[-20rem]"
              }, 500);
            }
          },
          {threshold: 0.99})
          priceObserver.observe(container.current)

          const price1Observer = new IntersectionObserver(
            entries=>{
              const entry = entries[0]
              if(entry.isIntersecting){
                price1Observer.unobserve(price1.current)
                  price1.current.className = "translate-x-[0rem] transition-all duration-500 tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]  relative tl:left-[0rem] ds:left-[2rem] dl:left-[0rem] dxl:left-[20rem]"
              }
            },
            {threshold: 0.5})
            price1Observer.observe(price1.current)

            const price2Observer = new IntersectionObserver(
              entries=>{
                const entry = entries[0]
                if(entry.isIntersecting){
                  price2Observer.unobserve(price2.current)
                    price2.current.className = " tl:opacity-100 transition-all duration-[700ms] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#006FFF] to-[#00bbff] z-20 relative"
                }
              },
              {threshold: 0.5})
              price2Observer.observe(price2.current)

              const price3Observer = new IntersectionObserver(
                entries=>{
                  const entry = entries[0]
                  if(entry.isIntersecting){
                    price3Observer.unobserve(price2.current)
                      price3.current.className = " tl:opacity-100 transition-all duration-[700ms] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#00ffc3] relative tl:left-[-15rem] ds:left-[-20rem] dl:left-[-35rem] dxl:left-[-50rem]"
                  }
                },
                {threshold: 0.5})
                price3Observer.observe(price3.current)


            


    },1000)
    
  
  },[])
  


  return (
      //Main container
      <div className="flex-col ">
        {/* Title */}
        <div ref={title} className="opacity-0 transition-all duration-[700ms] pt-[5rem] pb-[5rem] tl:pb-[1rem] ds:pb-[5rem] font-bold  bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]">Pricing & Plans</div>
        {/* Cards container */}
        <div ref={container} className="transition-all duration-[700ms] opacity-100 tl:opacity-0 w-[100vw] tp:h-full tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] pb-[0rem] flex flex-col tl:flex-row justify-center items-center gap-[1rem] tl:gap-0  ds:gap-[1rem] relative">
        
            {/* Price1 */}
            <div ref={price1} className="opacity-0 tl:opacity-100 transition-all duration-[700ms] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]   relative translate-x-[10rem] tl:translate-x-[0] tl:left-[15rem] ds:left-[20rem] dl:left-[35rem] dxl:left-[50rem]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-3xl p:text-3xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Title</div>
                <div className='pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-3xl p:text-3xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem] font-semibold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className=" p-[0.5rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[8rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>

            {/* Price2 */}
            <div ref={price2} className="opacity-0 tl:opacity-100 transition-all duration-[700ms] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#006FFF] to-[#00bbff] z-20 relative translate-x-[-10rem] tl:translate-x-[0]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-3xl p:text-3xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Title</div>
                <div className='pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-3xl p:text-3xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className="p-[0.5rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[8rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>

            {/* Price3 */}
            <div ref={price3} className="opacity-0 tl:opacity-100 transition-all duration-[700ms] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.6rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#00ffc3] relative translate-x-[10rem] tl:translate-x-[0] tl:left-[-15rem] ds:left-[-20rem] dl:left-[-35rem] dxl:left-[-50rem]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-3xl p:text-3xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#6fff00] to-[#00ffc3] text-transparent bg-clip-text'>Title</div>
                <div className='pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-3xl p:text-3xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#6fff00] to-[#00ffc3] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className=" p-[0.5rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[8rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                  <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem]"><BsCheck className="inline"/> feature goes here</div>
                </div>
                <div className="text-white tp:text-[1.5rem] tl:text-[1rem] dl:text-[1.8rem] pb-[0.5rem] px-[0.1rem] self-center">30 days free then $x /  month</div>
                <div className="text-center w-full cursor-pointer bg-gradient-to-b from-[#ffffffba] to-[#ffff] hover:from-gray-400 hover:to-gray-400 transition-all duration-[700ms] p-2 text-black rounded-lg text-xl font-bold tracking-wide">Start listening</div>
              </div>
            </div>


        </div>

      </div>


  )
}

export default Pricing