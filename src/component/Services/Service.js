import React from 'react'
import "./secvices.css"
const Service = ({item}) => {
    return (
        <>
                    <div className="col-lg-4 ">
                        <div className="single_service">
                        <img src={item.img} alt="" className='w-100' />
                        <div className="service_text">
                            <h3>{item.name}</h3>
                            <h5>Price: ${item.price}</h5>
                            <p>{item.description}</p>
                            <a href='#' className='mybtn'>book now</a>
                        </div>
                        </div>
                    </div>
        </>
    )
}

export default Service
