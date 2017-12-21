import React, { Component } from 'react';
import background from './images/background.png';
import Logo from './components/Logo';
import UrlShortener from './components/UrlShortener';
import Footer from './components/Footer';
import { BrowserRouter as Router,
         Route } from 'react-router-dom';
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
      <Router>
        <div>
          <Route exact path="/" render={() =>
            <div className="App" style={backgroundStyle}>
              <Logo />
              <UrlShortener />
              <Footer />
            </div>
          } />
          <Route path="/:code" render={({ match }) => {
            fetch(`/${match.params.code}`)
              .then(resp => resp.json())
              .then(link => window.location.href = link.long_url)
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
