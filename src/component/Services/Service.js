import React from 'react'
import "./secvices.css"
const Service = ({image, heading, price, text}) => {
    return (
        <>
                    <div className="col-lg-4 ">
                        <div className="single_service">
                        <img src={image} alt="" className='w-100' />
                        <div className="service_text">
                            <h3>{heading}</h3>
                            <h5>Price: ${price}</h5>
                            <p>{text}</p>
                            <a href='#' className='mybtn'>book now</a>
                        </div>
                        </div>
                    </div>
        </>
    )
}

export default Service
