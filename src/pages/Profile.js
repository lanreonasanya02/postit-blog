import React from "react";
import profilePic from "../images/lanre.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <main className="welcome3 my-5 container">
      <h1 className="fw-bold mb-5">Profile</h1>

      <div className="card-subtitle d-flex my-3 profile-details">
        <img
          src={profilePic}
          alt="image"
          width="8%"
          className="profile-pic me-2"
        />

        <div className="profile-name">
          <h3 className="ms-2 fw-bold">Lanre Adeolu</h3>
          <p className="ms-2 text-muted">Software Engineer & Blogger</p>
        </div>
      </div>

      <div className="personal-details">
        <h5 className="fw-bold underline3 mt-5 mb-4">Personal Details</h5>
        <form action="/dashboard" method="post">
          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="title">Full Name</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Lanre Adeolu"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="category">Display Name</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="cruzer9th"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="title">Bio</label>
            </div>
            <div className="col-md-4">
              <textarea
                name="text"
                id="text"
                cols="40"
                rows="5"
                placeholder="Write something about yourself"
              ></textarea>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="title">What I do</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="text"
                id="file"
                placeholder="Software Engineer & Blogger"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="title">Website</label>
            </div>
            <div className="col-md-4">
              <input type="text" name="file" id="file" />
            </div>
          </div>
          <div className="mt-5">
            <Link to="/login" className="sign-out">
              <i class="bi bi-box-arrow-right me-2"></i>
              Sign Out
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Profile;
