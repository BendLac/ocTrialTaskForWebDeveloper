import React from 'react'
import Footer from './FooterComponent'
import Slider from './SliderComponent'
import About from './AboutComponent'
import Services from './ServicesComponent'
import OurWork from './OurWorkComponent'
import Partners from './PartnersComponent'
import Awards from './AwardsComponent'



function MainComponent() {
  return (
    <React.Fragment>
        <Slider/>
        <About/>
        <Services/>
        <OurWork/>
        <Partners/>
        <Awards/>
        <Footer/>
    </React.Fragment>
  )
}

export default MainComponent