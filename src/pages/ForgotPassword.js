import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../style/auth.css"
import axios from 'axios';

const ForgotPassword = () => {
    const [phone,setPhone] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit =  async(e) => {
      e.preventDefault();
    //   console.log(email,password);
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{phone,newPassword,answer})
        if(res && res.data.success){
          toast.success( res.data && res.data.message);
          navigate("/login")
        }else{
  
          toast.error(res.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong')
      }
      toast.success('Registeration successfull')
    }
  return (
    <Layout title={"Forgot password - Healet"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h1 className="title">Reset Password</h1>
          <div className="mb-3">
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="form-control"
              id="exampleInputPhone1"
              aria-describedby="phoneHelp"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Who is your best friend"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ForgotPassword