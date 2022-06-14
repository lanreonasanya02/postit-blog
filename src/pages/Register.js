import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <article className="registration">
      <div className="register text-center my-5">
        <div className="mb-5">
          <h1 className="fw-bold">
            Join Post<span>It</span>.
          </h1>

          <h4>Enter your email address to create an account on Postit.</h4>
        </div>

        <div className="mb-5">
          <h5>Your Username</h5>
          <input type="name" name="name" id="name" className="input-field" />
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
          to="/login"
        >
          Continue
        </Link>

        <h4 className="sign-in mt-3">
          Already have an account? <Link to="/login"> Sign In</Link>
        </h4>
      </div>
    </article>
  );
};

export default Register;
