import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <article className="registration py-5">
      <div className="register text-center my-5">
        <div className="py-5">
          <h1 className="fw-bold">Welcome Back!</h1>

          <h5 className="fw-bold">
            Enter your email address associated with your account.
          </h5>
        </div>

        <div className="mb-5">
          <h5 className="fw-bold">Your Email Address</h5>
          <input type="email" name="email" id="email" className="input-field" />
        </div>

        <div className="mb-5">
          <h5 className="fw-bold">Your Password</h5>
          <input
            type="password"
            name="password"
            id="password"
            className="input-field"
          />
        </div>

        <Link
          className="nav-link btn btn-lg button4 text-white px-5 pb-1"
          to="/dashboard"
        >
          Continue
        </Link>

        <h6 className="sign-in mt-3 fw-bold">
          No account? <Link to="/register"> Sign Up</Link>
        </h6>
      </div>
    </article>
  );
};

export default Login;
