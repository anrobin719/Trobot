import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../components/post/Post';
import * as actions from '../../store/actions/index';

class PostContainer extends Component {
  // 포스트 출력
  componentDidMount() {
    const { onGetPost, pnum } = this.props;
    onGetPost(pnum);
  }

  render() {
    const { post, loading } = this.props;
    return <Post post={post} loading={loading} />;
  }
}

const mapStateToProps = state => {
  return {
    post: state.post.get('post'),
    loading: state.post.get('loading'),
    // isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPost: pnum => dispatch(actions.getPost(pnum)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostContainer);
