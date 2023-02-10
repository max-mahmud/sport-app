import React from 'react'
import Gallary1 from "../../image/gallery-one.jpg"
import Gallary2 from "../../image/gallery-two.jpg"
import Gallary3 from "../../image/gallery-three.jpg"
import Gallary4 from "../../image/gallery-four.jpg"
import Gallary5 from "../../image/gallery-five.jpg"
import Gallary6 from "../../image/gallery-nine.jpg"
import Gallary7 from "../../image/gallery-seven.jpg"
import Gallary8 from "../../image/gallery-ten.jpg"

import Gall from './Gall'
import"./Gallary.css"

const Moments = () => {
    return (
        <>
        <div className="gallary">
            <div className="container">
                <h2 className='text-center py-4'>Some Moments</h2>
                <div className="row">
                    <Gall image={Gallary1}/>
                    <Gall image={Gallary2}/>
                    <Gall image={Gallary3}/>
                    <Gall image={Gallary4}/>
                    <Gall image={Gallary5}/>
                    <Gall image={Gallary7}/>
                    <Gall image={Gallary6}/>
                    <Gall image={Gallary8}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Moments;