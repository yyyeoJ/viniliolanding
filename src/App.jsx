import { useEffect, useRef, useState } from 'react'
import './App.css'
import Statscounter from './components/Statscounter';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Features from './components/Features';
import Sponsors from './components/Sponsors';
import Pricing from './components/Pricing';
import Albumcovers from './components/Albumcovers';


function App() {


  const [navbarOpen,setNavbarOpen] = useState(false);
  const [herobuttonClicked,setHerobuttonClicked] = useState(false);


  

// #000e21
// #006FFF
// #203147

  return (
    <div id="app" className="app overflow-x-hidden font-[Montserrat]">

        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked}/>
        <Hero  buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked}/>
        <Statscounter />
        <Features/>
        <Sponsors/>
        <Pricing />
        <Albumcovers/>
        <Sponsors/>


    </div>
  )
}

export default App