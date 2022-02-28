import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost } from "../api";
import ReactMarkdown from "react-markdown";

function Post() {
  const [post, setPost] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  // Här använder jag useCallback för att undvika
  // att min callback körs om när React renderar om
  const fetchData = useCallback(async () => {
    const res = await getPost(params.id).catch((reason) => {
      navigate("/404");
    });
    setPost(res.data.data.attributes);
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [params.id]);

  // Om vi inte har någon post-information eller väntar på vår fetchData
  // så skriver vi ut en liten laddnings-text
  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">Tillbaka</Link>
      <h1>{post.title}</h1>
      {post.image.data ? (
        <img
          height="200px"
          alt="kattbild"
          src={`https://cme-blog.osuka.dev${post.image.data.attributes.url}`}
        />
      ) : null}
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <p>Author: {post.author}</p>
    </div>
  );
}

export default Post;
