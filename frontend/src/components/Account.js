import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Coupon.css'; // Import the CSS file

const Coupon = () => {
  const [couponData, setCouponData] = useState({
    host: '',
    title: '',
    description: '',
    icon: '',
    startTime: '',
    expTime: '',
    minAmount: '',
    redeemedUsers: '',
  });

  useEffect(() => {
    // fetch user data from backend and update state
    fetch('/api/coupon')
      .then(response => response.json())
      .then(data => {
        setCouponData({
          host: data.host,
          title: data.title,
          description: data.description,
          icon: data.icon,
          startTime: data.startTime,
          expTime: data.expTime,
          minAmount: data.minAmount,
          redeemedUsers: data.redeemedUsers,
        });
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="coupon-container"> {/* Add the container class */}
      <nav>
        <ul className="navigation"> {/* Add the navigation class */}
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
      <h1 className="coupon-title">{couponData.title} Balance</h1> {/* Add the title class */}
      <label>
        amount:
        <input type="text" />
      </label>
      <label htmlFor="cars">round up to:</label>
      <select name="cars" id="cars">
        <option value="saab">1</option>
        <option value="mercedes">10</option>
        <option value="audi">100</option>
      </select>
      <a>decimal</a>
    </div>
  );
};

export default Coupon;
