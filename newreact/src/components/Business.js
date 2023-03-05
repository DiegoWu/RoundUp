import { renderHook } from '@testing-library/react';
import React from 'react';
import {  Link, useNavigate, resolvePath } from 'react-router-dom';  
import './business.css';  // Import the CSS file
class Business extends React.Component {
    

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      address: '', 
      description:'', 
      image: '', 
      
    };
  }
  
  componentDidMount() {
    // fetch user data from backend and update state
    
    fetch('/api/business')
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          password: data.password,
          email: data.email,
          address: data.address,
          description: data.description, 
          image: data.image,
          location: data.location,
          
        });
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
        <h1>Welcome {this.state.name}!</h1>
       
        <div>
          <h1>Your Profile Information</h1>
          <p>Username: {this.state.name}</p>
          <p>Password: {this.state.password}</p>
          <p>Email: {this.state.email}</p>
          <p>address: {this.state.address}</p>
          
          <Link to='/business/create_coupons' > coupons</Link>

        </div>
      </div>
    );
  }
}

export default Business;
