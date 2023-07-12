import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form, Input,message } from 'antd';
import { Link ,useNavigate} from 'react-router-dom';

import "../styles/RegisterPage.css";

import axios from 'axios';
import Spinner from '../components/Spinner';


const Register = () => {

    const img =
    "https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  

    const navigate = useNavigate();

    const [loading,setloading] =useState(false);

    const submitHandler= async(values)=>{
        try{
            setloading(true);
            await axios.post("/users/register",values);
            message.success("Registration successfull");
            setloading(false);
            navigate('/login');
        }catch(e){
            setloading(false);
            message.error("Invalid Registration");
        }
    }

    // prevent for login user

    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate('/')
        }
    },[navigate])
  return (
    <>
     

     <div className="register-page ">
        {loading && <Spinner />}
        <div className="row container">
          <h1>Expense Managment System</h1>
          <div className="col-md-6">
            <img src={img} alt="login-img" width={"100%"} height="100%" />
          </div>
          <div className="col-md-4 login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Registration Form</h1>

              <Form.Item label="Name" name="name">
                <Input type="text" required />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/login">
                  Already Register ? Click Here to login !
                </Link>
                <button className="btn">Register</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
