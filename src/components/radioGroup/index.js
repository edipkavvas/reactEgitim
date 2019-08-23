import React from "react";

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: this.getChildValue(props.value)
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getChildValue(value) {
    console.log("child number : ", this.props.children.length);
    let selectedIndex = 0;
    React.Children.forEach(this.props.children, (child, index) => {
      if (child && child.type === "input") {
        if (value === child.props.value) {
          selectedIndex = index;
        }
      }
    });

    return selectedIndex;
  }

  handleChange(index) {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    console.log("this.props.value : ", this.props.value);
    return (
      <div>
        {React.Children.map(this.props.children, (child, index) => {
          if (child.type === "input") {
            return React.cloneElement(child, {
              checked: this.state.selectedIndex === index,
              onChange: () => this.handleChange(index)
            });
          } else {
            return child;
          }
        })}
      </div>
    );
  }
}

export default RadioGroup;
