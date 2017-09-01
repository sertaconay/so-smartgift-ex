import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Media from '../components/Media';
import InstagramAPI from '../core/api';


const instaAPI = new InstagramAPI();

const Tag = props => (
  <Layout>
    <div className="col-md-9">
      <div className="row">
        {props.tagMedia.data.map(media => (
          <div className="col-6" key={media.id}>
            <Media key={media.images.id} mediaSrc={media.images.standard_resolution.url} mediaText={media.caption.text} />
          </div>
        ),
        )}
        {props.tagMedia.data.length === 0 && <div className="alert alert-danger">No media for you!</div>}
      </div>
    </div>
  </Layout>
);

Tag.getInitialProps = async function (context) { // eslint-disable-line func-names
  const { tag } = context.query;
  const data = await instaAPI.getAllMediaOfTag(tag);
  return { tagMedia: data };
};

Tag.defaultProps = {
  tagMedia: {},
};

Tag.propTypes = {
  tagMedia: PropTypes.shape({
    data: PropTypes.array,
  }),
};

export default Tag;
