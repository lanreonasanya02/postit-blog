import React from "react";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

const DashNav = () => {
  return (
    <nav className="dash-nav">
      <div className="dash-logo mb-5 mt-2">
        <Link className="" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Link className="link active" aria-current="page" to="/dashboard">
        <i className="bi bi-house"></i>
      </Link>
      <Link className="link" to="/dashboard/create">
        <i className="bi bi-pencil-square"></i>
      </Link>

      <Link className="link" to="/dashboard/profile">
        <i class="bi bi-person"></i>
      </Link>

      <Link className="link" to="/dashboard">
        <i className="bi bi-bell"></i>
      </Link>

      <Link className="link" to="/dashboard">
        <i class="bi bi-gear"></i>
      </Link>

      <p className="text-center text-white paragraph ">
        <span className="copy me-1">c</span> 2022 Postit.
      </p>
    </nav>
  );
};

export default DashNav;
