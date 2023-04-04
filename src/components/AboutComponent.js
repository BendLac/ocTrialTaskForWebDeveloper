import React from 'react'
import OCColorfulEmblem from '../resources/oc-colorful-emblem.png'

import Emblem1 from '../resources/oc-emblem-part-1.png'
import Emblem2 from '../resources/oc-emblem-part-2.png'
import Emblem3 from '../resources/oc-emblem-part-3.png'

function About() {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

  return (
    <React.Fragment>
      <div className='about'>
        <div className='about-container'>
          {/* <img classname='oc-emblem' src={Emblem1} alt='emblem1'/>
          <img classname='oc-emblem' src={Emblem2} alt='emblem2'/>
          <img classname='oc-emblem' src={Emblem3} alt='emblem3'/> */}
          <div className='about-grid'>
            <img className='OCColorfulEmblem' src={OCColorfulEmblem} alt='OCColorfulEmblem'/>  
            <div className='about-text-container reveal fade-right'>
              <p className='medium'>#Certified member of Hungarian Marketing Association?!</p>
              <h1 className='about-text black'>Ezek vagyunk mi</h1>
              <p className='medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='about-button-container'>                
                <button className='button blue-button'>Rólunk</button>
                <button className='button-rounded blue-button'>Referenciáink</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About