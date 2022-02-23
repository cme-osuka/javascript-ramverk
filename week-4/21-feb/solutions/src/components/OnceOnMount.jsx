import React, { useEffect, useState } from "react";

function OnceOnMount() {
  // State som håller postsen
  const [posts, setPosts] = useState([]);

  // useEffect som hämtar data on mount
  useEffect(() => {
    async function getData() {
      const result = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await result.json();
      setPosts(json.data.children);
    }

    getData();
  }, []);

  // Rendera ut postsen i return
  return (
    <ul>
      {
        posts.map((post) => <li key={post.data.id}>{post.data.title}</li>)
      }
    </ul>
  );
}

export default OnceOnMount;
