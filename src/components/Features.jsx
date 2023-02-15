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
          counterRef.current.className = "animate-appearFromDown py-[10vh] opacity-100 transition-all duration-1000 flex flex-row gap-[2rem] w-[100vw] justify-center flex-wrap text-white font-bold"
          counterObserver.unobserve(counterRef.current)
          countUp()
          
        }
      },
      {threshold:0.8})

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

    <div className="w-[100vw] bg-[#000e21] border-0 border-blue-500 flex flex-col items-center">

      <div ref={counterRef} className="py-[10vh] opacity-0 transition-all duration-10 x00 flex flex-row gap-[2rem] w-[100vw] justify-center flex-wrap text-white font-bold">
        <div className="flex flex-col justify-center items-center bg-[#203147] w-[15rem] shadow-black shadow-md p-[4rem] rounded-xl"><div className="text-6xl">{songs}M+</div><div className="text-3xl">Songs</div></div>
        <div className="flex flex-col justify-center items-center bg-[#203147] w-[15rem] shadow-black shadow-md p-[4rem] rounded-xl"><div className="text-6xl">{artists}M+</div><div className="text-3xl">Artists</div></div>
        <div className="flex flex-col justify-center items-center bg-[#203147] w-[15rem] shadow-black shadow-md p-[4rem] rounded-xl"><div className="text-6xl">{genres}+</div><div className="text-3xl">Genres</div></div>
        <div className="flex flex-col justify-center items-center bg-[#203147] w-[15rem] shadow-black shadow-md p-[4rem] rounded-xl"><div className="text-6xl">{playlists}+</div><div className="text-3xl">Playlists</div></div>
        
      </div>
    </div>
  )
}

export default Features