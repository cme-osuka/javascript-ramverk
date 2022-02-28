import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil/auth/atom";
import { createPost } from "../api";

function NewPost() {
  const auth = useRecoilValue(authState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleCreate() {
    const res = await createPost(
      {
        data: {
          title: title,
          content: content,
          author: auth.user.username,
        },
      },
      auth.token
    );
    console.log(res);
  }

  return (
    <div style={styles.container}>
      <h2>Ny Post</h2>

      <div style={styles.box}>
        <input
          placeholder="title"
          style={styles.input}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <MDEditor value={content} onChange={setContent} style={styles.input} />
        <button style={styles.button} onClick={handleCreate}>
          Skapa post
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  box: {
    background: "#f3f3f3",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "5px",
    padding: "24px",
  },
  input: {
    outline: "none",
    border: "none",
    margin: "6px 0",
    padding: "4px 8px",
    borderRadius: "2px",
  },
  button: {
    border: "none",
    background: "#d3d3d3",
    padding: "4px 8px",
    width: "156px",
    borderRadius: "2px",
    cursor: "pointer",
  },
};

export default NewPost;
