import React, { Component } from 'react';
import { connect } from 'react-redux';

import Commentcollection from '../../components/post/CommentCollection';
import * as actions from '../../store/actions/index';

class CommentCollectionContainer extends Component {
  updatePostHandler = updatedPost => {
    const { postId, onUpdatePost } = this.props;
    onUpdatePost(postId, updatedPost);
  };

  ModalHandler = () => {
    const { onShowModal } = this.props;
    onShowModal('askSignIn');
  };

  deleteCommentHandler = commentId => {
    const { postId, onDeleteComment } = this.props;
    onDeleteComment(postId, commentId);
  };

  render() {
    const { post, isAuthenticated } = this.props;
    const { comments } = post.toJS();

    return (
      <Commentcollection
        post={post}
        comments={comments}
        isAuthenticated={isAuthenticated}
        updatePostHandler={this.updatePostHandler}
        showAskSignInModal={this.ModalHandler}
        deleteCommentHandler={this.deleteCommentHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post.get('post'),
    postId: state.post.get('postId'),
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdatePost: (pnum, updatedPost) =>
      dispatch(actions.updatePost(pnum, updatedPost)),
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
    onDeleteComment: (postId, commentId) =>
      dispatch(actions.deleteComment(postId, commentId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentCollectionContainer);
