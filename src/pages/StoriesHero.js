import React from "react";
import story from "../images/story.png";
import { Link } from "react-router-dom";

const StoriesHero = () => {
  return (
    <section className="stories-section">
      <div className="container-fluid">
        <div className="row align-items-center ">
          <div className="col-lg-6 head">
            <h1 className="display-2 fw-bolder">
              You’ve got a story,
              <br />
              Post<span>it</span>.
            </h1>

            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              saepe eum officiis officia aliquam, ad, voluptas dignissimos sit
              omnis, inventore labore?
            </p>

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

          <div className="col-lg-6 d-none d-lg-block">
            <img src={story} alt="story" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesHero;
