import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 head">
            <h1 className="display-1">Stay Curious.</h1>

            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              saepe eum officiis officia aliquam, ad, voluptas dignissimos sit
              omnis, inventore labore?
            </h3>

            <div className="input-email mt-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="ps-2 first-input d-none d-xl-block"
              />
              <Link
                className="nav-link btn btn-lg button2 text-white px-5 pb-1 d-block"
                to="/register"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
