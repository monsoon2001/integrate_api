import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await fetch(
        "https://staging.tishyandco.com.au/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response) {
        console.log("Registration failed!");
      }

      const data = await response.json();

      console.log("Login success.", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="enail"
        placeholder="Enter email..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Signin;
