import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CodeRedirect extends Component {
  componentWillMount() {
    fetch(`/${this.props.match.params.code}`)
      .then(resp => resp.json())
      .then(link => window.location.href = link.long_url)
  }

  render() {
    return (
      <div>
        <Redirect to={this.state.url} />
      </div>
    )
  }
}

export default CodeRedirect;