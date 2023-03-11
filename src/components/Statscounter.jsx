import React, { useEffect, useRef, useState } from 'react'

const Statscounter = React.memo((props) => {

  const counterRef = useRef()
  const songsRef = useRef();
  const artistsRef = useRef();
  const genresRef = useRef();
  const playlistRef = useRef();


  const [songs,setSongs] = useState(70)
  const [artists,setArtists] = useState(0)
  const [genres,setGenres] = useState(0)
  const [playlists,setPlaylists] = useState(0)


  useEffect(()=>{
    setTimeout(()=>{
      const counterObserver = new IntersectionObserver(
        entries=>{
          const entry = entries[0]
          if(entry.isIntersecting){
            counterRef.current.className = "opacity-100 transition-all duration-1000 flex flex-col tl:flex-row items-center gap-[1rem] dl:gap-[3rem] w-[90vw] justify-center flex-wrap text-white font-bold"
            setTimeout(() => {
              countUp()
              songsRef.current.className =   "ds:hover:scale-[105%] opacity-100 animate-appearFromLeft  tp:animate-appearFromDown transition-all duration-100 flex flex-row tp:flex-col justify-center align-center items-center bg-gradient-to-b from-[#1d3c68] to-[#102139] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"
            }, 500);
            setTimeout(() => {
              artistsRef.current.className = "ds:hover:scale-[105%] opacity-100 animate-appearFromRight tp:animate-appearFromDown transition-all duration-100 flex flex-row tp:flex-col justify-center align-center items-center bg-gradient-to-b from-[#1d3c68] to-[#102139] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"
              
            }, 650);
            setTimeout(() => {
              genresRef.current.className =  "ds:hover:scale-[105%] opacity-100 animate-appearFromLeft  tp:animate-appearFromDown transition-all duration-100 flex flex-row tp:flex-col justify-center align-center items-center bg-gradient-to-b from-[#1d3c68] to-[#102139] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"
              
            }, 800);
            setTimeout(() => {
              playlistRef.current.className ="ds:hover:scale-[105%] opacity-100 animate-appearFromRight tp:animate-appearFromDown transition-all duration-100 flex flex-row tp:flex-col justify-center align-center items-center bg-gradient-to-b from-[#1d3c68] to-[#102139] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"
              counterObserver.unobserve(genresRef.current)
              
            }, 950);
            
            
          }
        },
        {threshold: 1})
        counterObserver.observe(genresRef.current)
    },1000)
    

  },[])

  function countUp(){
    let i = 0
    let songs = 50
    let artists = 3
    let genres = 0
    let playlists = 600
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

    <div id="features" className="w-[99vw] pb-[20vh] pt-[31.5vh] bg-[#000e21] border-0 border-blue-500 flex flex-col items-center">

      <div    ref={counterRef} className="opacity-0 transition-all flex flex-col tl:flex-row gap-[1rem] dl:gap-[3rem] w-[90vw] justify-center items-center flex-wrap text-white font-bold">

          <div className="flex flex-col tp:flex-row gap-[1rem] dl:gap-[3rem]">
            <div    ref={songsRef} className="opacity-0 transition-all duration-100 flex flex-row tp:flex-col justify-center items-center bg-gradient-to-b from-[#1d3c68] to-[#102139] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"><div className="text-4xl dl:text-6xl">{songs}M+</div><div className="   text-3xl dl:text-4xl">Songs</div></div>
            <div  ref={artistsRef} className="opacity-0 transition-all duration-100 flex flex-row tp:flex-col justify-center items-center bg-gradient-to-b from-[#1d3c68] to-[#203147] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"><div className="text-4xl dl:text-6xl">{artists}M+</div><div className=" text-3xl dl:text-4xl">Artists</div></div>
          </div>

          <div className="flex flex-col tp:flex-row gap-[1rem] dl:gap-[3rem]">
            <div   ref={genresRef} className="opacity-0 transition-all duration-100 flex flex-row tp:flex-col justify-center items-center bg-gradient-to-b from-[#1d3c68] to-[#203147] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"><div className="text-4xl dl:text-6xl">{genres}+</div><div className="   text-3xl dl:text-4xl">Genres</div></div>
            <div ref={playlistRef} className="opacity-0 transition-all duration-100 flex flex-row tp:flex-col justify-center items-center bg-gradient-to-b from-[#1d3c68] to-[#203147] w-[17rem] tl:w-[11rem] dl:w-[17rem] dl:p-[4rem] shadow-black shadow-md p-[2rem] rounded-xl"><div className="text-4xl dl:text-6xl">{playlists}+</div><div className="text-3xl dl:text-4xl">Playlists</div></div>
          </div>

      </div>
    </div>
  )
})

export default Statscounter