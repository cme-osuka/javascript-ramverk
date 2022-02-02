import React, { useEffect, useState } from "react";
import "./App.css";

import Button from "./Button.js";

function App(props) {
  const [text, setText] = useState("Det här är en text");

  useEffect(() => {
    console.log("Detta skrivs ut när komponenten renderas");
  }, [])

  return (
    <div>
      <Button text="Detta är en text från props" /> 
      
    </div>
  );
}

/*class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };
  }

  // this.setState({}) för att uppdatera

  render() {
    return (<div>Detta är en React-app</div>);
  }
}*/

export default App;
