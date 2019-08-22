import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class Selector extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
        <div>
          {this.props.buttonList.map((item, index) => {
            const styleName =
              item.text === "BJK"
                ? "buttonbjk"
                : item.text === "FB"
                ? "buttonfb"
                : "buttongs";

            return (
              <button
                key={index}
                className={styleName}
                onClick={() => item.action(item.text)}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

Selector.defaultProps = {};

Selector.propTypes = {
  description: PropTypes.string,
  buttonList: PropTypes.array
};

export default Selector;
