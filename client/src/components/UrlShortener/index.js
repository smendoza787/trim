import React, { Component } from 'react';
import UrlInput from '../UrlInput';
import UrlOutput from '../UrlOutput';
import MainButton from '../MainButton';
import objectToFormData from 'object-to-formdata';
import './index.css';

class UrlShortener extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      output: '',
      isDisabled: true,
      linkSelected: false
    }
  }

  onInputChange(input) {
    this.setState({ input: input });
  }

  onShortenClick(event) {
    if (this.state.input.includes('http')) {
      var object = { link: this.state.input }
      var formData = objectToFormData(object)

      fetch('/links', {
        method: 'POST',
        body: formData
      }).then(resp => resp.json())
        .then(linkObj => this.setState({ output: `${window.location.href}${linkObj.code}`, isDisabled: false, linkSelected: true }))
    }
  }

  onCopyClick(event) {
    if (this.state.output.includes('http')) {
      console.log("COPYCLICKEVENT", event);
    }
  }

  render() {
    return (
      <div className="url-shortener">
        <h1>Shorten any URL in less than a second.</h1>
        <h2>Make it easier to send and embed links.</h2>
        <UrlInput
          onChange={this.onInputChange.bind(this)}
          longUrl={this.state.input} />
        <UrlOutput
          shortUrl={this.state.output}
          isDisabled={this.state.isDisabled} />
        <MainButton
          linkSelected={this.state.linkSelected}
          onShortenClick={(event) => this.onShortenClick(event)}
          onCopyClick={(event) => this.onCopyClick(event)}
          shortUrl={this.state.output} />
      </div>
    )
  }
}

export default UrlShortener;