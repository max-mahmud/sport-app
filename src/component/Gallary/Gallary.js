import React, { useEffect, useState } from 'react'


import Gall from './Gall'
import"./Gallary.css"

const Moments = () => {
    const [gallary, setGallary] = useState([]);
    useEffect(()=>{
        fetch('galleries.json')
        .then (res => res.json())
        .then (data => setGallary(data))
    },[])
    return (
        <>
        <div className="gallary">
            <div className="container">
                <h2 className='text-center py-4'>Some Moments</h2>
                <div className="row">
                    {
                        gallary.map((item) =>
                            <Gall key={item.id} image={item}></Gall>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Moments;
