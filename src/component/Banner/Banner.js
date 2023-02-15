import React from 'react'
import { useEffect, useState } from 'react'
import {Carousel,Image} from "react-bootstrap";
import "./Banner.css"


    function Banner () {
        const [sliderInfo, setSliderInfo ] = useState([]);
        useEffect(() => {
        fetch("hero.json")
        .then(res => res.json())
        .then(data => setSliderInfo(data))
        .catch(error => console.log(error));
        }, []);
    
        return (
            <Carousel className="my-slider">
            {sliderInfo.map((slider) => (
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






