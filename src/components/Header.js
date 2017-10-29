import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
  return <h3 className="Header text-center">{message}</h3>;
};

Header.propTypes = {
  message: PropTypes.string
};

Header.defaltProps = {
  message: 'hello'
};

export default Header;
