/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Media from '../components/Media';
import InstagramAPI from '../core/api';


const instaAPI = new InstagramAPI();

const Index = (props) => {
  const { userMedia } = props;
  const { next_max_id } = props.userMedia.pagination;
  return (
    <Layout>
      <div className="col-md-9">
        <div className="row">
          {userMedia.data.map(media => (
            <div className="col-6" key={media.id}>
              <Media key={media.images.id} mediaSrc={media.images.standard_resolution.url} mediaText={media.caption.text} />
            </div>
          ),
          )}
        </div>
        {next_max_id &&
          <div className="row justify-content-center">
            <a href={`/?next_max_id=${next_max_id}`} className="btn btn-secondary btn-sm">Next Page</a>
          </div>
        }
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function (context) { // eslint-disable-line func-names
  const { next_max_id } = context.query;
  const data = await instaAPI.getAllMediaOfUser(next_max_id);
  return { userMedia: data };
};

Index.defaultProps = {
  userMedia: {},
};

Index.propTypes = {
  userMedia: PropTypes.shape({
    data: PropTypes.array,
    pagination: PropTypes.object,
  }),
};

export default Index;
