import React from 'react';

import Modal from '../ui/Modal';
import Post from '../post/Post';

const PostModal = ({
  post,
  loading,
  show,
  cancelHandler,
  editPostHandler,
  deleteModalHandler,
  followHanlder,
  likeHandler,
  likeBtn,
  followBtn,
  showAskSignInModal,
}) => {
  return (
    <Modal show={show} isPost modalClosed={cancelHandler}>
      <Post
        post={post}
        loading={loading}
        editPostHandler={editPostHandler}
        deleteModalHandler={deleteModalHandler}
        followHanlder={followHanlder}
        likeHandler={likeHandler}
        likeBtn={likeBtn}
        followBtn={followBtn}
        showAskSignInModal={showAskSignInModal}
      />
    </Modal>
  );
};

export default PostModal;
