import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import MoneyMeLogo from '../../../assets/logos/MoneyMeLogo.png'; // Tell Webpack this JS file uses this image
import '../../../stylesheets/header/Header.css';
import NavbarInstance from '../Header/modules/Navbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="head">
          <a href="/" className="logo">
            <img src={MoneyMeLogo} alt="MoneyMe Logo" />MoneyMe
          </a>
        </div>
        <NavbarInstance />
      </div>
    );
  }
}

Header.propTypes = {
  // message: PropTypes.string,
};

Header.defaltProps = {
  // message: 'hello i am footer',
};

export default Header;

// import React from 'react';
// import PropTypes from 'prop-types';
// import '../../../stylesheets/header/Header.css';
//
// const Header = ({ message }) => {
//   return <h3 className="Header text-center">{message}</h3>;
// };
//
// Header.propTypes = {
//   message: PropTypes.string
// };
//
// Header.defaltProps = {
//   message: 'hello'
// };
//
// export default Header;
