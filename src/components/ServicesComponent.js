import React from 'react'
import DesignEmblem from '../resources/oc-icon-design.svg'
import CodingEmblem from '../resources/oc-icon-coding.svg'
import SocialEmblem from '../resources/oc-icon-social.svg'

function Services() {
  return (
    <React.Fragment>
      <div className='services-container'>
        <div className='services-upper-container'>
          <div className='services-grid'>
            <div className='services-text-container'>
              <h1 className='black'>Minden, <br/> ami marketing</h1>
              <p className='medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='services-icons'>
              <img className='services-icon-active' src={DesignEmblem} alt='designEmblem'/>

            </div>
          </div>
          <div className='services-dynamic'>
            <div className=''>
              <h1 className='black service-dynamic-header'>Design</h1>
              <p className='medium service-dynamic-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='button-rounded arrow-button white-arrow-button'></button>  
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Services