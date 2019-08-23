import React from "react";
import { connect } from "react-redux";
import denemeState from "../../states/deneme/denemeState";

class AlternativePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    denemeState.setValue(event.target.value);
  }

  handleIncrement() {
    denemeState.increment();
  }

  handleDecrement() {
    denemeState.decrement();
  }

  render() {
    const { counterProp } = this.props;

    return (
      <div>
        <div>
          <label>Set Counter Value</label>
          <input
            className="input"
            type="text"
            name="counter"
            onChange={this.handleInputChange}
            value={this.props.counterProp}
          />
        </div>
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
        <div>
          <span>{counterProp}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    counterProp: state.denemeState.count
  };
}

export default connect(mapStateToProps)(AlternativePage);
