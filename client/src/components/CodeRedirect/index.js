import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './index.css';

class CodeRedirect extends Component {
  componentWillMount() {
    fetch(`/${this.props.match.params.code}`)
      .then(resp => resp.json())
      .then(link => window.location.href = link.long_url)
  }
  
  render() {
    return (
      <div className="code-redirect">
        <h2>Thanks for using</h2>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

export default CodeRedirect;