import React from "react";
import "./style.css";

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childToRender: this.selectChildren(0)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  selectChildren(clickIndex) {
    let childrenToRender = React.Children.map(
      this.props.children,
      (child, index) => {
        if (clickIndex === index) {
          return child;
        }
      }
    );

    return childrenToRender;
  }

  handleClick(clickIndex) {
    this.setState({
      childToRender: this.selectChildren(clickIndex)
    });
  }

  render() {
    const { childToRender } = this.state;

    return (
      <div>
        <button onClick={() => this.handleClick(0)}>button1</button>
        <button onClick={() => this.handleClick(1)}>button2</button>
        <button onClick={() => this.handleClick(2)}>button3</button>
        <br />
        {childToRender}
      </div>
    );
  }
}

export default Tab;
