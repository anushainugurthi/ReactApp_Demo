import React from 'react';

import DELIVERYINS01 from './../asserts/images/DELIVERYINS01.webp'
import { Carousel } from 'react-bootstrap'

const DeliveryInsurance = () => {
return (
    <div>
    <Carousel>
        <Carousel.Item>
        <div class="row">
        <div class="column">
          <img  className = "d-block w-100"   src = {DELIVERYINS01}  alt = ""/>
        </div>
        <div class="column">
            <div>
              <span></span>
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
      <span class="fa fa-star checked"></span>
    <span >(78)</span>
    <p className="linebreak">Swanson Health Products, Inc.<br/>
    <strong>DELIVERY INSURANCE</strong></p>
    <br/>
    <br/>
    </Carousel.Item>
    </Carousel>
    <p></p>
    <br/>
    <p><strong> $1.00 </strong></p>
    <button className = 'colorbutton'> add to cart </button>
  </div>
    
)
}

export default DeliveryInsurance;