import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Layout = props => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.0.0-beta/dist/css/bootstrap.css" />
    </Helmet>
    <div className="container">
      {props.children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
