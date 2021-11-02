import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
   return (
      <div className="login">
         <div className="form-container">
            <h1 className="title title-acc">My account</h1>

            <form action="/" className="form">
               <label for="name" className="label">Name</label>
               <p className="value">Jhon doe</p>

               <label for="email" className="label">Email address</label>
               <p className="value">jhondoe@example.com</p>

               <label for="passwd" className="label">Password</label>
               <p className="value">***********</p>

               <input type="edit" value="Edit" className="secondary-button" />
            </form>
         </div>
      </div>
   );
}

export default MyAccount;