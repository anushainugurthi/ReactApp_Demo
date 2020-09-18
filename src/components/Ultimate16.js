import React from 'react';
import SWA051 from './../asserts/images/SWA051.webp'
import { Carousel } from 'react-bootstrap'


const Ultimate16 = () => {
    return (
        <div>
        <Carousel>
        <Carousel.Item>
      <div class="row">
          <div class="column">
            <img className = "d-block w-100" src = {SWA051}  alt = ""/>
          </div>
          <div class="column">
            <div class="offerflag">
              <span class ="offerflag">BOGO</span>
            </div>
          </div>
      </div>
      <br/>

         <link rel="stylesheet" 
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         <link rel="stylesheet" 
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star-half-full checked"></span>
         <span> (823)</span>
         <br/>
        <p className="linebreak">Swanson Probiotics
    <br/><strong>Dr.Stephen Langer's Ultimate 16 Strain Proboitic with FOS</strong></p>
    </Carousel.Item>
    </Carousel>
    <p> 3.2 Billion CFU 60 Veg Drcaps</p>
    <br/>
    <p><c> 2 for $14.79</c></p>
    <button className = 'colorbutton'> add to cart </button>
  </div>
    
)
}

export default Ultimate16;