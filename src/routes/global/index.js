import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../states/actions/counter";
import "./style.css";

class GlobalStatePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleServiceCall = this.handleServiceCall.bind(this);
  }

  handleInputChange(event) {
    Actions.setValue(event.target.value);
  }

  handleServiceCall() {
    let requestModel = {};
    Actions.denemeServiceCall(requestModel).then(response => {
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
    counterProp: state.counter.counterValue,
    id: state.counter.id,
    token: state.counter.token,
    errorMsg: state.counter.errorMsg
  };
}

export default connect(mapStateToProps)(GlobalStatePage);
