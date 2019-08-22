import React from "react";
import DashedInput2 from "../../components/dashedInput2";

class DenemePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "123"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDashedInputChange = this.handleDashedInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleDashedInputChange(value) {
    this.setState({
      inputText: value
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to DenemePage</h1>
        <div>
          <label>Deneme Input</label>
          <input
            className="input"
            type="text"
            name="firstname"
            onChange={this.handleInputChange}
            value={this.state.inputText}
          />
        </div>
        <DashedInput2
          text={this.state.inputText}
          onChange={this.handleDashedInputChange}
        />
      </div>
    );
  }
}

export default DenemePage;
