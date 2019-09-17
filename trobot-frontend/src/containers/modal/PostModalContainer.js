import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostModal from '../../components/modal/PostModal';
import * as actions from '../../store/actions/index';

class PostModalContainer extends Component {
  componentDidUpdate(prevProps) {
    const { show, onGetPost, postId, location, onCancelModal } = this.props;
    // 포스트 모달이 활성화 됐을 때, 포스트 내용 fetch
    if (show !== prevProps.show) {
      onGetPost(postId);
      console.log('PostModalContainer DID UPDATE!');
    }
    // 로그인, 회원가입 버튼 클릭으로 경로가 바뀌었을 때, 포스트 모달 비활성화
    if (location !== prevProps.location) {
      onCancelModal('post');
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
