import { renderHook } from '@testing-library/react';
import React from 'react';
import { Link, useNavigate, resolvePath } from 'react-router-dom';

import './Coupon.css'; // Import the CSS file

class Coupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: '',
      title: '',
      description: '',
      icon: '',
      startTime: '',
      expTime: '',
      minAmount: '',
      redeemedUsers: '',
    };
  }

  componentDidMount() {
    // fetch user data from backend and update state
    fetch('/api/coupon')
      .then(response => response.json())
      .then(data => {
        this.setState({
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
  }

  render() {
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
        <h1 className="coupon-title">{this.state.title} Coupon</h1> {/* Add the title class */}
        <div className="coupon-info"> {/* Add the info class */}
          <h2>Coupon Info</h2>
          <p>Owner: {this.state.host}</p>
          <p>Description: {this.state.description}</p>
          <p>Start Time: {this.state.startTime}</p>
          <p>Expiration Time: {this.state.expTime}</p>
          <p>Minimum Amount: {this.state.minAmount}</p>
          <p>Redeemed Users: {this.state.redeemedUsers}</p>
          <p>Icon: {this.state.icon}</p>
        </div>
      </div>
    );
  }
}

export default Coupon;
