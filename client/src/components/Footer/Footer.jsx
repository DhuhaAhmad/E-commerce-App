import React from 'react'
import './Footer.scss'
export const Footer = () => {
  return (
    <div className='footer'>

      <div className="top">

        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">

        <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Comper</span>
          <span>Cookies</span>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
        </div>
        <div className="item">
        <h1>Contact</h1>

<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>

        </div>
      </div>
      <div className="bottom">

        <div className="left">
          <span className="logo">LAMASTORE</span>
          <span className="copyright">
          © Copyright 2023, All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" alt=""
          // height={100}
          />
        </div>
      </div>
    </div>
  )
}
