// Import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  render() {
    return React.createElement("p", 
    { style: { color: this.state.color} }, 
    "Hello!")
  }
}
