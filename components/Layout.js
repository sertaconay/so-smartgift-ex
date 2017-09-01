import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const Layout = props => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.0.0-beta/dist/css/bootstrap.css" />
    </Head>
    <Header />
    <div className="container">
      <div className="row">
        {props.children}
        <Sidebar />
      </div>
    </div>
    <footer />
    <style jsx>
      {`
        footer {
          height: 100px;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
