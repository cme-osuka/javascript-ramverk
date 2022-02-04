import React from "react";
import "./index.css";
// Såhär importerar du din css-fil

// I detta exemplet kan du se hur du importerar en vanlig 
// css-fil, och använder klassnamn för att styla dina element.
//
// Stora skillnaden i React är att du istället behöver använda
// className istället för class i vanliga html-taggar.
// Det är för att allt vi skriver i React egentligen är Javascript,
// och där är class ett reserverat ord. 
// Andra reserverade ord är exempelvis for, som i React istället blir
// htmlFor.

function Example() {
  return (
    <div className="container">
      <h1 className="title">Hello World</h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        deleniti?
      </p>
      <button className="button">I'm a button</button>
    </div>
  );
}

export default Example;