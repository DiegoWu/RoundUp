import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Implement sign up logic here
  };

  return (
    
    <div>
        <nav> 
        <ul>
          <li>
            <Link to="/"> Homepage</Link>
          </li>
          <li>
          <Link to="/login"> Login</Link> 

          </li>
          <li>
          <Link to="/signup"> signup</Link> 
          
          </li>
          <li>
          <Link to="/coupon"> coupon</Link> 
          
          </li>
          <li>
          <Link to="/account"> account</Link> 
          
          </li>

          </ul> 
          </nav> 

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
