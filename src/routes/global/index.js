import React from "react";
import { connect } from "react-redux";
import counterState from "../../states/counter/counterState";
import "./style.css";

class GlobalStatePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleServiceCall = this.handleServiceCall.bind(this);
  }

  handleInputChange(event) {
    counterState.setValue(event.target.value);
  }

  handleServiceCall() {
    let requestModel = {};
    counterState.denemeServiceCall(requestModel).then(response => {
      if (response) {
        console.log(response);
      } else {
        console.log("Service fail döndü");
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Global State Page</h1>
        <div>
          <label>Set Counter Value</label>
          <input
            className="input"
            type="text"
            name="counter"
            onChange={this.handleInputChange}
          />
        </div>
        <br />
        <span>{this.props.counterProp}</span>
        <br />
        <button className="call-button" onClick={this.handleServiceCall}>
          Service Call
        </button>
        <br />
        <span>{this.props.id}</span>
        <br />
        <span>{this.props.token}</span>
        <br />
        <span>{this.props.errorMsg}</span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    counterProp: state.counterState.counterValue,
    id: state.counterState.id,
    token: state.counterState.token,
    errorMsg: state.counterState.errorMsg
  };
}

export default connect(mapStateToProps)(GlobalStatePage);
