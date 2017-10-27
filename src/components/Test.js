import React, { Component } from 'react';
import Helmet from 'react-helmet';
import GoBeer from 'react-icons/lib/go/beer';

class Test extends Component {
  render() {
    return (
      <div className="Test">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My test page</title>
          <meta name="description" content="Helmet test" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <p>
          i am beer page <GoBeer />
        </p>
      </div>
    );
  }
}

export default Test;
