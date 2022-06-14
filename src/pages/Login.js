import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <article className="registration">
      <div className="register text-center my-5">
        <div className="py-5">
          <h1 className="fw-bold">Welcome Back</h1>

          <h4>Enter your email address associated with your account.</h4>
        </div>

        <div className="mb-5">
          <h5>Your Email Address</h5>
          <input type="email" name="email" id="email" className="input-field" />
        </div>

        <div className="mb-5">
          <h5>Your Password</h5>
          <input
            type="password"
            name="password"
            id="password"
            className="input-field"
          />
        </div>

        <Link
          className="nav-link btn btn-lg button4 text-white px-5 pb-1"
          to="/stories"
        >
          Continue
        </Link>

        <h4 className="sign-in mt-3">
          No account? <Link to="/register"> Sign Up</Link>
        </h4>
      </div>
    </article>
  );
};

export default Login;