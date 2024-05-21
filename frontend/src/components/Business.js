import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './business.css';  // Import the CSS file

const Business = () => {
  const [businessData, setBusinessData] = useState({
    name: '',
    password: '',
    email: '',
    address: '', 
    description: '', 
    image: '',
    location: ''
  });

  useEffect(() => {
    // fetch user data from backend and update state
    fetch('/api/business')
      .then(response => response.json())
      .then(data => {
        setBusinessData({
          name: data.name,
          password: data.password,
          email: data.email,
          address: data.address,
          description: data.description,
          image: data.image,
          location: data.location
        });
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/coupon">Coupon</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome {businessData.name}!</h1>
      <div>
        <h1>Your Profile Information</h1>
        <p>Username: {businessData.name}</p>
        <p>Password: {businessData.password}</p>
        <p>Email: {businessData.email}</p>
        <p>Address: {businessData.address}</p>
        <Link to='/business/create_coupons'>Coupons</Link>
      </div>
    </div>
  );
};

export default Business;
