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
      followBtn: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      show,
      onGetPost,
      post,
      postId,
      likePost,
      following,
      reload,
      location,
      onCancelModal,
    } = this.props;
    const { authorId } = post.toJS();
    const { followBtn } = this.state;

    // 포스트 모달이 활성화 됐을 때, 또는 reload 상태일 때,
    if (
      (show && show !== prevProps.show) ||
      (reload && reload !== prevProps.reload)
    ) {
      // 포스트 내용 fetch
      onGetPost(postId);
      console.log('PostModalContainer DID UPDATE!');

      // 좋아요한 포스트 중, 현재 포스트와 일치하는 경우가 있는지 확인
      let isLike;
      if (likePost) {
        isLike = likePost.find(f => {
          return f.postId === postId;
        });
      }
      console.log(isLike !== undefined);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ likeBtn: isLike !== undefined });

      // 팔로잉 유저 중, 포스트 작성자와 일치하는 경우가 있는지 확인합니다.
      let isFollow;
      if (following && post) {
        isFollow = following.find(f => {
          return f.userId === authorId;
        });
      }
      console.log(isFollow);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ followBtn: isFollow !== undefined });
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

  // 팔로우 버튼을 클릭할 때 이벤트 핸들러 입니다.
  followHanlder = () => {
    const { onFollow, following, post } = this.props;
    const { authorId, authorNickname, authorEmail, authorImg } = post.toJS();
    const followData = {
      userId: authorId,
      nickname: authorNickname,
      email: authorEmail,
      img: authorImg,
    };
    const { followBtn } = this.state;

    // 팔로잉 유저 중, 포스트 작성자와 일치하는 경우가 있는지 확인합니다.
    let isFollow;
    if (following) {
      isFollow = following.find(f => {
        return f.userId === authorId;
      });
    }
    // 현재 포스트 작성자가 팔로우하는 유저라면, (또는 현재 팔로우 버튼이 활성화 된 상태라면)
    if (followBtn || (isFollow !== undefined && followBtn)) {
      // 팔로우 버튼 상태 '팔로우 취소(false)'로 전환합니다.
      this.setState({ followBtn: false });
      console.log('follow to false');
    }
    // 팔로우 한 유저가 아니라면,
    else {
      // 팔로우 버튼 상태 '팔로우 하기(true)'로 전환합니다.
      this.setState({ followBtn: true });
      console.log('follow to true');
    }

    // 포스트 작성자 아이디, 포스트 데이터, 팔로우 버튼의 활성 상태를 액션으로 보냅니다.
    onFollow(authorId, followData, followBtn);
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
    const { show, post, postTag, deleted, loading } = this.props;
    const { likeBtn, followBtn } = this.state;

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
          followHanlder={this.followHanlder}
          likeHandler={this.likeHandler}
          likeBtn={likeBtn}
          followBtn={followBtn}
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
    onLikePost: (postId, post, likeBtn) =>
      dispatch(actions.likePost(postId, post, likeBtn)),
    onFollow: (authorId, followData, followBtn) =>
      dispatch(actions.follow(authorId, followData, followBtn)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostModalContainer));
