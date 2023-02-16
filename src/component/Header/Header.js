import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../image/logo.png"
import './Header.css'

const Header = () => {
    return (
        <>
        <header className='myheader'>
        <Navbar bg="dark" expand="lg" variant="dark" className='py-3 fixed-top'>
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={Logo} alt="Img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link active-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/blog">Blog</NavLink>
            <NavLink className="nav-link" to="/">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
        </>
    )
}

export default Header