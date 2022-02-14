import React, { useState, useEffect } from "react";

function Filtering() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://www.reddit.com/r/reactjs.json");

      const json = await res.json();

      setPosts(json.data.children.map((c) => c.data));
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setFilteredPosts(posts.filter((post) => post.title.includes(searchPhrase)));
    }
  }, [searchPhrase]);

  return (
    <div>
      <input type="text" onChange={event => setSearchPhrase(event.target.value)} />
      <ul>
        {filteredPosts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Filtering;
