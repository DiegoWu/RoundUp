import { renderHook } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, resolvePath } from 'react-router-dom'; 
 
const LoginForm = () => {
const navigate = useNavigate(); 
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [location, setlocation] = useState("");
  const [email, setemail] = useState("");
  const [bs, setbs] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlebsChange = (event) => {
    bs= true;
  };
  const handlelocationChange = (event) => {
    setlocation(event.target.value);
  };
  const handleemailChange = (event) => {
    setemail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    setHasError(false);
    
    event.preventDefault();
    
    console.log(
      `I am a seller:${bs}\nUsername:${name}\nEmail: ${email}\nlocation: ${location}\nPassword: ${password}`
    );
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bs: bs, 
        name: name,
        email: email,
        location: location,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        if (data.status == 201) {
          if (
            data.bs!=""&&
            data.email != "" &&
            data.name != "" &&
            data.location != "" &&
            data.password != ""
          ) {
            localStorage.set(bs, name, email, location, password);
            localStorage.setItem(); 
            if(bs) navigate(resolvePath("/user"), {replace: true});
            else navigate(resolvePath("/business"), {replace: true});
            /*window.open("http://localhost:3000/"); */
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
        
        // do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // handle the error
      });
  };

  return (
      
    <React.Fragment>
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
      {hasError && <h1>Error</h1>}
      <form onSubmit={handleSubmit}>
      <label>
      I am a seller
            <input type="radio" value="seller" onChange= {handlebsChange}/>  
        </label>
        <label>
          Username:
          <input type="text" value={name} onChange={handleUsernameChange} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={handleemailChange} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={handlelocationChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
