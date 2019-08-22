import React from "react";
import PropTypes from "prop-types";
import MyButton from "../../components/myButton";

class ButtonWithDescription extends React.Component {
  render() {
    const { description } = this.props;
    const { label } = this.context;

    return (
      <div>
        <h1>{description}</h1>
        <span>{label}</span>
        <div>
          <MyButton />
        </div>
      </div>
    );
  }
}

ButtonWithDescription.defaultProps = {};

ButtonWithDescription.propTypes = {
  description: PropTypes.string
};

ButtonWithDescription.contextTypes = {
  label: PropTypes.string
};

export default ButtonWithDescription;
