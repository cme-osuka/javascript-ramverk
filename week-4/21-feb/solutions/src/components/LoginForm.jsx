import React, { useEffect, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function passwordIsValid(password) {
    console.log(password);
    if (password.length > 6 && password.length < 20) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    setEmailValid(emailIsValid(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(passwordIsValid(password));
  }, [password]);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(
      "https://mocki.io/v1/2edc87db-8dbf-4cce-982f-66279724f6ce",
      {
        method: "GET",
        /*VID POST 
        body: {
          email: email,
          password: password,
        },*/
      }
    );
    const json = await res.json();

    console.log(json);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        style={{ border: emailValid ? "none" : "1px solid red" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        style={{ border: passwordValid ? "none" : "1px solid red" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
