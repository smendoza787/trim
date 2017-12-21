import React, { Component } from 'react';
import './index.css';

class UrlOutput extends Component {
  handleFocus(event) {
    event.target.select();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.linkSelected) {
      let obj = this.refs.urlOutput;
      obj.select();
    }
  }
  
  render() {
    return (
      <div className="url-output">
        <h3>Shortened URL</h3>
        <input
          ref="urlOutput"
          className="url-output-field"
          type="text"
          value={this.props.shortUrl}
          disabled={this.props.isDisabled}
          onFocus={(event) => this.handleFocus(event)} />
      </div>
    )
  }
}

export default UrlOutput;