import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Post from '../../components/post/Post';
import * as actions from '../../store/actions/index';

class PostContainer extends Component {
  // 포스트 출력
  componentDidMount() {
    const { onGetPost, onStorePostId, pnum } = this.props;
    onGetPost(pnum);
    // 포스트 아이디와 태그를 저장. 태그는 없음으로 저장
    onStorePostId(pnum, '');
  }

  editPostHandler = pnum => {
    console.log(`edit btn clicked!`, pnum);
  };

  deleteModalHandler = () => {
    const { onShowModal } = this.props;
    onShowModal('askDelete');
  };

  render() {
    const { pnum, post, postTag, deleted, loading } = this.props;

    return (
      <>
        {/* 삭제된 상태일 경우, 기본 아이디어 페이지인 /list로 경로 이동 */}
        {deleted ? <Redirect to={`/list/${postTag}`} /> : null}
        <Post
          pnum={pnum}
          post={post}
          loading={loading}
          editPostHandler={this.editPostHandler}
          deleteModalHandler={this.deleteModalHandler}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post.get('post'),
    postTag: state.post.get('postTag'),
    deleted: state.post.get('deleted'),
    loading: state.post.get('loading'),
    // isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPost: pnum => dispatch(actions.getPost(pnum)),
    onStorePostId: (postId, postTag) =>
      dispatch(actions.storePostId(postId, postTag)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostContainer);
