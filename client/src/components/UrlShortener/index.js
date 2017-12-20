import React, { Component } from 'react';
import UrlInput from '../UrlInput';
import './index.css';

class UrlShortener extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  onChange (input) {
    // parent class change handler is always called with field name and value
    this.setState({ value: input });
  }
  
  render() {
    return (
      <div className="url-shortener">
        <h1>Shorten any URL in less than a second.</h1>
        <h2>Make it easier to send and embed links.</h2>
        <UrlInput onChange={this.onChange.bind(this)} longUrl={this.state.value} />
      </div>
    )
  }
}

export default UrlShortener;