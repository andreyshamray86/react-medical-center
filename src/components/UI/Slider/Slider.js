import React from 'react'
import {Carousel} from 'react-bootstrap'
import slide1 from '../../../assets/img/slide1.jpg'
import slide2 from '../../../assets/img/slide2.jpg'
import slide3 from '../../../assets/img/slide3.jpg'
import styled from 'styled-components'

const Styles = styled.div `
    .carousel-inner {
        height: 600px;
    }

    img {
        height: 100%;
    }
`

const Slider = () => {
    return (
        <>
            <Styles>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Styles>
        </>
    )
}

export default Slider
