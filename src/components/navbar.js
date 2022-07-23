import { Navbar,Container,Nav } from "react-bootstrap";
import { useState,useEffect } from "react";
import logo from '../assets/img/logo.svg';
import nav_bar_icon1 from "../assets/img/nav-icon1.svg";
import nav_bar_icon2 from "../assets/img/nav-icon2.svg";
import nav_bar_icon3 from "../assets/img/nav-icon3.svg";
import React  from 'react';

export const NavBar=()=>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);
    
    useEffect(() =>{
        const onScroll =()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="My Portfolio" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateLink('Skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateLink('projects')}>projects</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#test"><img src={nav_bar_icon1} alt=""></img></a>
                            {/* <a href="#test2"><img src={nav_bar_icon2} alt=""></img></a> */}
                            <a href="#test3"><img src={nav_bar_icon3} alt=""></img></a>
                        </div>
                        <button className="btn_vd" onClick={()=>console.log('connect')}><span>let's connect</span></button>
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}