import React, { Component } from 'react';
import './index.css';

class UrlInput extends Component {
  render() {
    return (
      <div className="url-input">
        <h3>Link</h3>
        <input className="url-input-field" type="text" value={this.props.longUrl} onChange={(event) => this.props.onChange(event.target.value)} />
      </div>
    )
  }
}

export default UrlInput;