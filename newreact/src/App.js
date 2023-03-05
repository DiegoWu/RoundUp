import React from 'react';
import LoginForm from './components/LoginForm'
import  Homepage from './components/Homepage' 
import Signup from './components/Signup'
import  Account from './components/Account'  
import  Coupon from './components/Coupon'  
import  User from './components/User'  
import  Business from './components/Business'  
import  Coupons from './components/Coupons'  
import { Link , Route, Routes } from 'react-router-dom';
import Typography  from '@material-ui/core/Typography'; 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from "@mui/material";
import './style.css';
import 'antd/dist/reset.css';

function App() {
  return (
    <>
      
          <Routes> 
            <Route path="/" element= {<Homepage />} />
            <Route path="/login" element= {<LoginForm />} /> 
            <Route path="/signup" element= {<Signup />} /> 
            <Route path="/user" element= {<User />} /> 
            <Route path="/user/balance" element= {<Account />} /> 
            <Route path="/user/coupon" element= {<Coupon />} />
            <Route path="/coupon/:id" element= {<Coupon />} /> 
            <Route path="/business" element= {<Business />} /> 
            <Route path="/business/create_coupons" element= {<Coupons />} /> 
            
          </Routes>

    </>
  )
}

export default App;
