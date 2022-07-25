import React, { useEffect, useState }  from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import {header_pic} from "../assets/img/header_img.svg";

export const Maniple = () =>{
    const [loop_nbr , setLoop_nbr] = useState(0);
    const [isDelete,setIsDelete] = useState(false);
    const [text,setText] = useState('');
    const toRotate=['Web Developer','Data Science Student'];
    const period = 1500;
    const [index, setIndex] = useState(1);
    const [delta,setDelta] = useState(300 - Math.random()*100);

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker_func();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])


    const ticker_func = () =>{
        let i = loop_nbr % toRotate.length;
        let text_select = toRotate[i];
        let updateText=isDelete ? text_select.substring(0,text.length-1) : text_select.substring(0, text.length + 1);

        setText(updateText);

        if (isDelete) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDelete && updateText === text_select) {
            setIsDelete(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDelete && updateText === '') {
            setIsDelete(false);
            setLoop_nbr(loop_nbr + 1);
            setIndex(1);
            setDelta(600);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm yassine`}</h1><span className='wrap'>{text}</span>
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
