import React from 'react';
import './App.css';
import './components/Button.css';
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter} from 'react-router-dom'
import Homecarousel from './components/Homecarousel ';
import Itemcard from './components/Itemcard';
import PromotionCard from './components/PromotionCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Homecarousel></Homecarousel>
          <h1 class="emptybackground"> </h1>
          <PromotionCard></PromotionCard>
          <Row>
            <Col className="col-12 headings">
            <h1 class="line-through "><span>You May Like</span></h1>
            </Col>
          </Row>
          <Itemcard></Itemcard>
          <hr class="line"></hr>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
