import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import MyButton from "../../components/myButton";

class ChooseTeam extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.onChange);
  }

  handleButtonClick(param) {
    if (this.props.onChange && typeof this.props.onChange === "function") {
      this.props.onChange(param);
    }
  }

  render() {
    const { description } = this.props;

    return (
      <div>
        <h1>{description}</h1>
        <div>
          <MyButton onClick={() => this.handleButtonClick("1")} />
          <MyButton
            text="Button2"
            onClick={() => this.handleButtonClick("2")}
          />
          <MyButton
            text="Button3"
            onClick={() => this.handleButtonClick("3")}
          />
        </div>
      </div>
    );
  }
}

ChooseTeam.defaultProps = {};

ChooseTeam.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func
};

export default ChooseTeam;
