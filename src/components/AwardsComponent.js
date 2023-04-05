import React from 'react'
import Emblem1 from '../resources/oc-emblem-part-1.png'
import Emblem2 from '../resources/oc-emblem-part-2.png'
import Emblem3 from '../resources/oc-emblem-part-3.png'
import Flextime from '../resources/flextime-bg.jpg'

function Awards() {
  return (
    <div className='awards-container'>
      <div className='.awards-emblem '>
        <img className='flextime' src={Flextime} alt='Flextime'/>
        <img className='awards-emblem2' src={Emblem2} alt='emblem2'/>
        <img className='awards-emblem1' src={Emblem1} alt='emblem1'/>
        <img className='awards-emblem3' src={Emblem3} alt='emblem3'/>
      </div>
    </div>
  )
}

export default Awards