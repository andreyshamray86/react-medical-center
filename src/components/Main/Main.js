import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Slider from '../UI/Slider/Slider'
import JumbotronComponent from '../UI/Jumbotron/JumbotronComponent'

const Main = () => {
    return (
        <div>
            <Slider/>
            <Container>
                <Row className='mt-4'>
                    <Col>
                        <JumbotronComponent/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <JumbotronComponent/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;