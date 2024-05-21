import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './user.css';

const User = () => {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    location: '', 
    coupons: '',
    title: [],
  });

  useEffect(() => {
    // fetch user data from backend and update state
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        setUserData({
          name: data.name,
          password: data.password,
          email: data.email,
          location: data.location,
          coupons: data.coupons,
          title: [], // Assuming this is not set initially
        });

        if (data.coupons.length) {
          setCoupons(data.coupons);
        }
      });
  }, []);

  const setCoupons = (coupons) => {
    setUserData(prevState => ({
      ...prevState,
      coupons: coupons,
    }));
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
            <Link to="/signup"> Signup</Link> 
          </li>
          <li>
            <Link to="/coupon"> Coupon</Link> 
          </li>
          <li>
            <Link to="/account"> Account</Link> 
          </li>
        </ul> 
      </nav> 
      <h1>Welcome {userData.name}!</h1>
      <div>
        <h1>Your Profile Information</h1>
        <h1>Username: Daniel {userData.name}</h1>
        <h1>Email: dan123@wisc.edu {userData.email}</h1>
        <h1>Location: Madison {userData.location}</h1>
        <a><Link to="/user/balance">Balance: 12.75$</Link></a>
        <Link to="/user/coupon">Coupons</Link>
        <p>Owned Coupon: [MLH, Madisonboba]</p>
      </div>
    </div>
  );
};

export default User;
