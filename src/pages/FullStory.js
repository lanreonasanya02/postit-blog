import React from "react";
import cover from "../images/cover.png";
import story2 from "../images/story2.png";

const FullStory = () => {
  return (
    <article className="view-post">
      <div className="card border-0">
        <div className="card-body">
          <p className="tag mt-3">Technology</p>
          <h3 className="card-title my-1 fw-bold">
            The 20 Biggest Fintech Companies In Nigeria 2022
          </h3>
          <div className="card-subtitle d-flex my-2 underline">
            <img
              src={story2}
              alt="image"
              width="5%"
              height="20%"
              className=""
            />
            <p className="ms-2">
              <span className="text-muted">By</span> Maria Davies{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <img src={cover} className="card-img-top cover-image" alt="image" />

          <p className="card-text my-2 lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam
            mollitia, pariatur, ex hic porro placeat ratione ea cumque animi
            quisquam magnam similique repudiandae modi, odit accusamus amet
            earum temporibus vitae. Minus magni dolorum natus animi, provident
            repellendus labore dicta necessitatibus et voluptate officia
            adipisci, tenetur ea placeat cumque eaque!
          </p>

          <p className="card-text lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam
            mollitia, pariatur, ex hic porro placeat ratione ea cumque animi
            quisquam magnam similique repudiandae modi, odit accusamus amet
            earum temporibus vitae. Minus magni dolorum natus animi, provident
            repellendus labore dicta necessitatibus et voluptate officia
            adipisci, tenetur ea placeat cumque eaque!
          </p>

          <p className="card-text lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam
            mollitia, pariatur, ex hic porro placeat ratione ea cumque animi
            quisquam magnam similique repudiandae modi, odit accusamus amet
            earum temporibus vitae. Minus magni dolorum natus animi, provident
            repellendus labore dicta necessitatibus et voluptate officia
            adipisci, tenetur ea placeat cumque eaque!
          </p>
        </div>
      </div>
    </article>
  );
};

export default FullStory;
