import React from "react";

import ClipBoardIcon from "./ClipBoardIcon";
import CheckIcon from "./CheckIcon";

class Copy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  copyToClipboard = () => {
    this.setState({
      copied: true,
    });
    let text = this.props.text;

    const textField = document.createElement("textarea");
    textField.classList.add("visually-hidden");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setTimeout(() => {
      this.setState({
        copied: false,
      });
    }, 1750);
  };

  render() {
    return (
      <button
        onClick={this.copyToClipboard}
        type="button"
        title="Copy HTML"
        className={`button button-tiny button-link ${
          this.props.cssclass ? this.props.cssclass : ""
        } ${this.state.copied ? "button-success" : ""}`}
      >
        {this.state.copied ? (
          <CheckIcon size="20" />
        ) : (
          <ClipBoardIcon size="20" />
        )}
      </button>
    );
  }
}
export default Copy;
