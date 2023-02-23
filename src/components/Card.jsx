import React from 'react'

const Card = (props) => {
  return (
   
    <div ref={props.refprop} className="snap-center ps:h-[35rem] ps:w-[91vw] p:h-[34rem] tp:w-[27rem] tp:h-[50rem] tl:h-[43rem]  ds:h-[38rem] ds:w-[24rem] dl:h-[55rem] dl:w-[37rem] dxl:w-[30rem] will-change-transform  flex flex-col items-center  bg-gradient-to-b from-[#1d3c68] to-[#102139]   rounded-[1.5rem]">
        <img className="w-[12rem] h-[12rem] tp:w-[19rem] tp:h-[20rem] tl:h-[15rem] tl:w-[15rem] ds:w-[14rem] ds:h-[14rem] dl:w-[25rem] dl:h-[25rem] mt-[2rem] rounded-full bg-[white]" src={props.image}/>
        <div className='ps:text-3xl p:text-3xl tp:text-[3rem] tl:text-[2.5rem] ds:text-[2rem] dl:text-[3rem] pt-[1rem] font-bold text-center bg-gradient-to-r from-[#006FFF] to-[#00bbff] text-transparent bg-clip-text'>{props.title}</div>
        <div className="text-white px-[2rem] pt-[2rem] ps:text-[1.1rem] tp:text-[1.95rem] tl:text-[1.8rem] ds:text-[1.5rem] dl:text-[1.8rem] ">{props.text}</div>
    </div>



  )
}

export default Card