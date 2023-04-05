import React, { useEffect } from 'react'
import OCColorfulEmblem from '../resources/oc-colorful-emblem.png'
import $ from 'jquery';

import Emblem1 from '../resources/oc-emblem-part-1.png'
import Emblem2 from '../resources/oc-emblem-part-2.png'
import Emblem3 from '../resources/oc-emblem-part-3.png'

function About() {

  $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();

    // The emblem part 1 scroll and positioning, fading
    if (scrollTop >= 1000) {
      $(".emblem1").fadeOut();
      $(".emblem2").fadeOut();
      $(".emblem3").fadeOut();
      $(".emblem1").css({"margin-top": "1010px"}); 
      $(".emblem1").css({"transform": "rotate(0deg)"});
      $("#OCColorfulEmblem").css({"animation": "fadeInEmblem 0.5s ease-out"}); 
      $("#OCColorfulEmblem").css({"opacity": "1"}); 
    } else if (scrollTop === 0) {
      $("#OCColorfulEmblem").css({"opacity": "0"});
      $(".emblem1").fadeIn();
      $(".emblem2").fadeIn();
      $(".emblem3").fadeIn();       
      $(".emblem1").css({"margin-top": "0px"});
    } else {
      $("#OCColorfulEmblem").css({"opacity": "0"}); 
      $(".emblem1").fadeIn();
      $(".emblem2").fadeIn();  
      $(".emblem3").fadeIn();      
      $(".emblem1").css({"transform": "rotate(" + (0 + scrollTop / 2.78) + "deg)"});   
      $(".emblem1").css({"margin-top": ($(window).scrollTop()) + "px"}); 
    }
    //The emblem part 2
    if (scrollTop >= 770) {
      $(".emblem2").css({"margin-top": "770px"}); 
      $(".emblem2").css({"transform": "rotate(0deg)"}); 
    } else if (scrollTop === 0) {
      $(".emblem2").css({"margin-top": "0px"});    
    } else {
      $(".emblem2").css({"transform": "rotate(" + (0 + scrollTop / 2.5) + "deg)"});   
      $(".emblem2").css({"margin-top": ($(window).scrollTop()) + "px"});    
    }
    //The emblem part 3
    if (scrollTop >= 550) {
      $(".emblem3").css({"margin-top": "558px"}); 
      $(".emblem3").css({"transform": "rotate(0deg)"}); 
    } else if (scrollTop === 0) {
      $(".emblem3").fadeIn(); 
      $(".emblem3").css({"margin-top": "0px"});    
    } else {
      $(".emblem3").css({"transform": "rotate(" + (0 + scrollTop / 1.5) + "deg)"});   
      $(".emblem3").css({"margin-top": ($(window).scrollTop()) + "px"});    
    }
});


  /* Text box fading */
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
          <div className='oc-emblem-container'>
            <img className='oc-emblem emblem3' src={Emblem3} alt='emblem3'/>
            <img className='oc-emblem emblem2' src={Emblem2} alt='emblem2'/>
            <img className='oc-emblem emblem1' src={Emblem1} alt='emblem1'/>
          </div>
          <div className='about-grid'>
            <img id='OCColorfulEmblem' src={OCColorfulEmblem} alt='OCColorfulEmblem'/>  
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