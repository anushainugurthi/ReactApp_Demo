import React from 'react';

import SW1613 from './../asserts/images/SW1613.webp'
import { Carousel } from 'react-bootstrap'



const TurmericBlackPepper = () => {
return (
    <div>
    <Carousel>
        <Carousel.Item>
    <div class="row">
        <div class="column">
            <img className = "d-block w-100"   src = {SW1613}      alt = ""/>
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
                <span >(238)</span>
                <br/>
                
                
          
    <p className="linebreak">Swanson Premium<br/>
    <strong>Turmeric & BlackPepper</strong></p>
        </Carousel.Item>
    </Carousel>
    <br/>
    <p> 60 Veg Caps</p>
    <br/>
    <p><c> 2 for $13.99</c></p>
    <button className = 'colorbutton'> add to cart </button>
  </div>
    
)
}

export default TurmericBlackPepper;