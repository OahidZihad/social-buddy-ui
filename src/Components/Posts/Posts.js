import React from "react";
import { Link } from "react-router-dom";

const Posts = (props) => {
  console.log(props);
  const { id, title } = props.post;

  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>Title: {title}</h2>
      <Link to={`/post/id/${id}`}>
        <button>Details of {id}</button>
      </Link>
    </div>
  );
};

export default Posts;
