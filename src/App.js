import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Routes from './Routes';
import logo from './logo.svg'; // Tell Webpack this JS file uses this image
import './App.css';

class App extends Component {
  //function to handle click event and import module A
  handleClick = () => {
    import('./components/modules/moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
        console.log(moduleA);
      })
      .catch(err => {
        // Handle failure
      });
  };
  render() {
    const childProps = {};
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="text-center">Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Load</button>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
