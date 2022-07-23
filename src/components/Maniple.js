import React  from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import {header_pic} from '../assets/img/header_img.svg';

export const Maniple = () =>{
    const toRotate=['Web Developer','Data Analytic','Data Science'];

    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm yassine`}</h1><span className='wrap'>Web developer and Data Science Student</span>
                        <button onClick={()=>console.log('let connect')}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={header_pic} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
