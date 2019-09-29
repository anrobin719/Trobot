import React from 'react';

// import styled from 'styled-components';
import Modal from '../ui/Modal';
import Post from '../post/Post';

const PostModal = ({
  post,
  loading,
  show,
  following,
  cancelHandler,
  editPostHandler,
  deleteModalHandler,
  followHanlder,
  likeHandler,
  likeBtn,
  showAskSignInModal,
}) => {
  return (
    <Modal show={show} isPost modalClosed={cancelHandler}>
      <Post
        post={post}
        loading={loading}
        following={following}
        editPostHandler={editPostHandler}
        deleteModalHandler={deleteModalHandler}
        followHanlder={followHanlder}
        likeHandler={likeHandler}
        likeBtn={likeBtn}
        showAskSignInModal={showAskSignInModal}
      />
    </Modal>
  );
};

export default PostModal;
