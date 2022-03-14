import React from "react";
import PropTypes from "prop-types";

function ExampleComponent(props) {
  return <div>ExampleComponent</div>;
}

ExampleComponent.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.oneOf([
    "Hej",
    "Hejdå"
  ]),
  data: PropTypes.exact({
    breakfast: PropTypes.string,
    hasEaten: PropTypes.bool
  })
};

export default ExampleComponent;
