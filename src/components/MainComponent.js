import React from 'react'
import Footer from './FooterComponent'
import Slider from './SliderComponent'
import NavigationBar from './NavigationBar'



function MainComponent() {
  return (
    <React.Fragment>
        <NavigationBar/>
        <Slider/>
        <div>MainComponent</div>
        <Footer/>
    </React.Fragment>
  )
}

export default MainComponent