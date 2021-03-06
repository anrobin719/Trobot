import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Editor from '../../components/editor/Editor';
import * as actions from '../../store/actions/index';

class EditorContainer extends Component {
  editPostHandler = (pnum, postData) => {
    const { onEditPost } = this.props;
    onEditPost(pnum, postData);
  };

  submitPostHandler = newPostData => {
    const { onSubmitPost } = this.props;
    onSubmitPost(newPostData);
  };

  render() {
    const { loading, pnum, post, postId, postTag } = this.props;
    return (
      <>
        {postId ? <Redirect to={`/post/${postId}`} /> : null}
        <Editor
          editPostHandler={this.editPostHandler}
          submitPostHandler={this.submitPostHandler}
          postTag={postTag}
          loading={loading}
          pnum={pnum}
          post={post}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.editor.loading,
    postId: state.editor.postId,
    postTag: state.post.get('postTag'),
    post: state.post.get('post'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitPost: newPostData => dispatch(actions.writePost(newPostData)),
    onEditPost: (pnum, postData) => dispatch(actions.editPost(pnum, postData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorContainer);
