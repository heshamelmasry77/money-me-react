import React, { Component } from 'react';
import Helmet from 'react-helmet';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My NotFound page</title>
          <meta name="description" content="Helmet not found" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <p>i am NotFound page</p>
      </div>
    );
  }
}

export default NotFound;
