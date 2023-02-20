import { useEffect, useRef, useState } from 'react'
import './App.css'
import Statscounter from './components/Statscounter';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Features from './components/Features';
import Sponsors from './components/Sponsors';
import Pricing from './components/Pricing';


function App() {


  //<a href="https://storyset.com/app">App illustrations by Storyset</a>

  /*
    Breakpoints:
        "p" :{"max":"415px"},                    Phone
        "tp" : {"min":"416px"},                  Tablet protrait/phone landscape
        "tl" : {"min":"712px","max":"1024px"},   Tablet landscape
        "ds" : {"min":"1280px","max":"1919px"},  Desktop small
        "dl" : {"min":"1920px"}                 Desktop large

  */


  

  const [navbarOpen,setNavbarOpen] = useState(false);
  const [herobuttonClicked,setHerobuttonClicked] = useState(false);

// #000e21
// #006FFF
// #203147



  return (
    <div className="app overflow-x-hidden font-[Montserrat]">

        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked}/>
        <Hero  buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked}/>
        <Statscounter />
        <Features/>
        <Sponsors/>
        <Pricing />
        <Sponsors/>


    </div>
  )
}

export default App