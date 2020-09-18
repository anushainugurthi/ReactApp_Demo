import React from 'react';
import SW1371 from './../asserts/images/SW1371.webp'
import { Carousel } from 'react-bootstrap'

const VitaminD3 = () => {
  return (
    <div>
    <Carousel>
        <Carousel.Item>
        <div class="row">
        <div class="column">
          <img className="d-block w-100" src={SW1371} alt = ""/>
        </div>
        <div class="column">
            <div >
              <span></span>
            </div>
        </div>  
    </div>  
    <br/>    
            
        
    <link rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span>(440)</span>
      <br/>
      <p className="linebreak">Swanson Premium
      <br/><strong>Vitamin D3 - Highest Potency</strong></p>
      <br/>
      
      </Carousel.Item>
      </Carousel>
      <p> 5,000 IU 250 Sgels</p>
      <br/>
      <p><strong>$10.99</strong></p>
      <button className = 'colorbutton'> add to cart </button>

    </div>


  )
}



export default VitaminD3;