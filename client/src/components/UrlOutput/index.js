import React, { Component } from 'react';
import './index.css';

class UrlOutput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      isCopied: false
    }

    this.handleHover = this.handleHover.bind(this);
    this.setCopyListener = this.setCopyListener.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.linkSelected) {
      let obj = this.refs.urlOutput;
      obj.select();
      this.setCopyListener(this.props.shortUrl);
    }
  }

  setCopyListener(url) {
    document.addEventListener('copy', (e) => {
      this.setState({ isCopied: true });
    });
  }
  
  handleFocus(event) {
    event.target.select();
  }

  handleHover() {
    if (this.props.linkSelected) {
      this.setState({ isHovered: !this.state.isHovered });
    }
  }

  render() {
    const labelClass = this.state.isHovered && !this.state.isCopied ? "copy-label" : "hidden";
    const copiedClass = this.state.isCopied ? "copied-label" : "hidden";
    return (
      <div 
        className="url-output"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}>
          <h3>Shortened URL</h3>
          <input
            ref="urlOutput"
            className="url-output-field"
            type="text"
            value={this.props.shortUrl}
            disabled={this.props.isDisabled}
            onFocus={(event) => this.handleFocus(event)} />
          <div className={labelClass}>
            Press &#8984; + C to copy
          </div>
          <div className={copiedClass}>
            Copied!
          </div>
      </div>
    )
  }
}

export default UrlOutput;