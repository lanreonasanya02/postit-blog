import React from "react";

const Create = () => {
  return (
    <main className="welcome my-5">
      <h1 className="fw-bold mb-5">Create New Story</h1>

      <form action="/dashboard" method="post">
        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="title" className="fw-bold">
              Title:
            </label>
          </div>
          <div className="col-md-4">
            <input type="text" name="title" id="title" placeholder="Title" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="category" className="fw-bold">
              Category:
            </label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Tags"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="title" className="fw-bold">
              Cover Image:{" "}
            </label>
          </div>
          <div className="col-md-4">
            <input type="file" name="file" id="file" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="title" className="fw-bold">
              Your Story:{" "}
            </label>
          </div>
          <div className="col-md-4">
            <textarea
              name="text"
              id="text"
              cols="40"
              rows="5"
              placeholder="Write your story..."
            ></textarea>
          </div>
        </div>

        <div className="mt-5">
          <button type="submit" className="btn btn-primary ms-5 me-4">
            Publish Story
          </button>
          <button type="submit" className="btn btn-outline-primary">
            Save in drafts
          </button>
        </div>
      </form>
    </main>
  );
};

export default Create;
