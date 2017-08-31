import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import initStore from '../store';
import getUserMedia from '../actions/userAction';
import Media from '../components/Media';


class Index extends Component {
  // , isServer, pathname, query
  static async getInitialProps({ store }) {
    return store.dispatch(getUserMedia()).data.then(data => ({
      userMedia: data,
    }));
  }

  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {this.props.userMedia.data.map(media => (
                <div className="col-6" key={media.id}>
                  <Media mediaSrc={media.images.standard_resolution.url} mediaText={media.caption.text} />
                </div>
              ),
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Index.defaultProps = {
  userMedia: {},
};

Index.propTypes = {
  userMedia: PropTypes.shape({
    data: PropTypes.array,
  }),
};

// const mapDispatchToProps = dispatch => ({
//   getUserMedia: bindActionCreators(getUserMedia, dispatch),
// });

// export default withRedux(initStore, null, mapDispatchToProps)(Index)
export default withRedux(initStore)(Index);
