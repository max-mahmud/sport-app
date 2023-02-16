import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Blog.css'

const Blogtext = () => {
  const [blog, setBlog] = useState([])
  useEffect(()=>{
    fetch('blog.json')
    .then (res => res.json())
    .then (data => setBlog(data))
  },[])
  return (
    <>
      <div className="blog_area">
        <Container>
            <h2 className='blog-heading'>Questions Answer</h2>
            <Row>
              {
                blog.map((item)=>
                  <Col key={item.id} lg={4} >
                    <div className="single_blog">
                    <h4>{item.heading} </h4>
                    <p>{item.text}</p>
                    </div>
                </Col>
                )
              }
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Blogtext
