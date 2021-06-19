import React from "react";

const Comments = (props) => {
  const { name, email, body } = props.comment;
  return (
    <div>
      <h4>
        Name: {name} - Email: {email}
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default Comments;
