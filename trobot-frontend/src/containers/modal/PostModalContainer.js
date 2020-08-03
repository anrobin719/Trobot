import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import PostModal from '../../components/modal/PostModal';
import * as actions from '../../store/actions/index';

class PostModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeBtn: null,
      followBtn: null,
    };
  }

  componentDidUpdate(prevProps) {
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
    if (
      (show && show !== prevProps.show) ||
      (reload && reload !== prevProps.reload)
    ) {
      onGetPost(postId);
      console.log('PostModalContainer DID UPDATE!');
      
      let isLike;
      if (likePost) {
        isLike = likePost.find(f => {
          return f.postId === postId;
        });
      }
      console.log(isLike !== undefined);
      this.setState({ likeBtn: isLike !== undefined });
      
      let isFollow;
      if (following && post) {
        isFollow = following.find(f => {
          return f.userId === authorId;
        });
      }
      console.log(isFollow);
    
      this.setState({ followBtn: isFollow !== undefined });
    }

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
    const { onFollow, following, post } = this.props;
    const { authorId, authorNickname, authorEmail, authorImg } = post.toJS();
    const followData = {
      userId: authorId,
      nickname: authorNickname,
      email: authorEmail,
      img: authorImg,
    };
    const { followBtn } = this.state;
    let isFollow;

    if (following) {
      isFollow = following.find(f => {
        return f.userId === authorId;
      });
    }

    if (followBtn || (isFollow !== undefined && followBtn)) {
      this.setState({ followBtn: false });
      console.log('follow to false');
    } else {
      this.setState({ followBtn: true });
      console.log('follow to true');
    }
    
    onFollow(authorId, followData, followBtn);
  };

  likeHandler = () => {
    const { onLikePost, postId, likePost, post } = this.props;
    const { likeBtn } = this.state;
    let isLike;

    if (likePost) {
      isLike = likePost.find(f => {
        return f.postId === postId;
      });
    }

    if (likeBtn || (isLike !== undefined && likeBtn)) {
      this.setState({ likeBtn: false });
      console.log('to false');
    } else {
      this.setState({ likeBtn: true });
      console.log('to true');
    }
    
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
