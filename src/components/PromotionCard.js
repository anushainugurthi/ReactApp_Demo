import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TileTurmeric from './TileTurmeric';
import TileMagnesium from './TileMagnesium';
import TilePreProbiotics from './TilePreProbiotics'

const PromotionCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
      }
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        
        <TileTurmeric></TileTurmeric>
        <TileMagnesium></TileMagnesium>
        <TilePreProbiotics></TilePreProbiotics>
        
      </Carousel>

    </div>


  )
}

export default PromotionCard;