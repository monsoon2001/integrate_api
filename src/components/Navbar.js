import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "black", padding: "6px" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/verify-otp"
            style={{ textDecoration: "none", color: "white" }}
          >
            Verify OTP
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
