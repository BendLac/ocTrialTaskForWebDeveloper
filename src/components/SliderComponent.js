import React from 'react'
import slider1 from '../resources/slider-1.jpg'
import slider2 from '../resources/slider-2.jpg'

function Slider() {
  // let slideIndex = 0;
  // showSlides();

  return (
    <React.Fragment>
      <div className='slider'>
        <div className='slider-container slider-fade'>
            <div className='slider-element'>
              <p className='slider-p medium'>Van aki beéri egy szelettel, de te ne legyél olyan, mint a többség.</p>
              <h1 className='black'>Vidd az egész tortát!</h1>
              <button className='button-rounded slider-button medium'>Marketing Outsourcing</button>
            </div>
            {/* <img className='slider' src={slider1} alt='slider-1'/> */}
        </div>
        {/* <div className='slider-container slider-fade'>
            <div className='slider-element'>
              <p className='slider-p medium'>lorem ipsum</p>
              <h1 className='black'>Vidd!</h1>
              <button className='button-rounded slider-button medium'>asd</button>
            </div>
            <img className='slider' src={slider2} alt='slider2'/>
        </div> */}
      </div>
    </React.Fragment>
  )

  

  // function showSlides() {
  //   let i;
  //   let slides = document.getElementsByClassName("slider-container");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}
  //   document.addEventListener("DOMContentLoaded", function () {
  //     slides[slideIndex-1].style.display = "block";
  //   });
  //   setTimeout(showSlides, 8000); // Change image every 10 seconds
  // }



}

export default Slider