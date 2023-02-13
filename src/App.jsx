import { useState } from 'react'
import './App.css'
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar'


function App() {


  //<a href="https://storyset.com/app">App illustrations by Storyset</a>

  const [navbarOpen,setNavbarOpen] = useState(false);
  const [herobuttonClicked,setHerobuttonClicked] = useState(false);

  return (
    <div className={navbarOpen ? "App bg-[#001229] fixed lg:relative w-full" : "App bg-[#001229]"}>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked}/>
        <Hero navbarOpen={navbarOpen} buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked} /> 
        <Features />
        
    </div>
  )
}

export default App