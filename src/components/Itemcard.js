import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VitaminD3 from './VitaminD3';
import ZincPicolinate from './ZincPicolinate';
import Ultimate16 from './Ultimate16';
import DeliveryInsurance from './DeliveryInsurance';
import TurmericBlackPepper from './TurmericBlackPepper';


const Itemcard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        
        <VitaminD3></VitaminD3>
        <ZincPicolinate></ZincPicolinate>
        <Ultimate16></Ultimate16>
        <DeliveryInsurance></DeliveryInsurance>
        <TurmericBlackPepper></TurmericBlackPepper>
      </Carousel>
        
    </div>


  )
}

export default Itemcard;