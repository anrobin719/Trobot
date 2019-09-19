import React from 'react';

// import styled from 'styled-components';
import Modal from '../ui/Modal';
import Post from '../post/Post';

const PostModal = ({
  post,
  postId,
  loading,
  show,
  following,
  likePost,
  cancelHandler,
  editPostHandler,
  deleteModalHandler,
  followHanlder,
  likeHandler,
  showAskSignInModal,
}) => {
  return (
    <Modal show={show} isPost modalClosed={cancelHandler}>
      <Post
        post={post}
        postId={postId}
        loading={loading}
        following={following}
        likePost={likePost}
        editPostHandler={editPostHandler}
        deleteModalHandler={deleteModalHandler}
        followHanlder={followHanlder}
        likeHandler={likeHandler}
        showAskSignInModal={showAskSignInModal}
      />
    </Modal>
  );
};

export default PostModal;
