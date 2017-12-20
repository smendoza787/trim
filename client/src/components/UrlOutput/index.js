import React, { Component } from 'react';
import './index.css';

class UrlOutput extends Component {
  render() {
    return (
      <div className="url-output">
        <h3>Shortened URL</h3>
        <input className="url-output-field" type="text" value={this.props.shortUrl} disabled={this.props.isDisabled} />
        <h1>{this.props.longUrl}</h1>
      </div>
    )
  }
}

export default UrlOutput;