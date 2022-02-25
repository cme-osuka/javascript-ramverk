import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function getToken() {
    const result = await fetch("https://tangible-glaze-bonnet.glitch.me/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    if (result.status === 400) {
      console.log("Username or password incorrect");
      return;
    }
    
    const json = await result.json();
    console.log(json);


  }


  return (
    <div>
      <input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={getToken}>Logga in</button>
    </div>
  );
}

export default Login;
