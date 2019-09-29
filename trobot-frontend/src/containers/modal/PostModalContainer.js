import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import PostModal from '../../components/modal/PostModal';
import * as actions from '../../store/actions/index';

class PostModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 버튼 테마 설정입니다. true = 활성화, false = 비활성화
      likeBtn: null,
    };
  }

  componentDidUpdate(prevProps) {
    const {
      show,
      onGetPost,
      postId,
      likePost,
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

      // 좋아요한 포스트 중, 현재 포스트와 일치하는 경우가 있는지 확인
      let isLike;
      if (likePost) {
        isLike = likePost.find(f => {
          return f.postId === postId;
        });
      }
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ likeBtn: isLike !== undefined });
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

  followHanlder = () => {
    const { onFollow, post } = this.props;
    const { authorId, authorNickname, authorEmail, authorImg } = post.toJS();
    const followData = {
      userId: authorId,
      nickname: authorNickname,
      email: authorEmail,
      img: authorImg,
    };
    onFollow(authorId, followData);
  };

  // 좋아요 버튼을 클릭할 때 이벤트 핸들러 입니다.
  likeHandler = () => {
    const { onLikePost, postId, likePost, post } = this.props;
    const { likeBtn } = this.state;
    // 좋아요한 포스트 중, 현재 포스트와 일치하는 경우가 있는지 확인합니다.
    let isLike;
    if (likePost) {
      isLike = likePost.find(f => {
        return f.postId === postId;
      });
    }
    // 현재 포스트가 좋아요한 포스트라면, (또는 현재 좋아요 버튼이 활성화 된 상태라면)
    if (likeBtn || (isLike !== undefined && likeBtn)) {
      // 좋아요 버튼 상태 '취소(false)'로 전환합니다.
      this.setState({ likeBtn: false });
      console.log('to false');
    }
    // 좋아요한 포스트가 아니라면,
    else {
      // 좋아요 버튼 상태 '좋아요(true)'로 전환합니다.
      this.setState({ likeBtn: true });
      console.log('to true');
    }
    // 포스트 아이디, 포스트, 좋아요 버튼의 활성 상태를 액션으로 보냅니다.
    onLikePost(postId, post, likeBtn);
  };

  ModalHandler = () => {
    const { onShowModal } = this.props;
    onShowModal('askSignIn');
  };

  render() {
    const { show, post, postTag, deleted, loading, following } = this.props;
    const { likeBtn } = this.state;

    return (
      <>
        {/* 삭제된 상태일 경우, /list/tag로 경로 이동 */}
        {deleted ? <Redirect to={`/list/${postTag}`} /> : null}
        <PostModal
          post={post}
          loading={loading}
          show={show}
          following={following}
          cancelHandler={this.cancelHandler}
          editPostHandler={this.editPostHandler}
          deleteModalHandler={this.deleteModalHandler}
          followHanlder={this.followHanlder}
          likeHandler={this.likeHandler}
          likeBtn={likeBtn}
          showAskSignInModal={this.ModalHandler}
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
    following: state.auth.following,
    likePost: state.auth.likePost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPost: pnum => dispatch(actions.getPost(pnum)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
    onFollow: (authorId, followData) =>
      dispatch(actions.follow(authorId, followData)),
    onLikePost: (postId, post, likeBtn) =>
      dispatch(actions.likePost(postId, post, likeBtn)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostModalContainer));
