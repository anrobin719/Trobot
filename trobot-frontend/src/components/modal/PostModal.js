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
      />
    </Modal>
  );
};

export default PostModal;
