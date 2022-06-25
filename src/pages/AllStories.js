import React from "react";
import { Link } from "react-router-dom";
import story1 from "../images/story1.png";
import story2 from "../images/story2.png";
import story3 from "../images/story3.png";
import story4 from "../images/building.png";
import story5 from "../images/rock.png";
import profilePic from "../images/lanre.jpg";

const AllStories = () => {
  return (
    <main className="main-story-section container ">
      <div className="card border-0">
        <div className="image-img">
          <img src={story1} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Technology</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Fintech Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>

      <div className="card border-0">
        <div className="image-img">
          <img src={story2} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Sports</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Fashion Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>

      <div className="card border-0">
        <div className="image-img">
          <img src={story3} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Fashion & Textile</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Sporting Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>

      <div className="card border-0">
        <div className="image-img">
          <img src={story4} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Arts & Culture</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Sporting Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>

      <div className="card border-0">
        <div className="image-img">
          <img src={story5} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Banking</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Sporting Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>

      <div className="card border-0">
        <div className="image-img">
          <img src={story1} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Investments</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Sporting Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>

      <div className="card border-0">
        <div className="image-img">
          <img src={story4} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Real Estate</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Sporting Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>

      <div className="card border-0">
        <div className="image-img">
          <img src={story2} className="card-img-top" alt="image" />
          <h6 className="tag image-text">Hospitality</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">
            The 20 Biggest Sporting Companies In Nigeria 2022
          </h5>
          <div className="card-subtitle d-flex my-2">
            <img src={profilePic} alt="image" width="15%" className="" />
            <p className="ms-2">
              <span className="text-muted">By</span> Lanre Adeolu{" "}
              <span className="text-muted">- May 21, 2022</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quia quas fugiat perferendis nobis repellat
            veritatis, accusantium at maxime atque?
          </p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AllStories;
