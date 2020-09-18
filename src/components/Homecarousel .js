import React from 'react';
import { Carousel } from 'react-bootstrap'
import Hero from './../asserts/images/Hero.webp'

const Homecarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {Hero}
            alt = ""
          />

        </Carousel.Item>


      </Carousel>
    </div>


  )
}

export default Homecarousel;