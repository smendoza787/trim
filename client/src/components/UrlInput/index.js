import React, { Component } from 'react';
import './index.css';

class UrlInput extends Component {
  render() {
    return (
      <div>
        <input className="url-input" type="text" value={this.props.longUrl} onChange={(event) => this.props.onChange(event.target.value)} />
        <h1>{this.props.longUrl}</h1>
      </div>
    )
  }
}

export default UrlInput;