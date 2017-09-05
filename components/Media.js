import React from 'react';
import PropTypes from 'prop-types';


const Media = ({ mediaSrc, mediaText }) => (
  <div className="card">
    <img className="card-img-top" src={mediaSrc} alt="" />
    <div className="card-body">
      <p className="card-text">
        {mediaText.split(' ').map(text => <a key={text} href={`/tag/${text.slice(1, text.length)}`}>{text}</a>)}
      </p>
    </div>
    <style jsx>
      {`
        .card {
          margin: 10px 0;
        }
        a {
          margin: 0 5px;
          display: inline-block;
        }
      `}
    </style>
  </div>
);

Media.propTypes = {
  mediaSrc: PropTypes.string.isRequired,
  mediaText: PropTypes.string.isRequired,
};

export default Media;
