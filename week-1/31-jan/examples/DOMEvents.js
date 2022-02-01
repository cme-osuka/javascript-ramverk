// Import React from "react";

class MyButton extends React.Component {
  render() {
    return React.createElement(
      "button",
      { onClick: () => console.log("You clicked!")}, 
      "Click me")
  }
}

ReactDOM.render(React.createElement(MyButton), target);