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
            title.current.className = "animate-appearFromDown transition-all pt-[5rem] duration-[700ms] ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] ds:pb-[5rem] font-bold  bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]"
          }
        },
        {threshold: 1})
        titleObserver.observe(title.current)

        const priceObserver = new IntersectionObserver(
          entries=>{
            const entry = entries[0]
            if(entry.isIntersecting){
              setTimeout(() => {
                
                price1.current.className = "translate-x-[10rem] tp:translate-x-[0] tl:opacity-100 transition-all duration-500 ps:w-[17rem] p:w-[20rem] p:h-[2rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]  relative tl:left-[0rem] ds:left-[2rem] dl:left-[0rem] dxl:left-[10rem]"
                price3.current.className = "translate-x-[10rem] tp:translate-x-[0] opacity-0 tl:opacity-100 transition-all duration-500 ps:w-[17rem] p:w-[20rem] p:h-[2rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#00ffc3] relative  tl:left-[0rem] ds:left-[-2rem] dl:left-[0rem] dxl:left-[-10rem]"
              }, 500);
              priceObserver.unobserve(container.current)
              
              container.current.className = "transition-all duration-[700ms] tl:animate-appearFromDown w-[100vw] tp:h-full tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] pb-[0rem] flex flex-col tl:flex-row justify-center items-center tp:gap-[1rem] tl:gap-0 ds:gap-[1rem] relative"
            }
          },
          {threshold: 0.55})
          priceObserver.observe(container.current)

          const price1Observer = new IntersectionObserver(
            entries=>{
              const entry = entries[0]
              if(entry.isIntersecting){
                setTimeout(() => {
                price1.current.className = "translate-x-[0rem] tp:translate-x-[0]  ps:opacity-100  tl:opacity-100 transition-all duration-500 ps:w-[17rem] p:w-[20rem] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]  relative tl:left-[0rem] ds:left-[2rem] dl:left-[0rem] dxl:left-[10rem]"
                  price1Observer.unobserve(price1.current)
                  

                }, 600);
              }
            },
            {threshold: 0.55})
            price1Observer.observe(price1.current)

            const price2Observer = new IntersectionObserver(
              entries=>{
                const entry = entries[0]
                if(entry.isIntersecting){
                  setTimeout(() => {
                    price2Observer.unobserve(price2.current)
                    price2.current.className = "translate-x-[0]  ps:opacity-100  tl:opacity-100 transition-all duration-[700ms] ps:w-[17rem] p:w-[20rem] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.5rem] rounded-[1.6rem] bg-gradient-to-r from-[#006FFF] to-[#00bbff] z-20 relative"
                  
                  }, 500);
                }
              },
              {threshold: 0.55})
              price2Observer.observe(price2.current)

              const price3Observer = new IntersectionObserver(
                entries=>{
                  const entry = entries[0]
                  if(entry.isIntersecting){
                    setTimeout(() => {
                      price3.current.className = "translate-x-[0rem] tp:translate-x-[0] ps:opacity-100  tl:opacity-100 transition-all duration-500 ps:w-[17rem] p:w-[20rem] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#00ffc3] relative  tl:left-[0rem] ds:left-[-2rem] dl:left-[0rem] dxl:left-[-10rem]"
                      price3Observer.unobserve(price2.current)
                      


                    },600);
                  }
                },
                {threshold: 0.55})
                price3Observer.observe(price3.current)


            


    },1000)
    
  
  },[])
  


  return (
      //Main container
      <div className="flex-col ">
        {/* Title */}
        <div ref={title} className="opacity-0 transition-all duration-[700ms] pt-[5rem] ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] ds:pb-[5rem] font-bold  bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text text-center text-[3rem] ps:text-[2.5rem] tp:text-[5rem] tl:text-[3rem] dl:text-[5.5rem]">Pricing & Plans</div>
        {/* Cards container */}
        <div ref={container} className="transition-all duration-[700ms] opacity-100 tl:opacity-0 w-[100vw] h-full tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] pb-[0rem] flex flex-col tl:flex-row justify-center items-center gap-[1rem] tl:gap-0  ds:gap-[1rem] relative">
        
            {/* Price1 */}
            <div ref={price1} className="ps:opacity-0 tl:opacity-100 transition-all duration-[700ms] ps:w-[17rem] p:w-[20rem] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#ff006f] to-[#ff9000]   relative p:translate-x-[10rem] tp:translate-x-[0] tl:left-[15rem] ds:left-[20rem] dl:left-[35rem] dxl:left-[50rem]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem] font-semibold bg-gradient-to-r from-[#ff006f] to-[#ff9000] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className=" p-[0.55rem]  ps:mb-[5rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
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

            {/* Price2 */}
            <div ref={price2} className="ps:opacity-0 tl:opacity-100 transition-all duration-[700ms] ps:w-[17rem] p:w-[20rem] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#006FFF] to-[#00bbff] z-20 relative p:translate-x-[-10rem] tp:translate-x-[0]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>Subtitle goes here</div>
                <div className="p-[0.5rem]  ps:mb-[5rem] tp:mb-[6rem] tl:mb-[6rem] ds:mb-[1rem] dl:mb-[6rem] w-full bg-gradient bg-gradient-to-b from-[#1d3c68] to-[#102139] rounded-[1rem]">
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

            {/* Price3 */}
            <div ref={price3} className="ps:opacity-0 tl:opacity-100 transition-all duration-[700ms] ps:w-[17rem] p:w-[20rem] ps:h-[35rem] tp:w-[35rem] tl:w-[20rem] ds:w-[24rem] dl:w-[35rem] tp:h-[45rem] tl:h-[35rem] ds:h-[30rem] dl:h-[50rem] mx-auto p-[0.55rem] rounded-[1.6rem] bg-gradient-to-r from-[#6fff00] to-[#00ffc3] relative p:translate-x-[10rem] tp:translate-x-[0] tl:left-[-15rem] ds:left-[-20rem] dl:left-[-35rem] dxl:left-[-50rem]">
              <div className="h-full relative  flex flex-col items-start px-[2rem] pt-[1rem]  bg-gradient-to-b from-[#122743] to-[#0b182a] rounded-[1rem]">
                <div className='pb-[1rem]  w-full ps:text-4xl p:text-5xl tp:text-[4rem] tl:text-[2.2rem] ds:text-[3rem] dl:text-[4rem] pt-[1rem] font-bold bg-gradient-to-r from-[#6fff00] to-[#00ffc3] text-transparent bg-clip-text'>Title</div>
                <div className='ps:pb-[2rem] tp:pb-[5rem] tl:pb-[1rem] dl:pb-[5rem] w-full ps:text-xl p:text-2xl tp:text-[2rem] tl:text-[1.3rem] ds:text-[1.5rem] dl:text-[2.5rem]  font-semibold bg-gradient-to-r from-[#6fff00] to-[#00ffc3] text-transparent bg-clip-text'>Subtitle goes here</div>
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