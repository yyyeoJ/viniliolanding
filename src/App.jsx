import { useEffect, useRef, useState } from 'react'
import './App.css'
import Statscounter from './components/Statscounter';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Features from './components/Features';
import Sponsors from './components/Sponsors';
import Pricing from './components/Pricing';
import Albumcovers from './components/Albumcovers';
import Devices from './components/Devices';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import Contactus from './components/Contactus';
import ImageSlider from './components/ImageSlider';
import Testimonialcard from './components/Testimonialcard';


function App() {

  const [navbarOpen,setNavbarOpen] = useState(false);
  const [herobuttonClicked,setHerobuttonClicked] = useState(false);
  const appRef = useRef()
  
  const heroRef = useRef()

  

// #000e21
// #1d3c68
// #006FFF
// #203147


  return (
    <div id="app" ref={appRef} className="app overflow-x-hidden font-[Montserrat] bg-[#000e21]">

        <Navbar appRef={appRef} heroRef={heroRef} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked}/>
        <Hero heroRef={heroRef} buttonClicked={herobuttonClicked} setButtonClicked={setHerobuttonClicked}/>
        <Statscounter/>
        <Features/>
        <Sponsors/>
        <Pricing id="pricing"/>
        <Albumcovers appRef={appRef}/>
        <Devices />
        <Testimonial />
        <Faq />
        <Contactus />

        

    </div>
  )
}

export default App