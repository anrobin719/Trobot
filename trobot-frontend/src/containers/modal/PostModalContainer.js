import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import PostModal from '../../components/modal/PostModal';
import * as actions from '../../store/actions/index';

class PostModalContainer extends Component {
  componentDidUpdate(prevProps) {
    const {
      show,
      onGetPost,
      // post,
      postId,
      location,
      // history,
      onCancelModal,
    } = this.props;
    // 포스트 모달이 활성화 됐을 때, 포스트 내용 fetch
    if (show !== prevProps.show && show) {
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

  editPostHandler = () => {
    const { history, postId } = this.props;
    history.push(`/editor/${postId}`);
  };

  deleteModalHandler = () => {
    const { onShowModal } = this.props;
    onShowModal('askDelete');
  };

  render() {
    const { show, post, postTag, deleted, loading } = this.props;
    return (
      <>
        {/* 삭제된 상태일 경우, /list/tag로 경로 이동 */}
        {deleted ? <Redirect to={`/list/${postTag}`} /> : null}
        <PostModal
          post={post}
          loading={loading}
          show={show}
          cancelHandler={this.cancelHandler}
          editPostHandler={this.editPostHandler}
          deleteModalHandler={this.deleteModalHandler}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.base.getIn(['modal', 'post']),
    postId: state.post.get('postId'),
    postTag: state.post.get('postTag'),
    post: state.post.get('post'),
    deleted: state.post.get('deleted'),
    loading: state.post.get('loading'),
    // isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPost: pnum => dispatch(actions.getPost(pnum)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostModalContainer));
