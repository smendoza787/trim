import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class MainButton extends Component {
  render() {
    if (this.props.linkSelected) {
      // COPY BUTTON
      return (
        <div>
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
        <button
          className="shorten-button"
          onClick={this.props.onShortenClick}>
          Shorten URL  
        </button>
      )
    }
  }
}

export default MainButton;