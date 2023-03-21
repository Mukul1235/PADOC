import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "../Layout";

const Compose = () => {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
    console.log(user);
  };
  // const navigate = useNavigate();

  return (
    <>
      <Layout />
      <div>
        <h1>Compose</h1>
        <form method="post" action="/compose">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={user.title}
              className="form-control"
              name="postTitle"
              onChange={handleChange}
            />
            <label>Post</label>
            <textarea
              className="form-control"
              value={user.content}
              onChange={handleChange}
              name="postInput"
              rows="10"
              cols="50"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Compose;
