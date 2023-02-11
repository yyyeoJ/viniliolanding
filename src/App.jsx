import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'


function App() {

  const [navbarOpen,setNavbarOpen] = useState(false);

  return (
    <div className={navbarOpen ? "App h-screen bg-black overflow-y-hidden lg:overflow-y-visible" : "App h-screen bg-black"}>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <div className="h-[200vh]">asd</div>
    </div>
  )
}

export default App
