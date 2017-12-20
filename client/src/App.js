import React, { Component } from 'react';
import background from './images/background.png';
import Logo from './components/Logo';
import UrlShortener from './components/UrlShortener';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '90vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      paddingLeft: '30px'
    }

    return (
      <div className="App" style={backgroundStyle}>
        <Logo />
        <UrlShortener />
        <Footer />
      </div>
    );
  }
}

export default App;
