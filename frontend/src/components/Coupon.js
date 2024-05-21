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
      <h1 className="coupon-title">{couponData.title} Coupon</h1> {/* Add the title class */}
      <div className="coupon-info"> {/* Add the info class */}
        <h2>Coupon Info</h2>
        <p>Owner: MLH {couponData.host}</p>
        <p>Description: free domain {couponData.description}</p>
        <p>Start Time: 11/Feb/2022 {couponData.startTime}</p>
        <p>Expiration Time: 12/Jan/2023 {couponData.expTime}</p>
        <p>Minimum Amount: 10$ {couponData.minAmount}</p>
        <p>Redeemed Users: {couponData.redeemedUsers}</p>
        <p>Icon: {couponData.icon}</p>
      </div>
      <div className="coupon-info"> {/* Add the info class */}
        <h2>Coupon Info</h2>
        <p>Owner: Madisonboba {couponData.host}</p>
        <p>Description: the best boba tea in Madison {couponData.description}</p>
        <p>Start Time: 12/Jan/2023 {couponData.startTime}</p>
        <p>Expiration Time: 22/March/2023 {couponData.expTime}</p>
        <p>Minimum Amount: 4$ {couponData.minAmount}</p>
        <p>Redeemed Users: Daniel {couponData.redeemedUsers}</p>
        <p>Icon: {couponData.icon}</p>
      </div>
      <div className="coupon-info"> {/* Add the info class */}
        <h2>Coupon Info</h2>
        <p>Owner: Prof. Florian {couponData.host}</p>
        <p>Description: google cloud discount {couponData.description}</p>
        <p>Start Time: 1/Jan/2023 {couponData.startTime}</p>
        <p>Expiration Time: 6/June/2023 {couponData.expTime}</p>
        <p>Minimum Amount: 5$ {couponData.minAmount}</p>
        <p>Redeemed Users: All students in CS400 {couponData.redeemedUsers}</p>
        <p>Icon: {couponData.icon}</p>
      </div>
      <div className="coupon-info"> {/* Add the info class */}
        <h2>Coupon Info</h2>
        <p>Owner: {couponData.host}</p>
        <p>Description: {couponData.description}</p>
        <p>Start Time: {couponData.startTime}</p>
        <p>Expiration Time: {couponData.expTime}</p>
        <p>Minimum Amount: {couponData.minAmount}</p>
        <p>Redeemed Users: {couponData.redeemedUsers}</p>
        <p>Icon: {couponData.icon}</p>
      </div>
      <div className="coupon-info"> {/* Add the info class */}
        <h2>Coupon Info</h2>
        <p>Owner: {couponData.host}</p>
        <p>Description: {couponData.description}</p>
        <p>Start Time: {couponData.startTime}</p>
        <p>Expiration Time: {couponData.expTime}</p>
        <p>Minimum Amount: {couponData.minAmount}</p>
        <p>Redeemed Users: {couponData.redeemedUsers}</p>
        <p>Icon: {couponData.icon}</p>
      </div>
    </div>
  );
};

export default Coupon;
