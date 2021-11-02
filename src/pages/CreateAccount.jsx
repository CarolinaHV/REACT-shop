import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
   return (
      <div className="account">
         <div className="account-container">
            <h1 className="title title-acc">My account</h1>

            <form action="/" className="form">
               <label for="name" className="label">Name</label>
               <input type="text" id="name" placeholder="Your name" className="input input-name" />

               <label for="email" className="label">Email address</label>
               <input type="email" id="email" placeholder="email@example.com" className="input input-email" />

               <label for="passwd" className="label">Password</label>
               <input type="password" id="passwd" placeholder="**********" className="input input-pdw" />

               <input type="submit" value="Create" className="primary-button" />
            </form>
         </div>
      </div>
   );
}

export default CreateAccount;