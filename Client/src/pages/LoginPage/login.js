import Frontpage from "../signup/frontpage";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress } from "@material-ui/core"

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const [user, getuser] = useState({
  //   email:"",
  //   password:""
  // });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   getuser((values) => ({ ...values, [name]: value }));
  //   console.log(user);
  // };

  const handleClick = async (e) => {
    e.preventDefault();

    
    await loginCall({ email:email.current.value, password:password.current.value}, dispatch);
  };


  
  // const handlelogin = async (e) => {
  //   e.preventDefault();
  //   const {  email,password} = user;
  //   console.log(user);
  //   const res = await fetch("/signin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //        email, //as both are named as email so we can write this as email ,password only
  //        password, //First email=>database and second on correspondes to email of useState
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   if (res.status === 201 ) {
  //           window.alert("Login Successful");
  //           navigate("/patient");
  //   } else {
  //           window.alert(data.error);
  //   }
  // };


  return (
    <>
    <Layout/>
    <div className="login">
      <Frontpage />
      <div className="login_app">
        <h1>LogIn</h1>
        <form type="post" className="login_form" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              ref={email}
              
             
           
          ></input>
          <input
              placeholder="Password"
              required
              name="password"
              ref={password}
              minLength="6"
              type="password"
          ></input>
          <div>
            <Link to="/Authentication">create new account</Link>
            <Link className="fp" to="/fp_page">
              Forgot Password!
            </Link>
          </div>
            <button type="submit" id="signup" className="loginButton" disabled={isFetching} >
              {isFetching ? <CircularProgress color="white" size="17px"/> : "login"}
            </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
