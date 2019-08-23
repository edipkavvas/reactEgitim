import React from "react";
import PropTypes from "prop-types";
import "../style.css";

class TabItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const { title } = this.props;

    return (
      <div>
        <button onClick={this.handleClick}>{title}</button>
        {this.props.children}
      </div>
    );
  }
}

TabItem.defaultProps = {};

TabItem.propTypes = {
  title: PropTypes.string
};

export default TabItem;
