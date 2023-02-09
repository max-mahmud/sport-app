import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Banner1 from "../../image/banner1.jpg"
import Banner2 from "../../image/banner2.jpg"
import Banner3 from "../../image/banner3.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <>
        <div className="mybanner">
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Banner2}
            alt="First slide"
            />
            <Carousel.Caption>
            <h4>SPOTOGRAPHER</h4>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <a href='#' className='mybtn'>more about me</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Banner3}
            alt="Second slide"
            />

        <Carousel.Caption>
            <h4>SPOTOGRAPHER</h4>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <a href='#' className='mybtn'>more about me</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Banner1}
            alt="Third slide"
            />

    <Carousel.Caption>
            <h4>SPOTOGRAPHER</h4>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <a href='#' className="mybtn">more about me</a>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        </>
    )
}

export default Banner
