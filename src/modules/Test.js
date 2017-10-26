import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Test extends Component {
  render() {
    return (
      <div className="Test">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My NotFound page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <p>i am fickk page</p>
      </div>
    );
  }
}

export default Test;
