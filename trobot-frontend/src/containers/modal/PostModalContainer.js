import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostModal from '../../components/modal/PostModal';
import * as actions from '../../store/actions/index';

class PostModalContainer extends Component {
  // 포스트 출력
  componentDidUpdate(prevProps) {
    const { show, onGetPost, postId } = this.props;
    if (show !== prevProps.show) {
      onGetPost(postId);
      console.log('PostModalContainer DID UPDATE!');
    }
  }

  cancelHandler = () => {
    const { onCancelModal } = this.props;
    onCancelModal('post');
  };

  render() {
    const { show, post, loading } = this.props;
    return (
      <PostModal
        post={post}
        loading={loading}
        show={show}
        cancelHandler={this.cancelHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.base.getIn(['modal', 'post']),
    postId: state.post.get('postId'),
    post: state.post.get('post'),
    loading: state.post.get('loading'),
    // isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPost: pnum => dispatch(actions.getPost(pnum)),
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostModalContainer));
