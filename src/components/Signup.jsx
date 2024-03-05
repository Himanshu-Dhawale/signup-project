// import React from "react";
// import "./Signup.css";
// const Signup = () => {
//   return (
//     <>
//       <div className="main-container">
//         <div className="form-container">
//           <div className="text-container">
//             <h1>Learn to code by watching others</h1>
//             <p>
//               See how experienced developers solve problems in real-time.
//               Watching tutorials is great, but understanding how developers
//               think is invaluable.
//             </p>
//           </div>
//           <div className="input-container">
//           <button className="call-button blue">Try it free 7 days <span className="grey-text">then $20/mo. thereafter</span></button>
//           <div className="form">
//           <input type="text" placeholder="first name" className="form-input"/>
//           <input type="text" placeholder="last name" className="form-input"/>
//           <input type="text" placeholder="email address" className="form-input"/>
//           <input type="text" placeholder="password" className="form-input"/>
//           <button className="form-button">Claim your free trail</button>
//           <p className="form-text">By clicking the button, you are agreeing to our <span className="green-text">terms and services</span></p>
//           </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = () => {
  
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    // If there are errors, update the formErrors state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Submit the form (you can handle the form submission logic here)
      console.log("Form submitted:", formData);
    }
  };

  return (
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
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="form-input"
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <p className="error">{formErrors.firstName}</p>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="form-input"
              onChange={handleInputChange}
            />
            {formErrors.lastName && (
              <p className="error">{formErrors.lastName}</p>
            )}
            <input
              type="text"
              name="email"
              placeholder="Email address"
              className="form-input"
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="error">{formErrors.email}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-input"
              onChange={handleInputChange}
            />
            {formErrors.password && (
              <p className="error">{formErrors.password}</p>
            )}
            <button className="form-button" onClick={handleSubmit}>
              Claim your free trial
            </button>
            <p className="form-text">
              By clicking the button, you are agreeing to our{" "}
              <span className="green-text">terms and services</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

