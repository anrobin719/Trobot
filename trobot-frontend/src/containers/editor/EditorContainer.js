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
        {/* 새 포스트 작성시 생성되는 포스트 아이디가 저장되면, 그 위치로 이동 (editor state의 포스트 아이디) */}
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
