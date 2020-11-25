import React, { useState } from 'react';

import './Form.css';
export default function Form2() {
   const [PAN, setPAN] = useState('');
   const [GST, setGST] = useState('');
   const [PANupload, setPANupload] = useState('');
   const [GSTupload, setGSTupload] = useState('');
   const handlePAN = (evt) => {
      setPAN(evt.target.value);
   };
   const handleGST = (evt) => {
      setGST(evt.target.value);
   };
   const handlePANupload = (evt) => {
      setPANupload(evt.target.value);
   };
   const handleGSTupload = (evt) => {
      setGSTupload(evt.target.value);
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
               <h4> Step 3 : DOCUMENTS</h4>
            </header>
            <main>
               <div className="row">
                  Confirm the following details and hit proceed to continue. To
                  revide details, just click on the box and re-type the
                  information.
                  <br />
               </div>
               <form>
                  <div className="row">
                     <label htmlFor="pan" className="label">
                        PAN Card Number
                     </label>
                  </div>
                  <div className="row">
                     <input onChange={handlePAN} name="pan"></input>
                  </div>
                  <div className="row">
                     <label htmlFor="gst" className="label">
                        GST Regisration Number
                     </label>
                  </div>
                  <div className="row">
                     <input onChange={handleGST} name="gst"></input>
                  </div>
                  <div className="row">
                     <label htmlFor="Panupload" className="label">
                        PANCard Upload
                     </label>
                  </div>

                  <div className="row">
                     <input
                        onChange={handlePANupload}
                        className="file"
                        name="Panupload"
                        type="file"
                     ></input>
                     <div className="note">
                        Note: Only pdf files are allowed(Max siza: 4 MB)
                     </div>
                     <div className="UPLOAD">UPLOAD</div>
                  </div>
                  <div className="row">
                     <label htmlFor="gstupload" className="label">
                        GST IN Uploader{' '}
                     </label>
                  </div>
                  <div className="row">
                     <input
                        onChange={handleGSTupload}
                        name="gstupload"
                        className="file"
                        type="file"
                     ></input>
                     <div className="note">
                        Note: Only pdf files are allowed(Max siza: 4 MB)
                     </div>
                     <div className="UPLOAD">UPLOAD</div>
                  </div>
                  <div className="row btn-align">
                     <button type="button" className="btn btn-danger">
                        FINISH
                     </button>
                  </div>
               </form>
            </main>
         </div>
      </div>
   );
}
