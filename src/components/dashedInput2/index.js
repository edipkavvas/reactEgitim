import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class DashedInput2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: DashedInput2.formatInput(props.text),
      prevText: props.text
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.text !== state.prevText) {
      return {
        prevText: props.text,
        value: DashedInput2.formatInput(props.text)
      };
    }
    return null;
  }

  static formatInput(inputStr) {
    return inputStr
      .replace(/-/g, "")
      .split("")
      .join("-");
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.text !== this.props.text) {
  //     this.setState({
  //       value: this.formatInput(nextProps.text)
  //     });
  //   }
  // }

  // formatInput(inputStr) {
  //   return inputStr
  //     .replace(/-/g, "")
  //     .split("")
  //     .join("-");
  // }

  handleInputChange(event) {
    this.setState({
      value: DashedInput2.formatInput(event.target.value)
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
          className="input2"
          type="text"
          name="firstname"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

DashedInput2.defaultProps = {
  text: ""
};

DashedInput2.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func
};

export default DashedInput2;
