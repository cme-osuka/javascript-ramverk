import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState, userState } from "../recoil/auth/atom";

function Profile() {
  const [token, setToken] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  async function getUser() {
    const result = await fetch("https://tangible-glaze-bonnet.glitch.me/user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const json = await result.json();
    setUser(json);
  }

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    if (token) {
      getUser()
    }
  }, [token]);

  if (!user) {
    return <h1>Loading..</h1>
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => navigate("/editUser")}>Redigera</button>
      <button onClick={() => setToken("")}>Logout</button>
    </div>
  );
}

export default Profile;
