import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Notpage.css"
const Notpage = () => {
  return (
    <>
        <Container>
            <div className="not_page">
                <h2>404</h2>
                <h4>OOPS! Page Not Found</h4>
                <NavLink to="/" className="back_home">Back To Home </NavLink>
            </div>
        </Container>
    </>
  )
}

export default Notpage
