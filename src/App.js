import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Routes from './Routes';
//import logo from './logo.svg'; // Tell Webpack this JS file uses this image
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import './stylesheets/App.css';

// import SkiDayList from './components/SkiDayList';

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

  state = {
    pageHeader: 'Naming me ',
    pageFooter: 'i am page footer'
  };

  render() {
    const childProps = {};
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            *** MoneyMe TOP Paying HYIP - Top Bitcoin Mining - Hyip Monitor ***
          </title>
          <meta
            name="description"
            content="Premium HYIPs are the ones that we invested and monitored. The premium hyip ranking is based on our experience and for your reference only."
          />
          <link rel="canonical" href="https://moneyme.xyz/example" />
        </Helmet>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<h2 className="text-center">Welcome to React</h2>*/}
        <Header message={this.state.pageHeader} />
        {/*<button onClick={this.handleClick}>Load</button>*/}
        <Routes childProps={childProps} />
        <Footer message={this.state.pageFooter} />
      </div>
    );
  }
}

export default App;
