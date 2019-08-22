import React from "react";

class MasterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "/logo"
    };

    this.handleNavigateToLogoPage = this.handleNavigateToLogoPage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      route: event.target.value
    });
  }

  handleNavigateToLogoPage() {
    this.props.history.push({
      pathname: this.state.route,
      state: { deneme: "edip" }
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to MasterPage</h1>
        <div>
          <label>Route</label>
          <input
            className="input"
            type="text"
            name="firstname"
            onChange={this.handleInputChange}
            value={this.state.route}
          />
        </div>
        <button className="button" onClick={this.handleNavigateToLogoPage}>
          {"Go To " + this.state.route}
        </button>
      </div>
    );
  }
}

export default MasterPage;
