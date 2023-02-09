import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import service1 from "../../image/service-one.jpg"
import service2 from "../../image/service-two.jpg"
import service3 from "../../image/service-three.jpg"

import "./secvices.css"
import Service from './Service'

const Services = () => {
    return (
        <>
        <div className="my_service">
            <div className="container">
            <h2 className='text-center'>My Services</h2>
                <div className="row">
                
                    <Service image={service1}
                    heading={'Sporting Events Photography'} 
                    price={300}
                    text={"I'm the leading sporting event photographer in Bangladesh. I offer quality images and products, on-site printing and great pricing!"} />
                    
                    <Service image={service2}
                    heading={'Live Match Photography'} 
                    price={100}
                    text={"My live match photography is best in the world. The quality of the photos are just amazing and beautiful and ready to use for your next platform."} />
                    
                    <Service image={service3}
                    heading={'Team Picture Day Photography'}
                    price={150}
                    text={"I offers top quality posed team & individual photography services for any size team and league. You will get best team photos from me."} />

                </div>
            </div>
        </div>
        </>
    )
    }

export default Services
