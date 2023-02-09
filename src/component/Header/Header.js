import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../image/Logo.png"
import './Header.css'

const Header = () => {
    return (
        <>
        <header className='myheader'>
        <Navbar bg="dark" expand="lg" variant="dark" className='py-3 fixed-top'>
      <Container>
        <Navbar.Brand href="#home">
        <img src={Logo} alt="Img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
        </>
    )
}

export default Header