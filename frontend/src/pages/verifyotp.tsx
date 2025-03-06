import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS_primary/auth.css";

const VerifyOTP: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [Email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      toast.error("Email not found. Please register again.");
      navigate("/register");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verify OTP button clicked");
    console.log(`${Email}`);
    if (!Email) {
      toast.error("Email not found. Please register again.");
      return;
    }

    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/verify-otp",
        {
          Email: Email,
          otp,
        }
      );
      toast.success(response.data.message);

      navigate("/login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "OTP verification failed");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h2>Verify OTP</h2>
      <p>Enter the OTP sent to your email</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
