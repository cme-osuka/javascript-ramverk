import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { login } from "../api";
import { authState } from "../recoil/auth/atom";

function Login() {
  const [auth, setAuth] = useRecoilState(authState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin() {
    const data = await login(username, password);

    if (data.status === 200) {
      setAuth({
        user: data.data.user,
        token: data.data.jwt,
      });
      navigate("/");
    }
  }

  return (
    <div style={styles.container}>
      <h2>Logga in</h2>

      <div style={styles.box}>
        <input
          placeholder="username"
          style={styles.input}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          style={styles.input}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>
          Logga in
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    flexDirection: "column",
  },
  box: {
    height: "200px",
    width: "300px",
    background: "#f3f3f3",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "5px",
  },
  input: {
    outline: "none",
    border: "none",
    margin: "6px 0",
    padding: "4px 8px",
    borderRadius: "2px",
  },
  button: {
    border: "none",
    background: "#d3d3d3",
    padding: "4px 8px",
    width: "156px",
    borderRadius: "2px",
    cursor: "pointer",
  },
};

export default Login;
