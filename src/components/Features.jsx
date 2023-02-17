import React, { useEffect, useRef } from 'react'

const Features = () => {


  const featuresRef = useRef()
  const cardRef = useRef()

 
  useEffect(()=>{
    setTimeout(()=>{
      const cardObserver = new IntersectionObserver(
        entries=>{
          const entry = entries[0]
          if(entry.isIntersecting){
            featuresRef.current.className = "border-0 animate-appearFromDown transition-all duration-500 ps:h-[35rem] ps:h-[35rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem] w-[99vw] relative overflow-x-scroll overflow-y-hidden"
            cardObserver.unobserve(cardRef.current)
            
          }
        },
        {threshold: 0.2})
        cardObserver.observe(cardRef.current)
    },2000)
    

  },[])


  return (

    <div ref={featuresRef} id="features" className="opacity-0 transition-all duration-1000 ps:h-[35rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  w-[99vw] relative overflow-x-visible overflow-y-hidden ">
      <div className="flex flex-row gap-[2rem] left-0  absolute pl-[30vw] pr-[2rem]">

          {/* Feature Card */}
          <div ref={cardRef} className="ps:h-[35rem] ps:w-[15rem] p:w-[20rem] p:h-[35rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                <img className=" rounded-[100%]  bg-[white]" src="./src/assets/online-world-animate.svg"/>
              </div>
              <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
              <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
          </div>

          {/* Feature Card */}
          <div className="ps:h-[35rem] ps:w-[15rem] p:w-[20rem] p:h-[35rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                <img className=" rounded-[100%]  bg-[white]" src="./src/assets/composer-music-animate.svg"/>
              </div>
              <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
              <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
          </div>

          {/* Feature Card */}
          <div className="ps:h-[35rem] ps:w-[15rem] p:w-[20rem] p:h-[35rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                <img className=" rounded-[100%]  bg-[white]" src="./src/assets/user-flow-animate.svg"/>
              </div>
              <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
              <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
          </div>

          {/* Feature Card */}
          <div className="ps:h-[35rem] ps:w-[15rem] p:w-[20rem] p:h-[35rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                <img className=" rounded-[100%]  bg-[white]" src="./src/assets/analyze-animate.svg"/>
              </div>
              <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
              <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
          </div>

          {/* Feature Card */}
          <div className="ps:h-[35rem] ps:w-[15rem] p:w-[20rem] p:h-[35rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                <img className=" rounded-[100%]  bg-[white]" src="./src/assets/rock-band-animate.svg"/>
              </div>
              <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
              <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
          </div>
          
          {/* Feature Card */}
          <div className="ps:h-[35rem] ps:w-[15rem] p:w-[20rem] p:h-[35rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                <img className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] rounded-[100%]  bg-[white]" src="./src/assets/karaoke-animate.svg"/>
              </div>
              <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
              <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
          </div>

          {/* Feature Card */}
          <div className="ps:h-[35rem] ps:w-[15rem] p:w-[20rem] p:h-[35rem] tp:w-[30rem] tp:h-[50rem] tl:h-[40rem] ds:h-[35rem] dl:h-[55rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="w-[12rem] h-[12rem] tp:w-[20rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white] overflow-visible">
                <img className=" rounded-[100%]  bg-[white]" src="./src/assets/podcast-audience-animate.svg"/>
              </div>
              <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center text-[#006FFF]'>Title</div>
              <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] p:text-[1.3rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas sed rerum molestias sit tempora ea, necessitatibus debitis maiores delectus?</div>
          </div>




      </div>
</div>



  )
}

export default Features