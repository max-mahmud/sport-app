import React from 'react'
import Logo from "../../image/logo.png"
import"./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <p className='text'>© 2022 Spotographer, All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
