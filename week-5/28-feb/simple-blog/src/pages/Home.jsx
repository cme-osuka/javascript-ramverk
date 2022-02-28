import React, { useEffect, useCallback } from "react";
import { getAllPosts } from "../api";
import { useRecoilState } from "recoil";
import { contentState } from "../recoil/content/atom";
import PostPreview from "../components/PostPreview";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  const [content, setContent] = useRecoilState(contentState);

  const fetchPosts = useCallback(async () => {
    const { data } = await getAllPosts();
    setContent({
      posts: data.data,
    });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  if (content.posts.length === 0) return <div>Loading..</div>;

  return (
    <div style={styles.container}>
      <h2>Featured</h2>

      <Swiper style={styles.swiper}>
        {content.posts.map((post) => (
          <SwiperSlide>
            <PostPreview key={post.id} post={post} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>Posts</h2>
      <div style={styles.posts}>
        {content.posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  posts: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
  },
  swiper: {
    width: "60vw",
    border: "5px solid #f6f6f6",
    margin: "0 0 12px 0",
  },
};

export default Home;
