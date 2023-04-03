import React from 'react'
import slider1 from '../resources/slider-1.jpg'

function Slider() {
  return (
    <React.Fragment>
        <div>Slider</div>
        <img className='slider' src={slider1} alt='slider-1'/>
    </React.Fragment>
  )
}

export default Slider