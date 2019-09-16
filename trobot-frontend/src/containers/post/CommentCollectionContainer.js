import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Commentcollection from '../../components/post/CommentCollection';
import * as actions from '../../store/actions/index';

class CommentCollectionContainer extends Component {
  // 포스트 업데이트 핸들러
  updatePostHandler = updatedPost => {
    const { match, onUpdatePost } = this.props;
    const { pnum } = match.params;
    onUpdatePost(pnum, updatedPost);
  };

  ModalHandler = () => {
    const { onShowModal } = this.props;
    onShowModal('askSignIn');
  };

  render() {
    const { post, isAuthenticated } = this.props;
    const {
      //   title,
      //   sub,
      //   tag,
      //   body,
      //   like,
      comments,
      //   authorNickname,
      //   publishedDate,
    } = post.toJS();

    return (
      <Commentcollection
        post={post}
        comments={comments}
        isAuthenticated={isAuthenticated}
        updatePostHandler={this.updatePostHandler}
        showAskSignInModal={this.ModalHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post.get('post'),
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdatePost: (pnum, updatedPost) =>
      dispatch(actions.updatePost(pnum, updatedPost)),
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CommentCollectionContainer));
