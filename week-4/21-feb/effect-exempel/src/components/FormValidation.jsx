import React, { useState, useEffect } from "react";

function FormValidation() {
  const [text, setText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [textValidation, setTextValidation] = useState("");
  const [checked, setChecked] = useState(false);

  function handleChange(event) {
    const { target } = event; // event.target
    const { value, type, name } = target; // event.target.value, event.target.type

    if (name === "username") setText(value);
    if (name === "password") setSecondText(value);
    if (type === "checkbox") setChecked(target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    fetch("/", {
      method: "POST",
      body: formData
    })
  }

  useEffect(() => {
    console.log("effekten körs");

    if (text.length < 5 || text.length > 20) {
      setTextValidation(
        "Din text måste vara fler än 5 tecken och mindre än 20 tecken."
      );
    } else {
      setTextValidation("");
    }
  }, [text]);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" id="username" type="text" onChange={handleChange} value={text} />
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={secondText}
      />
      <p>{textValidation}</p>
      <input type="checkbox" name="consent" onChange={handleChange} checked={checked} />
      <p>Om det inte stämmer</p>
      <input type="submit" />
    </form>
  );
}

export default FormValidation;
