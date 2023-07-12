// import React from 'react';
// import { useState,useEffect } from 'react';
// import { Form, Input,message } from 'antd';
// import { Link ,useNavigate} from 'react-router-dom';
// import Spinner from '../components/Spinner';

// import axios from 'axios';
// import "../styles/LoginPage.css";


// const Login = () => {


//     const img =
//     "https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  

//     const navigate = useNavigate();

//     const [loading,setloading] =useState(false);

//     const submitHandler= async (values)=>{
//         try{
//             setloading(true);
            
//             const {data}=await axios.post("/users/login",values);
            
//             message.success("Login successfull");

//             localStorage.setItem('user',JSON.stringify({...data.user,password : ""}));

//             setloading(false);
            
//             navigate('/');
        
//         }catch(e){

//             setloading(false);
            
//             message.error("Invalid credentials");
//         }
//     }

//     useEffect(()=>{
//         if(localStorage.getItem('user')){
//             navigate('/')
//         }
//     },[navigate])
//   return (
//     <>
//      <div className="login-page">
//      {loading && <Spinner />}
//      <div className="row container">
//           <h1>Expsanse Managment System - MERN STACK</h1>
//           <div className="col-md-6">
//             <img src={img} alt="login-img" width={"100%"} height="100%" />
//           </div>
//         <Form layout='vertical' onFinish={submitHandler}>
//         <h1>Login Form</h1>

//             <Form.Item label ="Email" name='email'>
//                 <Input type='email'/>
//             </Form.Item>

//             <Form.Item label ="Password" name='password'>
//                 <Input type='password'/>
//             </Form.Item>

//             <div className='d-flex justify-content-between'>
//                 <Link to='/register'>Not Registered ? Click Here to Register</Link>  <button className='btn btn-success'>SignIn</button>
//             </div>
            
//         </Form>
//      </div> 
//      </div>
     
//     </>
//   )
// }

// export default Login;


import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/LoginPage.css";
const Login = () => {
  const img =
    "https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="login-page ">
        {loading && <Spinner />}
        <div className="row container">
          <h1>Expense Managment System</h1>
          <div className="col-md-6">
            <img src={img} alt="login-img" width={"100%"} height="100%" />
          </div>
          <div className="col-md-4 login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  Not a user ? Click Here to regsiter !
                </Link>
                <button className="btn">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;