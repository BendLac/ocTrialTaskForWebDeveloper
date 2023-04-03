import React from 'react'
import slider1 from '../resources/slider-1.jpg'

function Slider() {
  return (
    <React.Fragment>
        <div className='slider-container'>
            <div className='slider-element'>
                <p className='slider-p medium'>Van aki beéri egy szelettel, de te ne legyél olyan, mint a többség.</p>
                <h1 className='black'>Vidd az egész tortát!</h1>
            </div>
            <button className='button slider-button medium'>Marketing Outsourcing</button>
            <img className='slider' src={slider1} alt='slider-1'/>
        </div>
    </React.Fragment>
  )
}

export default Slider