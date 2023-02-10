import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <div className='footer' >
        <div className='footer-container'>
          <div className='footer-section'>
            <h4 className='footer-h4'>Company</h4>
            <p>About Us<br />
            Our Services<br />
            Privacy Policy<br />
            Affiliate Program</p>
          </div>
          <div className='footer-section'>
            <h4 className='footer-h4'>FAQ</h4>
            <p>Shipping<br />
            Returns<br />
            Order Status<br />
            Payment Options
            </p>
          </div>
          <div className='footer-section'>
            <h4 className='footer-h4'>Contact Us</h4>
            <p>Email<br />
            Phone<br />
            Chat<br />
            </p>
          </div>
        </div>
    </div>
  )
}
