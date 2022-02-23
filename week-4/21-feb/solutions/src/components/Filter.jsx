import React, { useEffect, useState } from "react";

function Filter() {
  // State som håller postsen
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  // useEffect som hämtar data on mount
  useEffect(() => {
    async function getData() {
      const result = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await result.json();
      setPosts(json.data.children);
    }

    getData();
  }, []);

  useEffect(() => {
    const filteredData = posts.filter((post) =>
      post.data.title.includes(searchPhrase)
    );

    setFilteredPosts(filteredData);
  }, [searchPhrase, posts]);

  // Rendera ut postsen i return
  return (
    <div>
      <input
        type="text"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.data.id}>{post.data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
