import React from "react";
import Tab from "../../components/tab";
import MyButton from "../../components/myButton";
import Selector from "../../components/selector";
import logo from "../../assets/images/logo.svg";

class TabExamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenTeam: ""
    };

    this.handleTeamSelect = this.handleTeamSelect.bind(this);

    this.buttons = [
      {
        text: "BJK",
        action: this.handleTeamSelect
      },
      {
        text: "GS",
        action: this.handleTeamSelect
      },
      {
        text: "FB",
        action: this.handleTeamSelect
      }
    ];
  }

  handleTeamSelect(team) {
    console.log("handleTeamSelect - team : ", team);
    this.setState({
      chosenTeam: team
    });
  }

  render() {
    const { chosenTeam } = this.state;

    return (
      <Tab>
        <div>
          <h1>1. Tab içeriği</h1>
          <MyButton text="1. tab butonu" />
        </div>
        <div>
          <h1>2. Tab içeriği</h1>
          <Selector
            description="Lütfen takım seçiniz"
            buttonList={this.buttons}
          />
          <span>{chosenTeam}</span>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </Tab>
    );
  }
}

export default TabExamplePage;
