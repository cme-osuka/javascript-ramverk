import React, { useState, useEffect } from "react";

function UpdateOnPropsChange(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://www.reddit.com/r/${props.subreddit}.json`);

      const json = await res.json();

      setPosts(json.data.children.map((c) => c.data));
    }

    fetchData();
  }, [props.subreddit]);


  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default UpdateOnPropsChange;