import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar'


function App() {

  const [navbarOpen,setNavbarOpen] = useState(false);

  return (
    <div className={navbarOpen ? "App bg-[#001229] fixed lg:relative w-full" : "App bg-[#001229]"}>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <Hero /> 
        <div className="text-white">asd</div>
        
    </div>
  )
}

export default App