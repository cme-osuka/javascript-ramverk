import React, { useState } from "react";
import styles from "./inputbox.module.css";

function InputBox(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" onChange={handleChange} value={name} />
      <button className={styles.button} onClick={() => props.add(name)}>Lägg till</button>
    </div>
  );
}

export default InputBox;
