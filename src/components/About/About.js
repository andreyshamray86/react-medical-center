import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import JumbotronComponent from '../UI/Jumbotron/JumbotronComponent'

const About = () => {
    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <Col>
                        <JumbotronComponent/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;