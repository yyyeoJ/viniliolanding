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
            featuresRef.current.className = "animate-appearFromDown transition-all duration-500 h-[100rem] w-[99vw] relative overflow-x-scroll overflow-y-hidden"
            console.log("intersecting")
            cardObserver.unobserve(cardRef.current)
            
          }
        },
        {threshold: 0.2})
        cardObserver.observe(cardRef.current)
    },2000)
    

  },[])


  return (

    <div ref={featuresRef} className="opacity-0 transition-all duration-1000 h-[100rem] w-[99vw] relative overflow-x-scroll overflow-y-hidden ">
      <div className="flex flex-row gap-[2rem] left-0 top-[10rem] absolute pl-[30vw] pr-[5rem]">
          {/* Feature Card */}
          <div ref={cardRef} className=" h-[62rem] w-[30rem] flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="-[25em] mt-[2rem] rounded-full bg-[white] overflow-hidden">
                <img className="w-[25em] mt-[2rem] rounded-full bg-[white] relative" src="./src/assets/online-world-animate.svg"/>
              </div>
              <div className='text-5xl pt-[2rem] font-bold text-[#006FFF]'>Title</div>
              <div className="text-white px-5 pt-[2rem] text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo minus repellat nam, mollitia ea quaerat. Tempore quisquam explicabo inventore incidunt eveniet eos similique ipsa molestiae nam dolorem aliquam totam quaerat delectus molestias, praesentium quae temporibus consequatur esse quia. Exercitationem cumque atque ducimus corporis recusandae, tempore consectetur voluptas dolorem odit!</div>
          </div>

          {/* Feature Card */}
          <div className="h-[62rem] w-[30rem] flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="-[25em] mt-[2rem] rounded-full bg-[white] overflow-hidden">
                <img className="w-[25rem] mt-[2rem] rounded-[100%]  bg-[white]" src="./src/assets/rock-band-animate.svg"/>
              </div>
              <div className='text-5xl pt-[2rem] font-bold text-[#006FFF]'>Title</div>
              <div className="text-white px-5 pt-[2rem] text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo minus repellat nam, mollitia ea quaerat. Tempore quisquam explicabo inventore incidunt eveniet eos similique ipsa molestiae nam dolorem aliquam totam quaerat delectus molestias, praesentium quae temporibus consequatur esse quia. Exercitationem cumque atque ducimus corporis recusandae, tempore consectetur voluptas dolorem odit!</div>
          </div>

          {/* Feature Card */}
          <div className="h-[62rem] w-[30rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="-[25em] mt-[2rem] rounded-full bg-[white] overflow-hidden">
                <img className="w-[25rem] mt-[2rem] rounded-[100rem]  bg-[white]" src="./src/assets/composer-music-animate.svg"/>
              </div>
              <div className='text-5xl pt-[2rem] font-bold text-[#006FFF]'>Title</div>
              <div className="text-white px-5 pt-[2rem] text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo minus repellat nam, mollitia ea quaerat. Tempore quisquam explicabo inventore incidunt eveniet eos similique ipsa molestiae nam dolorem aliquam totam quaerat delectus molestias, praesentium quae temporibus consequatur esse quia. Exercitationem cumque atque ducimus corporis recusandae, tempore consectetur voluptas dolorem odit!</div>
          </div>

          {/* Feature Card */}
          <div className="h-[62rem] w-[30rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="-[25em] mt-[2rem] rounded-full bg-[white] overflow-hidden">
                <img className="w-[25rem] mt-[2rem] rounded-[100rem]  bg-[white]" src="./src/assets/user-flow-animate.svg"/>
              </div>
              <div className='text-5xl pt-[2rem] font-bold text-[#006FFF]'>Title</div>
              <div className="text-white px-5 pt-[2rem] text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo minus repellat nam, mollitia ea quaerat. Tempore quisquam explicabo inventore incidunt eveniet eos similique ipsa molestiae nam dolorem aliquam totam quaerat delectus molestias, praesentium quae temporibus consequatur esse quia. Exercitationem cumque atque ducimus corporis recusandae, tempore consectetur voluptas dolorem odit!</div>
          </div>

          {/* Feature Card */}
          <div className="h-[62rem] w-[30rem]  flex flex-col items-center  bg-[#203147] shadow-black shadow-md rounded-[1.5rem]">
              <div className="-[25em] mt-[2rem] rounded-full bg-[white] overflow-hidden">
              <img   className="w-[25rem] mt-[2rem] rounded-[100rem] relative  bg-[white] right-[2.5vw]" src="./src/assets/analyze-animate.svg"/>
              </div>
              <div className='text-5xl pt-[2rem] font-bold text-[#006FFF]'>Title</div>
              <div className="text-white px-5 pt-[2rem] text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo minus repellat nam, mollitia ea quaerat. Tempore quisquam explicabo inventore incidunt eveniet eos similique ipsa molestiae nam dolorem aliquam totam quaerat delectus molestias, praesentium quae temporibus consequatur esse quia. Exercitationem cumque atque ducimus corporis recusandae, tempore consectetur voluptas dolorem odit!</div>
          </div>

      </div>
</div>



  )
}

export default Features