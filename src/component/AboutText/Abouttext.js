import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImage from "../../image/1.jpg"
import './Abouttext.css'

const Abouttext = () => {
  return (
    <>
      <Container className='my-5'>
        <Row className='align-items-center'>
          <Col lg={5}>
            <img src={AboutImage} alt="" className='about_image'/>
          </Col>
          <Col lg={7}>
          <h3>I'm Mahmud Hossain</h3>
          <h2>About My Goal</h2>
          <p>Hi, I'm Mahmud Hossain. I have completed my MBS Degree. Now I'm learning Web Development in Programming Hero. My Goal is become an expert Web Developer. For achieve my goal I'm doing very hard work. Everyday I spend minimum 10 hours for learning new technologies and practising it. I believe that I can do the best in this area. Hard work is the key and I'm doing the hard work now.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Abouttext
