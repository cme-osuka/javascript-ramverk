import axios from "axios";

export async function login(username, password) {
  const data = await axios.post("https://cme-blog.osuka.dev/api/auth/local", {
    identifier: username,
    password: password,
  });

  return data;
}

export async function register() {
  const res = await axios.post(
    "https://cme-blog.osuka.dev/api/auth/local/register",
    {
      username: "oscar",
      email: "oscar@osuka.dev",
      password: "testpassword",
    }
  );

  console.log(res);
}

export async function getAllPosts() {
  const result = await axios.get(
    "https://cme-blog.osuka.dev/api/posts?populate=*"
  );

  return result;
}

export async function getPost(id) {
  return await axios.get(
    `https://cme-blog.osuka.dev/api/posts/${id}?populate=*`
  );
}

export async function createPost(obj, token) {
  const result = await axios.post(
    "https://cme-blog.osuka.dev/api/posts",
    {
      data: {
        title: "Ny post",
        content: "Detta är vår nya posts content",
        author: "Oscar",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result;
}
