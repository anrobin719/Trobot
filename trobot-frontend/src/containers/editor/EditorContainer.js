import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Editor from '../../components/editor/Editor';
import * as actions from '../../store/actions/index';

class EditorContainer extends Component {
  submitHandler = newPostData => {
    const { onSubmitPost } = this.props;
    onSubmitPost(newPostData);
  };

  render() {
    const { loading, pnum, postId } = this.props;
    return (
      <>
        {postId ? <Redirect to={`/post/${postId}`} /> : null}
        <Editor
          submitHandler={this.submitHandler}
          loading={loading}
          pnum={pnum}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.editor.loading,
    postId: state.editor.postId,
    // error: state.editor.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitPost: newPostData => dispatch(actions.writePost(newPostData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorContainer);
