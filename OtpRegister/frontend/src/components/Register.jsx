import  { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1: Registration, Step 2: OTP Verification

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", { email, password });
      alert(response.data.message);
      if (response.data.success) setStep(2);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleOtpVerify = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", { email, otp });
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {step === 1 && (
        <>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Register</button>
        </>
      )}
      {step === 2 && (
        <>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleOtpVerify}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default Register;
