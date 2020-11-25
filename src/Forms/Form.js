import React, { useState } from 'react';

import './Form.css';
export default function Form2() {
   const [Username, setUsername] = useState('');
   const [Email, setEmail] = useState('');
   const [Mobile, setMobile] = useState('');
   const [Address, setAddress] = useState('');
   const [State, setState] = useState('');
   const handleSubmit = (e) => {
      this.props.history.push('/Form2');
   };
   const handleUsername = (evt) => {
      setUsername(evt.target.value);
   };
   const handleEmail = (evt) => {
      setEmail(evt.target.value);
   };
   const handleMobile = (evt) => {
      setMobile(evt.target.value);
   };
   const handleAddress = (evt) => {
      setAddress(evt.target.value);
   };
   const handleState = (evt) => {
      setState(evt.target.value);
   };
   return (
      <div>
         <h2 className="company">
            <svg
               width="1em"
               height="1em"
               viewBox="0 0 16 16"
               className="bi bi-signpost-split"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M7 16h2V6H8V2h1v-.586a1 1 0 0 0-2 0V7h1v4H7v5z" />
               <path
                  fillRule="evenodd"
                  d="M14 3H8v2h6l.75-1L14 3zM8 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H8zM2 8h6v2H2l-.75-1L2 8zm6-1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h6z"
               />
            </svg>{' '}
            SAUDA
         </h2>
         <div className="container">
            <header>
               <h4> Step 2 : Contact Information</h4>
            </header>
            <main>
               <div className="row">
                  Confirm the following details and hit proceed to continue. To
                  revide details, just click on the box and re-type the
                  information.
                  <br />
               </div>
               <form onSubmit={handleSubmit}>
                  <div className="row">
                     <label htmlFor="Sign" className="label">
                        Authorized Person/Signatory
                     </label>
                  </div>
                  <div className="row">
                     <input onChange={handleUsername} name="Sign"></input>
                  </div>
                  <div className="row">
                     <label htmlFor="EMail" className="label">
                        Authorized Email
                     </label>
                  </div>
                  <div className="row">
                     <input
                        onChange={handleEmail}
                        name="EMail"
                        type="email"
                     ></input>
                  </div>

                  <div className="row">
                     <label htmlFor="Mobile" className="label">
                        Authorized Mobile Number
                     </label>
                  </div>
                  <div className="row">
                     <input onChange={handleMobile} name="Mobile"></input>
                  </div>
                  <div className="row">
                     <label htmlFor="address" className="label">
                        Registered Entity's Address
                     </label>
                  </div>
                  <div className="row">
                     <input onChange={handleAddress} name="address"></input>
                  </div>
                  <div className="row">
                     <label htmlFor="state" className="label">
                        State
                     </label>
                  </div>
                  <select onChange={handleState} name="state" id="SortBy">
                     <option value="Haryana" defaultValue>
                        Haryana
                     </option>
                     <option value="Punjab">Punjab</option>
                     <option value="Himachal">Himachal</option>
                  </select>
                  <div className="row btn-align">
                     <button type="button" className="btn btn-danger">
                        PROCEED
                     </button>
                  </div>
               </form>
            </main>
         </div>
      </div>
   );
}
