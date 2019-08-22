import React from "react";
import PropTypes from "prop-types";
import ChooseTeam from "../../components/chooseTeam";
import Selector from "../../components/selector";
import DashedInput from "../../components/dashedInput";
import ButtonWithDescription from "../../components/buttonWithDescription";
import logo from "../../assets/images/logo.svg";
import "./style.css";

class LogoPage extends React.Component {
  constructor(props) {
    super(props);

    //console.log("props.location.state.deneme : ", props.location.state.deneme);

    this.state = {
      age: 30,
      showBanner: true,
      bannerButtonText: "Close Banner",
      chosenTeam: "",
      buttons: [
        {
          text: "BJK",
          action: team => this.handleTeamSelect(team)
        },
        {
          text: "GS",
          action: team => this.handleTeamSelect(team)
        },
        {
          text: "FB",
          action: team => this.handleTeamSelect(team)
        }
      ],
      description: "Lütfen Takımınızı Seçiniz",
      inputText: "234"
    };

    this.handleIncreaseAge = this.handleIncreaseAge.bind(this);
    this.handleChangeBanner = this.handleChangeBanner.bind(this);
    this.handleTeamSelect = this.handleTeamSelect.bind(this);
    this.addButton = this.addButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDashedInputChange = this.handleDashedInputChange.bind(this);

    // this.buttons = [
    //   {
    //     text: "BJK",
    //     action: this.handleTeamSelect
    //   },
    //   {
    //     text: "GS",
    //     action: this.handleTeamSelect
    //   },
    //   {
    //     text: "FB",
    //     action: this.handleTeamSelect
    //   }
    // ];
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    // if (this.state.age !== nextState.age) {
    //   console.log("this.state.age : ", this.state.age);
    //   console.log("nextState.age : ", nextState.age);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.age !== prevState.age) {
      console.log("this.state.age : ", this.state.age);
      console.log("prevState.age : ", prevState.age);
    }
  }

  componentWillUnmount() {}

  getChildContext() {
    return {
      label: "Bla Bla Button",
      onContextClick: this.handleTeamSelect.bind(this)
    };
  }

  handleIncreaseAge() {
    this.setState((prevState, props) => {
      return {
        age: prevState.age + 1
      };
    });
  }

  handleChangeBanner() {
    this.setState((prevState, props) => {
      return {
        showBanner: !prevState.showBanner,
        bannerButtonText: prevState.showBanner ? "Open Banner" : "Close Banner"
      };
    });
  }

  handleTeamSelect(team) {
    this.setState({
      chosenTeam: team
    });
  }

  addButton() {
    this.setState((prevState, props) => {
      return {
        description: "Bla Bla Bla",
        buttons: [
          ...prevState.buttons,
          {
            text: "TS",
            action: team => this.handleTeamSelect(team)
          }
        ]
      };
    });
  }

  handleInputChange(event) {
    console.log(
      "handleInputChange - event.target.value : ",
      event.target.value
    );
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
      <div className="App">
        <header className="App-header">
          {this.state.showBanner ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : null}
          <p>Hello World</p>
          <span>{this.state.age}</span>
          <button onClick={this.handleIncreaseAge}>Increase Age</button>
          <button onClick={this.handleChangeBanner}>
            {this.state.bannerButtonText}
          </button>
          <button onClick={this.addButton}>Change Button List</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ChooseTeam
            description="Lütfen Takımınızı Seçiniz"
            onChange={this.handleTeamSelect}
          />
          <ButtonWithDescription description="Lütfen Butona Basınız" />
          <span>{this.state.chosenTeam}</span>
          <Selector
            description={this.state.description}
            buttonList={this.state.buttons}
          />
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
          <DashedInput
            text={this.state.inputText}
            onChange={this.handleDashedInputChange}
          />
          <span>{this.props.location.state.deneme}</span>
        </header>
      </div>
    );
  }
}

LogoPage.childContextTypes = {
  label: PropTypes.string,
  onContextClick: PropTypes.func
};

export default LogoPage;
