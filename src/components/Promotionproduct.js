import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'
import TileTurmericimage from './../asserts/images/TileTurmericimage.webp'
import TileMagnesiumimage from './../asserts/images/TileMagnesiumimage.webp'
import TilePreProbioticsimage from './../asserts/images/TilePreProbioticsimage.webp'


function Promotionproduct() {

    

    return (
        <div>
            <Container>
                <Row>
                    <Col> <img
                        className="d-block w-95"
                        src={TileTurmericimage}
                        alt = ''
                    /></Col>
                    <Col> <img
                        className="d-block w-95"
                        src={TileMagnesiumimage}
                        alt = ''
                    /></Col>
                    <Col> <img
                        className="d-block w-95"
                        src={TilePreProbioticsimage}
                        alt = ''
                    /></Col>
                </Row>

            </Container>
        </div>

    );
}

export default Promotionproduct;
