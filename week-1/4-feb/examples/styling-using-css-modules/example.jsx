import React from "react";
import styles from "./index.css";
// Såhär kan du också importera din css-fil, 
// och då använder du något som kallas "css modules"

// Istället för att importera din css-fil "som vanligt",
// så kan du importera den på detta sättet.
//
// På så sätt blir dina klasser, exempelvis .container
// något du kan komma åt genom styles-objektet du definierar
// i din import. 
// 
// När det senare packas ihop och visas i webbläsaren
// så kommer den automatiskt skapa en css-klass som inte 
// riskerar att hamna i konflikt med någon annan css-klass.
//
// Smidigt!

function Example() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        deleniti?
      </p>
      <button className={styles.button}>I'm a button</button>
    </div>
  );
}

export default Example;