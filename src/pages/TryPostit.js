import React from "react";
import { Link } from "react-router-dom";
import trylogo from "../images/trylogo.png";

const TryPostit = () => {
  return (
    <section className="container mt-5 d-none d-md-block">
      <div className="section p-5 text-center">
        <img src={trylogo} alt="logo" />
        <h3 className="mt-4">
          Do you want to write or discover stories from writers on any topic?
        </h3>
        <div className="input-email-2 mt-5 ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="ps-2"
          />
          <Link
            className="nav-link btn btn-lg button2 text-white px-5 pb-1"
            to="/register"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TryPostit;
