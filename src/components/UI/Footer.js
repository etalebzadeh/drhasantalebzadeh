import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-row footer-logo'>
        </div>
        <div className='footer-row footer-image'>
          <div className='image-box'>
           <img src="/images/pics/c-cli2.jpg" />          
          </div>
          
        </div>
        <div className='address'>
          <p>ساعت کاری:بعدازظهر - ۰۴:۰۰- ۱۰:۰۰</p>
          <p>شنبه تا چهارشنبه</p>
          <p>شماره های تماس: ۰۵۱۳۶۴۱۹۶۴۱-۰۹۱۵۲۶۲۵۰۹۵</p>

        </div>
        
    </div>
  )
}

export default Footer