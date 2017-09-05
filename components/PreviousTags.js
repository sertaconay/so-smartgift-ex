/* eslint-disable no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import { asyncReactor } from 'async-reactor';
import InstagramAPI from '../core/api';


const instaAPI = new InstagramAPI();

const Error = ({ postsUrl }) => (
  <h2>Error: cannot load {postsUrl}</h2>
);

const Loader = () => (
  <p>Loading previous tags...</p>
);

const PreviousTags = async () => {
  const previousTags = await instaAPI.getPreviousTags();

  return (
    <div className="card mb-3">
      <div className="card-header">Previously Searched Tags</div>
      <div className="card-body text-dark">
        <ul className="list-group">
          {previousTags.map(previousTag => (
            <li key={previousTag._id} className="list-group-item">
              <a href={`/tag/${previousTag._id}`}>{previousTag._id}</a>
            </li>
          ),
          )}
        </ul>
      </div>
    </div>
  );
};

Error.defaultProps = {
  postsUrl: '',
};

Error.propTypes = {
  postsUrl: PropTypes.string,
};

export default asyncReactor(PreviousTags, Loader, Error);
