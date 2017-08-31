import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

const Tag = props => (
  <h1>all media #{props.url.query.slug}</h1>
);

Tag.defaultProps = {
  url: {},
};

Tag.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.object,
  }),
};

export default withRedux(initStore)(Tag);
