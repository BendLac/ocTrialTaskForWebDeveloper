import React from 'react'
import OCLogo from '../resources/oc-footer-logo.png'
import Place from '../resources/oc-footer-place.png'
import Call from '../resources/oc-footer-call.png'
import Facebook from '../resources/oc-footer-facebook.png'
import Instagram from '../resources/oc-footer-instagram.png'
import Linkedin from '../resources/oc-footer-linkedin.png'
import HSAGroup from '../resources/oc-hsagroup-member-logo.png'
import Certified from '../resources/oc-certified-member-footer-logo.png'
import Copyright from '../resources/copyright-symbol.png'


function Footer() {
  return (
    <React.Fragment>
      <div className='footer-container'>
        <a target="_blank" rel="noreferrer" href='https://outclass.hu/'> <img className='footer-left' src={OCLogo} alt='footer-logo'/></a>
          <img className='footer-left' src={Call} alt='footer-call'/>
        <a target="_blank" rel="noreferrer" href='https://www.google.com/maps/place/OUTCLASS/@46.2516072,20.1416623,17z/data=!3m1!4b1!4m6!3m5!1s0x474487ed9265d321:0x9cab3eb4383e359d!8m2!3d46.2516072!4d20.143851!16s%2Fg%2F11h5q59qsq'>
          <img className='footer-left' src={Place} alt='footer-place'/>
        </a>
        <a target="_blank" rel="noreferrer" href='https://www.facebook.com/ovtclass' >
          <img className='footer-left' src={Facebook} alt='footer-facebook'/>
        </a>
        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/ovtclass/'>
          <img className='footer-left' src={Instagram} alt='footer-instagram'/>
        </a>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/company/ovtclass/'>
          <img className='footer-left' src={Linkedin} alt='footer-linkedin'/>
        </a>
        <a target="_blank" rel="noreferrer" href='https://www.hsagroup.hu/'>
          <img className='footer-right' src={HSAGroup} alt='hsagroup-member-logo'/>
        </a>
        <a target="_blank" rel="noreferrer" href='https://www.marketing.hu/'>
          <img className='footer-right' src={Certified} alt='certified-member-footer-logo'/>
        </a>
        <div className='footer-bottom'>
          <img className='footer-bottom-element' src={Copyright} alt='copyright'  width='40' height='30'/>
          <b className='footer-bottom-element'>2022 OUTCLASS Kft.</b>
          <p className='footer-bottom-element' >Minden jog fenntartva.</p>
          <p className='footer-bottom-element' >|</p>
          <p className='footer-bottom-element' >Adatkezelési tájékoztató</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer