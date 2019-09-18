import React from 'react';

import styled from 'styled-components';
import Comment from './Comment';
import CommentInput from './CommentInput';
import { updateObject } from '../../lib/shared/utility';
import palette from '../../lib/styles/palette';

const CommentCollection = ({
  post,
  comments,
  isAuthenticated,
  updatePostHandler,
  showAskSignInModal,
  deleteCommentHandler,
}) => {
  // 댓글 작성시
  const submitHandler = inputVal => {
    const whole = post.toJS();
    const userId = localStorage.getItem('userId');
    const nickname = localStorage.getItem('nickname');
    const img = localStorage.getItem('img');
    const generatedId = userId + Math.floor(Math.random() * 9999);

    // 기존 댓글들에 새로운 키값으로 새 댓글 추가
    const updatedComments = updateObject(comments, {
      [generatedId]: {
        userId,
        nickname,
        img,
        commentId: generatedId,
        comment: inputVal,
      },
    });
    // 기존 포스트 데이터에 댓글 업데이트
    const updatedPost = updateObject(whole, {
      comments: updatedComments,
    });
    // 데이터에 업데이트 된 포스트 저장
    updatePostHandler(updatedPost);
  };

  // 출력용 댓글 배열
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

  // 댓글 배열을 각각의 댓글로 변환
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

  // 댓글 인풋 옆 디폴트 이미지, 로그인 시 본인 이미지로 설정
  let myImg =
    'https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png';
  if (isAuthenticated) {
    myImg = localStorage.getItem('img');
  }

  return (
    <CommentWrapper>
      {/* 코멘트 인풋 */}
      <CommentInput
        myImg={myImg}
        submitHandler={submitHandler}
        isAuthenticated={isAuthenticated}
        showAskSignInModal={showAskSignInModal}
      />
      {/* 코멘트 리스트 */}
      <CommentList>
        {/* 출력할 코멘트가 없을 시, 디폴트 멘트 출력 */}
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
  background: white;
  border-radius: 0.2rem;
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
