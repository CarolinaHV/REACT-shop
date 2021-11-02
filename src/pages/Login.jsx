import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';


const Login = () => {
   const form = useRef(null);

   const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
         username: formData.get('email'),
         password: formData.get('passwd')
      }
      console.log(data);
   }

   return (
      <div className="login">
         <div className="form-container">
            <img src={logo} alt="logo" className="logo" />

            <form action="/" className="form" ref={form} >
               <label htmlFor="email" className="label">Email address</label>
               <input type="email" name="email" placeholder="email@example.com" 
               className="input input-email" />

               <label htmlFor="passwd" className="label">Password</label>
               <input type="password" name="passwd" placeholder="**********" 
               className="input input-passwd" />

               <button type="submit" onClick={handleSubmit} 
                  className="primary-button login-button">
                  Login in
               </button>
               <a href="/">Forgot my password</a>
            </form>
            <button
               className="secondary-button signup-button">
               Sign up
            </button>
         </div>
      </div>
   );
}

export default Login;
