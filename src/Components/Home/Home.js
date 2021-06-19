import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Posts from "../Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Total Posts {posts.length}</h1>
      {posts.map((post) => (
        <Posts post={post}></Posts>
      ))}
    </div>
  );
};

export default Home;
