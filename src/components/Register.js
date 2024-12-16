import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(false);

  async function handleRegister() {
    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("phone_number", number);
      formData.append("full_name", fullName);
      formData.append("profile_image", image);
      formData.append("password", password);
      formData.append("confirm_password", confirmPassword);

      const response = await fetch(
        "https://staging.tishyandco.com.au/v1/users/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed.");
      }

      const data = await response.json();
      console.log("Registration success.", data);

      const otpResponse = await fetch(
        "https://staging.tishyandco.com.au/v1/users/email_verify_request/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!otpResponse.ok) {
        throw new Error("Failed to send OTP");
      }

      const otpData = await otpResponse.json();
      console.log("OTP sent.", otpData);
      setOtp(true);
      alert("registration successful. go to verify otp page.");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Enter email..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <input
        type="text"
        placeholder="Enter phone number..."
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <br />
      <input
        type="text"
        placeholder="Enter full name..."
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <br />
      <label htmlFor="">
        Choose profile image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <br />
      <input
        type="password"
        placeholder="Enter password..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm password..."
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
