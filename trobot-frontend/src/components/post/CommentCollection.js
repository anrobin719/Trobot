import React from 'react';

import styled from 'styled-components';
import Comment from './Comment';
import CommentInput from './CommentInput';
import { updateObject } from '../../lib/shared/utility';
import palette from '../../lib/styles/palette';
import device from '../../lib/styles/device';

const CommentCollection = ({
  post,
  comments,
  isAuthenticated,
  updatePostHandler,
  showAskSignInModal,
  deleteCommentHandler,
}) => {
  const submitHandler = inputVal => {
    const whole = post.toJS();
    const userId = localStorage.getItem('userId');
    const nickname = localStorage.getItem('nickname');
    const img = localStorage.getItem('img');
    const generatedId = userId + new Date().getTime();

    const updatedComments = updateObject(comments, {
      [generatedId]: {
        userId,
        nickname,
        img,
        commentId: generatedId,
        comment: inputVal,
      },
    });
    
    const updatedPost = updateObject(whole, {
      comments: updatedComments,
    });
    
    updatePostHandler(updatedPost);
  };

  const commentArray = [];
  if (comments !== 0) {
    for (const commentId in comments) {
      commentArray.push({
        commentId: comments[commentId].commentId,
        img: comments[commentId].img,
        nickname: comments[commentId].nickname,
        userId: comments[commentId].userId,
        comment: comments[commentId].comment,
      });
    }
  }

  const commentList = commentArray.map(com => {
    return (
      <Comment
        key={com.commentId}
        commentId={com.commentId}
        img={com.img}
        id={com.nickname}
        userId={com.userId}
        comment={com.comment}
        deleteCommentHandler={deleteCommentHandler}
      />
    );
  });

  let myImg =
    'https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png';
  if (isAuthenticated) {
    myImg = localStorage.getItem('img');
  }

  return (
    <CommentWrapper>
      <CommentInput
        myImg={myImg}
        submitHandler={submitHandler}
        isAuthenticated={isAuthenticated}
        showAskSignInModal={showAskSignInModal}
      />
      <CommentList>
        {commentList.length === 0 ? (
          <p>아이디어에 대해 소통해보세요!</p>
        ) : (
          [commentList]
        )}
      </CommentList>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  flex: 0 0 60%;
  background: white;
  border-radius: 0.2rem;
  @media ${device.tablet} {
    flex: 0 0 100%;
  }
`;

const CommentList = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 0.2rem;
  > p {
    color: ${palette.gray[6]};
  }
`;

export default CommentCollection;
