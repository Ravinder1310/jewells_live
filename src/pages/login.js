import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import toast from 'react-hot-toast';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom"
import "../style/auth.css"
import { useAuth } from '../context/auth';

const Login = () => {

  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();
  const location = useLocation();

  const handleSubmit =  async(e) => {
    e.preventDefault();
    // console.log(email,password);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{phone,password})
      if(res && res.data.success){
        toast.success( res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
        if (res.data.user.role === 1) {
          navigate("/dashboard/admin");
        } else {
          navigate("/dashboard/user");
        }
      }else{

        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
    }
    
  }

  return (
    <Layout title={"Login - Healet"}>
      <div className="form-container">
        <form onSubmit={handleSubmit} style={{textAlign:"right"}}>
        <h1 className="title">Login</h1>
          <div className="mb-3">
          <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="form-control"
              id="exampleInputPhone1"
              aria-describedby="phoneHelp"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
         
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              style={{width:"100px",fontSize:"10px"}}
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
     
    </Layout>
  );
}

export default Login