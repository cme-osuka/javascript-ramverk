// Import React from "react";

class Welcome extends React.Component {
  render() {
    const name = this.props.name;
    return React.createElement("p", {}, `Welcome ${name}`)
  }
}
