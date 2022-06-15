import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row mt-5 pt-5 g-2">
          <div className="col-md-5 pe-3">
            <h5 className="fw-bold">
              About Post<span>it</span>.
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              officia autem, accusantium necessitatibus quasi reprehenderit
              magnam cupiditate? Accusantium modi, maiores quas eligendi, enim
              voluptatibus, quaerat iure debitis odit accusamus aperiam.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Menu</h5>
            <div className="links">
              <div>
                <Link to="/">Home</Link>

                <Link to="/stories">Stories</Link>

                <Link to="/stories">Trending Stories</Link>

                <Link to="/stories">Popular Stories</Link>
              </div>
              <div>
                <Link to="/register">Sign Up</Link>

                <Link to="/login">Log In</Link>

                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Subscribe to our newsletter</h5>
            <div className="input-email-3 ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="ps-2 input3"
              />
              <Link
                className="nav-link btn btn-sm button2 btn3 text-white px-3"
                to="/register"
              >
                Subscribe{" "}
                <span>
                  <i class="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="underline mt-4"></div>
        <div className="icons py-3">
          <Link to="/">Terms and Policy</Link>
          <Link to="/">
            <i class="bi bi-twitter"></i>
          </Link>
          <Link to="/">
            <i class="bi bi-facebook"></i>
          </Link>
          <Link to="/">
            <i class="bi bi-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
