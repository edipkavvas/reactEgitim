import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class DashedInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.formatInput(props.text)
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      this.setState({
        value: this.formatInput(nextProps.text)
      });
    }
  }

  formatInput(inputStr) {
    return inputStr
      .replace(/-/g, "")
      .split("")
      .join("-");
  }

  handleInputChange(event) {
    this.setState({
      value: this.formatInput(event.target.value)
    });

    if (this.props.onChange) {
      this.props.onChange(event.target.value.replace(/-/g, ""));
    }
  }

  render() {
    return (
      <div>
        <label>Deneme Input</label>
        <input
          value={this.state.value}
          className="input"
          type="text"
          name="firstname"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

DashedInput.defaultProps = {
  text: ""
};

DashedInput.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func
};

export default DashedInput;
