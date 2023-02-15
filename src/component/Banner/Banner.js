import React from 'react'
import { useEffect, useState } from 'react'
import {Carousel,Image} from "react-bootstrap";
import "./Banner.css"


    function Banner () {
        const [banner, setBanner ] = useState([]);
        useEffect(() => {
        fetch("hero.json")
        .then(res => res.json())
        .then(data => setBanner(data))
        }, []);
    
        return (
            <Carousel className="my-slider">
            {banner.map((slider) => (
                <Carousel.Item key={slider.id}>
                <Image fluid className="d-block" src={slider.img} alt="Slider" />
                <Carousel.Caption className="py-1">
                    <h5>{slider.subheading}</h5>
                    <h2>{slider.heading}</h2>
                    <p>I Capture Sports Moments and Actions.</p>
                    <a href="#home" className='mybtn'>more about me</a>
                </Carousel.Caption>
                </Carousel.Item>
            ))}
            </Carousel>
        );
        }

export default Banner






