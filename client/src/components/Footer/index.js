import React from 'react';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import './index.css';

const Footer = () =>
  <div className="footer">
    <div className="contact">
      <div className="contact-phone">
        <img src={phone} alt="phone" height="20" />
        <a href="/">+14248293749</a>
      </div>
      <div className="contact-email">
        <img src={email} alt="email" height="20"/>
        <a href="/">thisisatest@gmail.com</a>
      </div>
    </div>
    <div className="copyright">
      &copy; The Testing Company. All Rights Reserved.
    </div>
  </div>

export default Footer;