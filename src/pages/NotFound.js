import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <article className="text-center mt-5 bg-white">
      <h1 className="display-1 text-danger">404 Error</h1>
      <p className="lead">Ooops.....Page Not Found</p>
      <p>
        Click <Link to="/">here</Link> to return home{" "}
      </p>
    </article>
  );
};

export default NotFound;
