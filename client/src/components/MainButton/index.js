import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.css';

class MainButton extends Component {
  render() {
    if (this.props.linkSelected) {
      // COPY BUTTON
      return (
        <div className="center-button">
          <button
            className="shorten-button"
            onClick={this.props.onCopyClick}>
            Copy
          </button>
        </div>
      )
    } else {
      // SHORTEN BUTTON
      return (
        <div className="center-button">
          <button
            className="shorten-button"
            onClick={this.props.onShortenClick}>
            Shorten URL  
          </button>
        </div>
      )
    }
  }
}

export default MainButton;