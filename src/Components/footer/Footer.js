import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <div className='footer' >
        <div className='footer-container'>
          <div className='footer-section'>
            <h4 className='footer-h4'>Company</h4>
            About Us<br />
            Our Services<br />
            Privacy Policy<br />
            Affiliate Program
          </div>
          <div className='footer-section'>
            <h4 className='footer-h4'>FAQ</h4>
            Shipping<br />
            Returns<br />
            Order Status<br />
            Payment Options
          </div>
          <div className='footer-section'>
            <h4 className='footer-h4'>Contact Us</h4>
            Email<br />
            Phone<br />
            Chat<br />
            
          </div>
        </div>
    </div>
  )
}
