import React, { useEffect, useRef, useState } from 'react'

const Features = () => {


  const counterRef = useRef();


  const [songs,setSongs] = useState(70)
  const [artists,setArtists] = useState(0)
  const [genres,setGenres] = useState(0)
  const [playlists,setPlaylists] = useState(0)


  useEffect(()=>{
    const counterObserver = new IntersectionObserver(
      entries=>{
        const entry = entries[0]
        if(entry.isIntersecting){
          counterRef.current.className = "h-screen animate-appearFromDown opacity-100 transition-all duration-700 flex flex-row gap-[1rem] w-[80vw] justify-center flex-wrap text-white font-bold pt-[5rem]"
          counterObserver.unobserve(counterRef.current)
          countUp()
          
        }
      },
      {threshold:0.6})

    counterObserver.observe(counterRef.current)
  },[])

  function countUp(){
    let i = 0
    let songs = 50
    let artists = 3
    let genres = 0
    let playlists = 800
    let interval = setInterval(() => {
      if(songs<80){
        songs++
        setSongs(songs)
      }
      if(artists<11){
        artists+=0.3
        setArtists(Math.round(artists))
      }
      if(genres<30){
        genres+=1
        setGenres(Math.round(genres))
      }
      if(playlists<3000){
        playlists += 100
        setPlaylists(Math.round(playlists))
      }


      if(i === 80){clearInterval(interval)}
    }, 60);
  }

  return (

    <div className="w-[100vw] bg-[#001229] border-4 border-blue-500 flex flex-col items-center">

      <div ref={counterRef} className="h-screen opacity-0 transition-all duration-500 flex flex-row gap-[1rem] w-[80vw] justify-center flex-wrap text-white font-bold pt-[5rem]">
        <div className="flex flex-row justify-center items-center bg-[#203147] w-[12rem] shadow-black shadow-md p-[2rem] rounded-lg"><div className="text-4xl">{songs}M+</div><div className="text-xl">Songs</div></div>
        <div className="flex flex-row justify-center items-center bg-[#203147] w-[12rem] shadow-black shadow-md p-[2rem] rounded-lg"><div className="text-4xl">{artists}M+</div><div className="text-xl">Artists</div></div>
        <div className="flex flex-row justify-center items-center bg-[#203147] w-[12rem] shadow-black shadow-md p-[2rem] rounded-lg"><div className="text-4xl">{genres}+</div><div className="text-xl">Genres</div></div>
        <div className="flex flex-row justify-center items-center bg-[#203147] w-[12rem] shadow-black shadow-md p-[2rem] rounded-lg"><div className="text-4xl">{playlists}+</div><div className="text-xl">Playlists</div></div>
        
      </div>
    </div>
  )
}

export default Features