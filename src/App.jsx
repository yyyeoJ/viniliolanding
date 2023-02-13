import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar'


function App() {


  //<a href="https://storyset.com/app">App illustrations by Storyset</a>

  const [navbarOpen,setNavbarOpen] = useState(false);

  return (
    <div className={navbarOpen ? "App bg-[#001229] fixed lg:relative w-full" : "App bg-[#001229]"}>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <Hero navbarOpen={navbarOpen} /> 
        
    </div>
  )
}

export default App