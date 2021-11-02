import React from 'react';
import Logo from '../assets/Logos/logo_yard_sale.svg';
import Icon_email from '../assets/Icons/email.svg';
import '../styles/SendEmail.scss';

const SendEmail = () => {
   return (
      <div className="login">
         <div className="form-container">
            <img src={Logo} alt="logo" className="logo" />

            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

            <div className="email-img">
               <img src={Icon_email} alt="email" />
            </div>

            <button className="primary-button">Login</button>
            <p className="resend">
               <span>Didn't receive the email?</span>
               <a href="/">Resend</a>
            </p>
         </div>
      </div>
   );
}

export default SendEmail;