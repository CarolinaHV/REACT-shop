import React from 'react';
import Logo from '../assets/Logos/logo_yard_sale.svg';
import '../styles/NewPasswd.scss';

const NewPasswd = () => {
   return (
      <div className="login">
         <div className="form-container">
            <img src={Logo} alt="logo" className="logo" />

            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for you account</p>

            <form action="/" className="form">
               <label for="new-passwd" className="label">Password</label>
               <input type="password" id="passwd" placeholder="**********" className="input input-passwd" />

               <label for="new-passwd" className="label">Re-enter Password</label>
               <input type="password" id="passwd" placeholder="**********" className="input input-passwd" />

               <input type="submit" value="Confirm" className="primary-button" />
            </form>
         </div>
      </div>
   );
}

export default NewPasswd;