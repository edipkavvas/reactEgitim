import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const MyButton = (props, context) => {
  const { text, ...otherProps } = props;
  const { label, onContextClick } = context;

  return (
    <button
      onClick={() => onContextClick("1")}
      className="button"
      {...otherProps}
    >
      {text || label}
    </button>
  );
};

MyButton.defaultProps = {};

MyButton.propTypes = {
  text: PropTypes.string
};

MyButton.contextTypes = {
  label: PropTypes.string,
  onContextClick: PropTypes.func
};

export default MyButton;
