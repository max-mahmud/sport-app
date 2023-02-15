import "./secvices.css"
import Service from './Service'
import { useEffect, useState } from 'react'

const Services = () => {
    const [services, setServices]= useState([]);
    useEffect (()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <>
        <div className="my_service">
            <div className="container">
            <h2 className='text-center'>My Services</h2>
                <div className="row">
                
                {services.map((item) =>(
                        <Service key={item.id} item={item} ></Service>
                    ))}

                </div>
            </div>
        </div>
        </>
    )
    }

export default Services
