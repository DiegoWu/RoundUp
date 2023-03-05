import { renderHook } from '@testing-library/react';
import React from 'react';
import {  Link, useNavigate, resolvePath } from 'react-router-dom';  
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './user.css'
function setCoupon(){
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        this.setState({
          coupons: data.coupons, 
        });
      });
}
class User extends React.Component {
    
      
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      location: '', 
      coupons: '', 
      title: [],
    };
  }
  
  componentDidMount() {
    // fetch user data from backend and update state
    
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          password: data.password,
          email: data.email,
          location: data.location, 
          
          coupons: data.coupons,
        });
        if(data.coupons.length) setCoupon(); 
      });
  }
  
  render() {
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
        <h1> Welcome {this.state.name}!</h1>
        <div>
          <h1 >Your Profile Information</h1>
          <h1 > Username: {this.state.name}</h1>
          <h1>Password: {this.state.password}</h1>
          <h1>Email: {this.state.email}</h1>
          <h1>location: {this.state.location}</h1>

          <a><Link to= "/user/balance"> balance </Link></a>
          <Link to= "/user/coupon">coupons </Link>
          <p>Owned Coupon: [MLH, Maidsonboba]</p>
        
        </div>
      </div>
    );
  }
}

export default User;
