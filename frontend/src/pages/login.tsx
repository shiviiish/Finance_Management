//login

import {toast} from "react-toastify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css"; // Common styles for login and registration

const Login: React.FC = () => {
  const [input, setInput] = useState({ Email: "", Password: ""});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
  
    try {
      const { data } = await axios.post("http://localhost:5000/api/users/login", input, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      console.log(data.token);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);

      toast.success("Login successful!");
      navigate("/");
    } catch (err: unknown) {  
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Login failed! Please check your credentials.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>} {}
      <form onSubmit={handleSubmit}>
        <input type="Email" name="Email" placeholder="Email" value={input.Email} onChange={handleChange} required />
        <input type="Password" name="Password" placeholder="Password" value={input.Password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => navigate("/register")}>Sign up</span></p>
    </div>
  );
};

export default Login;