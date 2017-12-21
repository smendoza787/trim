import React, { Component } from 'react';
import background from './images/background.png';
import Logo from './components/Logo';
import UrlShortener from './components/UrlShortener';
import Footer from './components/Footer';
import CodeRedirect from './components/CodeRedirect';
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
          <Route exact path="/" render={({ match }) =>
            <div className="App" style={backgroundStyle}>
              <Logo />
              <UrlShortener match={match} />
              <Footer />
            </div>
          } />
          <Route path="/:code" component={CodeRedirect} />
        </div>
      </Router>
    );
  }
}

export default App;
