// Import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
    this.updateColor = this.updateColor.bind(this);
  }

  updateColor() {
    this.setState({ color: blue });
  }

  render() {
    return React.createElement("p", { 
      style: { color: this.state.color},
      onClick: () => this.updateColor
    }, "Hello!")
  }
}
