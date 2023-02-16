import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Blog.css'

const Blogtext = () => {
  return (
    <>
      <div className="blog_area">
        <Container>
            <h2 className='blog-heading'>Questions Answer</h2>
            <Row>
                <Col lg={4} >
                    <div className="single_blog">
                    <h4>Difference between authorization and authentication</h4>
                    <p>Authentication is a process to verify any person but Authorization is a process to the person access level. Authentication is verifying any person. Authorization is set the person's activity. Authentication active through Email, SMS, One time pin etc. Authorization can set using settings. User can set the Authentication settings but user can't set the Authorization settings, it can set by the organization or admin.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="single_blog">
                    <h4>Why I'm using firebase? What other options I have to implement authentication?</h4>
                    <p>I'm using Firebase because is's safe and fast. The trust level is very high because of Google's service. Also we can start Firebase free. Also the documentation is well described. Using Firebase we can do Authentication, Realtime Database, Hosting and many more in one place easily. We can use Email, Password authentication, Google, Facebook, Apple, Github authentication and many more.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="single_blog">
                    <h4>What other services does firebase provide other than authentication.</h4>
                    <p>Other than authentication, firebase have some other services. Firebase provide Realtime Database, Hosting, Cloud Storage, Google Analytics, Cloud Firestore, Cloud Messaging, Cloud Functions etc. They have free and paid both services. Their services are used for different platform like, Web, IOS+, Android, Unity etc. They have Machine Learning package too.</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Blogtext
