import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import PostModal from '../../components/modal/PostModal';
import * as actions from '../../store/actions/index';

class PostModalContainer extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps) {
    const {
      show,
      onGetPost,
      postId,
      reload,
      location,
      onCancelModal,
    } = this.props;
    // 포스트 모달이 활성화 됐을 때, 포스트 내용 fetch
    // 또는 reload 상태일 때, 포스트 내용 fetch
    if (
      (show && show !== prevProps.show) ||
      (reload && reload !== prevProps.reload)
    ) {
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
    reload: state.post.get('reload'),
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
