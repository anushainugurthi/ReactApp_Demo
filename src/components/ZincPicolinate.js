import React from 'react';
import SW1113 from './../asserts/images/SW1113.webp'
import { Carousel } from 'react-bootstrap'

const ZincPicolinate = () => {
return (
    <div>
    <Carousel>
        <Carousel.Item>

        <div class="row">
        <div class="column">
          <img  className = "d-block w-100"   src = {SW1113}  alt = ""/>
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
      <span >(95)</span>
      <br/>
    <p className="linebreak">Swanson Premium<br/>
    <strong>Zinc Picolinate - Body Preferred Form</strong></p>
    
    </Carousel.Item>
    </Carousel>
    <p> 22 mg 60 Caps</p>
    <br/>
    <p><strong> $2.59</strong></p>
    <button className = 'colorbutton'> add to cart </button>
  </div>
    
)
}

export default ZincPicolinate;