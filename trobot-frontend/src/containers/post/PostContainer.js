import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../components/post/Post';
import * as actions from '../../store/actions/index';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPost: true,
    };
  }

  // 포스트 출력
  componentDidMount() {
    const { onGetPost, pnum } = this.props;
    onGetPost(pnum);
  }

  // 포스트 닫기 핸들러
  closedHandler = () => {
    this.setState({ showPost: false });
  };

  render() {
    const { showPost } = this.state;
    const { post, loading } = this.props;
    return (
      <Post
        show={showPost}
        hide={this.closedHandler}
        post={post}
        loading={loading}
      />
    );
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
