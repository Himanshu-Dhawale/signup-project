import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <div className="text-container">
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching tutorials is great, but understanding how developers
              think is invaluable.
            </p>
          </div>
          <div className="input-container">
          <button className="call-button blue">Try it free 7 days <span className="grey-text">then $20/mo. thereafter</span></button>
          <div className="form">
          <input type="text" placeholder="first name" className="form-input"/>
          <input type="text" placeholder="last name" className="form-input"/>
          <input type="text" placeholder="email address" className="form-input"/>
          <input type="text" placeholder="password" className="form-input"/>
          <button className="form-button">Claim your free trail</button>
          <p className="form-text">By clicking the button, you are agreeing to our <span className="green-text">terms and services</span></p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
