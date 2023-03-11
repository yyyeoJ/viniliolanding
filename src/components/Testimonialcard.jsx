import React from 'react'

const Testimonialcard = (props) => {
  return (
    <div className="relative ps:w-[95vw] ps:h-[30rem] tp:w-[45rem] tl:w-[40rem] dl:w-[60rem] tp:h-[25rem] tl:h-[20rem] dl:h-[30rem]  bg-gradient-to-b from-[#00204a] to-[#001229] flex flex-col items-center align-center justify-center gap-[1rem]">

        <img src="/assets/quote.png" className="ps:h-[3rem] ps:w-[3rem] tp:h-[3rem] dl:h-[5rem] tp:w-[3rem] dl:w-[5rem] absolute left-[1rem] top-[1rem]"  />
        <img src="/assets/quote.png" className="ps:h-[3rem] ps:w-[3rem] tp:h-[3rem] dl:h-[5rem] tp:w-[3rem] dl:w-[5rem] absolute right-[1rem] rotate-180 bottom-[1rem]"  />

        <img className="ps:w-[5rem] ps:h-[5rem] tp:w-[6rem] tl:w-[5rem] dl:w-[7rem] tp:h-[6rem] tl:h-[5rem] dl:h-[7rem]" src={props.user}/>
        <div className="font-bold tp:text-[1.8rem] tl:text-[1.3rem] dl:text-[2rem]">{props.userName}</div>
        <div className="w-[80%] text-center tp:text-[1.3rem] tl:text-[1rem] dl:text-[1.5rem]">{props.quote}</div>
    </div>
  )
}

export default Testimonialcard