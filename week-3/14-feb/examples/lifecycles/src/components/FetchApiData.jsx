import React, { useState, useEffect } from "react";

function FetchApiData() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log("useEffect start");

    async function fetchData() {
      const res = await fetch(
        "https://www.reddit.com/r/reactjs.json"
      );

      const json = await res.json();

      setPosts(json.data.children.map(c => c.data));
    }

    fetchData();
  }, [])

  return <ul>
    {
      posts.map(post => {
        return <li key={post.id}>{post.title}</li>
      })
    }
  </ul>
}

export default FetchApiData;