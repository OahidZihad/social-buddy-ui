import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h2>Details of ID: {postId}</h2>
      <h2>User ID: {post.userId}</h2>
      <h3>Title: {post.title}</h3>
      <h4>Post: {post.body}</h4>

      <h1>Total Comments: {comments.length}</h1>
      {comments.map((comment) => (
        <Comments comment={comment}></Comments>
      ))}
    </div>
  );
};

export default PostDetails;
