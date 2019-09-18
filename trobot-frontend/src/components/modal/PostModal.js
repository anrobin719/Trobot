import React from 'react';

// import styled from 'styled-components';
import Modal from '../ui/Modal';
import Post from '../post/Post';

const PostModal = ({
  post,
  postId,
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
        pnum={postId}
        loading={loading}
        editPostHandler={editPostHandler}
        deleteModalHandler={deleteModalHandler}
      />
    </Modal>
  );
};

export default PostModal;
