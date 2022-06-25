import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/lanre.jpg";

const Welcome = () => {
  return (
    <section className="welcome welcome2 pt-5">
      <div className="row">
        <div className="col-lg-5">
          <div className="card-subtitle d-flex my-3 profile-details">
            <img
              src={profilePic}
              alt="image"
              width="15%"
              className="profile-pic me-2"
            />

            <div className="profile-name">
              <h3 className="ms-2 fw-bold">Welcome Lanre!</h3>
            </div>
          </div>
        </div>

        <div className="col-lg-5 text-end">
          <Link
            to="/dashboard/profile"
            className="col-lg-5 btn btn-sm btn-primary"
          >
            Edit Profile{" "}
            <span>
              <i class="bi bi-pencil ms-2"></i>
            </span>
          </Link>
        </div>
      </div>

      <div>
        <table class="table border-0">
          <tbody>
            <tr>
              <td className="text-muted">Posts</td>
              <td className="text-primary fw-bold">56</td>
            </tr>
            <tr>
              <td className="text-muted">Likes</td>
              <td className="text-primary fw-bold">75</td>
            </tr>
            <tr>
              <td className="text-muted">Followers</td>
              <td className="text-primary fw-bold">345</td>
            </tr>

            <tr>
              <td className="text-muted">Following</td>
              <td className="text-primary fw-bold">170</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h5 className="fw-bold underline3 mt-5 mb-4">All Your Posts</h5>

        <div className="row mt-5">
          <div className="col-lg-5">
            <div className="card-body">
              <h5 className="card-title my-1 fw-bold">
                The 20 Biggest Fintech Companies In <br /> Nigeria 2022
              </h5>

              <p className="card-text my-2 text-muted pe-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus quia quas fugiat perferendis nobis repellat
                veritatis, accusantium at maxime atque?
              </p>
              <p className="text-muted fst-italic">Published</p>
            </div>
          </div>

          <div className="col-lg-5 text-end">
            <Link to="/viewStory" className="btn btn-sm btn-primary me-4">
              View Story
            </Link>
            <Link
              to="/viewStory"
              className="btn btn-sm btn-outline-primary px-3"
            >
              Delete
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="card-body">
              <h5 className="card-title my-1 fw-bold">
                The 20 Biggest Agricultural Companies In <br /> Nigeria 2022
              </h5>

              <p className="card-text my-2 text-muted pe-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus quia quas fugiat perferendis nobis repellat
                veritatis, accusantium at maxime atque?
              </p>
              <p className="text-muted fst-italic">Published</p>
            </div>
          </div>

          <div className="col-lg-5 text-end">
            <Link to="/viewStory" className="btn btn-sm btn-primary me-4">
              View Story
            </Link>
            <Link
              to="/viewStory"
              className="btn btn-sm btn-outline-primary px-3"
            >
              Delete
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="card-body">
              <h5 className="card-title my-1 fw-bold">
                The 20 Biggest Crypto Companies In <br /> Nigeria 2022
              </h5>

              <p className="card-text my-2 text-muted pe-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus quia quas fugiat perferendis nobis repellat
                veritatis, accusantium at maxime atque?
              </p>
              <p className="text-muted fst-italic">Published</p>
            </div>
          </div>

          <div className="col-lg-5 text-end">
            <Link to="/viewStory" className="btn btn-sm btn-primary me-4">
              View Story
            </Link>
            <Link
              to="/viewStory"
              className="btn btn-sm btn-outline-primary px-3"
            >
              Delete
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="card-body">
              <h5 className="card-title my-1 fw-bold">
                The 20 Biggest Real Estate Companies In <br /> Nigeria 2022
              </h5>

              <p className="card-text my-2 text-muted pe-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus quia quas fugiat perferendis nobis repellat
                veritatis, accusantium at maxime atque?
              </p>
              <p className="text-muted fst-italic">Published</p>
            </div>
          </div>

          <div className="col-lg-5 text-end">
            <Link to="/viewStory" className="btn btn-sm btn-primary me-4">
              View Story
            </Link>
            <Link
              to="/viewStory"
              className="btn btn-sm btn-outline-primary px-3"
            >
              Delete
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="card-body">
              <h5 className="card-title my-1 fw-bold">
                The 20 Biggest Sports Companies In <br /> Nigeria 2022
              </h5>

              <p className="card-text my-2 text-muted pe-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus quia quas fugiat perferendis nobis repellat
                veritatis, accusantium at maxime atque?
              </p>
              <p className="text-muted fst-italic">Published</p>
            </div>
          </div>

          <div className="col-lg-5 text-end">
            <Link to="/viewStory" className="btn btn-sm btn-primary me-4">
              View Story
            </Link>
            <Link
              to="/viewStory"
              className="btn btn-sm btn-outline-primary px-3"
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
