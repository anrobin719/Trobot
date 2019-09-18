import React from 'react';

// import styled from 'styled-components';
import Modal from '../ui/Modal';
import Post from '../post/Post';

const PostModal = ({
  post,
  loading,
  show,
  cancelHandler,
  editPostHandler,
  deleteModalHandler,
}) => {
  return (
    <Modal show={show} isPost modalClosed={cancelHandler}>
      <Post
        post={post}
        loading={loading}
        editPostHandler={editPostHandler}
        deleteModalHandler={deleteModalHandler}
      />
    </Modal>
  );
};

export default PostModal;
