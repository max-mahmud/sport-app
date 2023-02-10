import React from 'react'

const Moment = ({image}) => {
    return (
        <>
        <div className="col-lg-3 col-md-6 mb-4">
                <img src={image} alt="img" className='w-100'/>
                </div>
        </>
    )
}

export default Moment
