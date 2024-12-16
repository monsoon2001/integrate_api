import { useState } from "react";

function VerifyOtp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  async function handleVerifyOtp() {
    try {
      const response = await fetch(
        "https://staging.tishyandco.com.au/v1/users/verify_email_otp/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      if (!response.ok) {
        console.log("OTP verification failed!");
      }

      const data = await response.json();

      console.log("OTP verification success.", data);
      alert("Otp verified. Go to login page.");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Verify Otp</h1>
      <input
        type="enail"
        placeholder="Enter email..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <input
        type="text"
        placeholder="Enter otp..."
        onChange={(e) => setOtp(e.target.value)}
        value={otp}
      />
      <br />
      <button onClick={handleVerifyOtp}>Verify</button>
    </div>
  );
}

export default VerifyOtp;
