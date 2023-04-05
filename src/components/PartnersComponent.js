import React from 'react'
import FerrariLogo from '../resources/ferrari-logo.png'
import LamborghiniLogo from '../resources/lamborghini-logo.png'
import JackLogo from '../resources/jack-daniel-logo.png'
import ToyotaLogo from '../resources/toyota-logo.png'

function Partners() {
  return (
    <React.Fragment>
      <div className='partners-container'>
        <div className='partners-text-container'>
          <h1 className='black'>Ők minket választottak</h1>
          <p className='medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='partners-images'>
          <div className='partners-slider'>
            <div className='partners-slider-item'>
              <img className='ferrari' src={FerrariLogo} alt='FerrariLogo'/>  
            </div>
            <div className='partners-slider-item'>
              <img className='lambo' src={LamborghiniLogo} alt='LamborghiniLogo'/>
            </div>
            <div className='partners-slider-item'>
              <img className='jack' src={JackLogo} alt='JackLogo'/>
            </div>
            <div className='partners-slider-item'>
              <img className='toyota' src={ToyotaLogo} alt='ToyotaLogo'/>
            </div>
          </div>
        </div>
        <button className='button-rounded partners-button medium'>Ajánlat kérés</button>
      </div>
    </React.Fragment>

  )
}

export default Partners