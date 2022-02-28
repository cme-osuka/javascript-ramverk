import React from "react";
import { Link } from "react-router-dom";

function PostPreview({ post }) {
  return (
    <div style={styles.container}>
      <h1>{post.attributes.title}</h1>
      <Link to={`/post/${post.id}`}>Läs mer</Link>
    </div>
  );
}

const styles = {
  container: {
    border: "3px solid #f3f3f3",
    padding: "16px",
  },
};
export default PostPreview;
