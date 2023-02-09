import React from 'react'
import Gallary1 from "../../image/gallery-one.jpg"
import Gallary2 from "../../image/gallery-two.jpg"
import Gallary3 from "../../image/gallery-three.jpg"
import Gallary4 from "../../image/gallery-four.jpg"
import Gallary5 from "../../image/gallery-five.jpg"
import Gallary6 from "../../image/gallery-nine.jpg"
import Gallary7 from "../../image/gallery-seven.jpg"
import Gallary8 from "../../image/gallery-ten.jpg"

import"./Moment.css"
const Moments = () => {
    return (
        <>
        <div className="gallary">
            <div className="container">
                <h2 className='text-center py-4'>Some Moments</h2>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary1} alt="img" className='w-100'/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary2} alt="img" className='w-100'/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary3} alt="img" className='w-100'/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary4} alt="img" className='w-100'/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary5} alt="img" className='w-100'/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary7} alt="img" className='w-100'/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary6} alt="img" className='w-100'/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={Gallary8} alt="img" className='w-100'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Moments
