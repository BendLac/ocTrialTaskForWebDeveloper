import React from 'react'
import Emblem1 from '../resources/oc-emblem-part-1.png'
import Emblem2 from '../resources/oc-emblem-part-2.png'
import Emblem3 from '../resources/oc-emblem-part-3.png'
import Flextime from '../resources/flextime-bg.jpg'
import MarketingDiamond from '../resources/oc-marketing-diamond.png'
import EvHonlapja from '../resources/oc-az-ev-honlapja.png'

function Awards() {
  return (
    <div className='awards'>
      <div className='.awards-container '>
        <img className='awards-emblem2' src={Emblem2} alt='emblem2'/>
        <img className='awards-emblem1' src={Emblem1} alt='emblem1'/>
        <img className='awards-emblem3' src={Emblem3} alt='emblem3'/>
        <div className='awards-grid-container'>
          <div>
            <img className='flextime' src={Flextime} alt='Flextime'/>
          </div>
          <div className='flextime-text'>
            <p>#flextime</p>
            <h1 className='black'>Lorem ipsum <br/> Flexelés</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='awards-bottom awards-bottom-left'>
            <a href='https://damsz.hu/' target="_blank" rel="noreferrer">
             <img src={EvHonlapja} alt='EvHonlapja'/>
            </a>
            <div className='awards-info'>
              <h3 className='black'>Az év honlapja</h3>
              <p>2021, 2022 - damsz.hu <br/> Egyszerű, Rugalmas, Naprakész</p>
            </div>
          </div>
          <div className='awards-bottom'>
            <a href='https://marketingdiamond.hu/korabbi-marketing-awards-dijazottjaink' target="_blank" rel="noreferrer">
              <img src={MarketingDiamond} alt='MarketingDiamond' />
            </a>
            <a href='https://alfold.melodiak.hu/valmar/' target="_blank" rel="noreferrer">
              <div className='awards-info'>
                <h3 className='black'>Marketing Diamond</h3>
                <p>2022 - MELÓ - DIÁK presents: <br/> Valmar X Astronaut</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards