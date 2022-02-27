import React, { useState } from 'react';
import { useRecoilState } from "recoil";
import { userState, authState } from "../recoil/auth/atom";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(authState);

  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  
  async function updateUser() {
    const result = await fetch("https://tangible-glaze-bonnet.glitch.me/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        age: age
      })
    })
    
    const json = await result.json();
    setUser(json);
    navigate("/");
  }

  return (
    <div>
      <h1>Edit profile</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" value={age} onChange={e => setAge(e.target.value)} /> 
      <button onClick={() => navigate("/")}>Avbryt</button>
      <button onClick={() => updateUser()}>Spara</button>
    </div>
  )
}

export default EditUser