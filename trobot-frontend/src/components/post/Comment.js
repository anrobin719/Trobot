import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import palette from '../../lib/styles/palette';

const Comment = ({
  commentId,
  img,
  id,
  userId,
  comment,
  deleteCommentHandler,
}) => {
  const myId = localStorage.getItem('userId');

  return (
    <CommentBox>
      {/* 프로필 이미지 */}
      <ProfileImg>
        <Link to={`/user/${userId}`}>
          <img src={img} alt={id} />
        </Link>
      </ProfileImg>
      {/* 유저 닉네임, 댓글 내용 */}
      <Contents>
        <Link to={`/user/${userId}`}>
          <h6>{id}</h6>
        </Link>
        <p>{comment}</p>
      </Contents>
      {/* 삭제버튼 - 본인 댓글일때 삭제 가능 */}
      {userId === myId && (
        <DeleteBtnBox onClick={() => deleteCommentHandler(commentId)}>
          <CloseIcon />
        </DeleteBtnBox>
      )}
    </CommentBox>
  );
};

const CommentBox = styled.div`
  position: relative;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  // 마지막 댓글은 margin-bottom 제거
  &:last-child {
    margin-bottom: 0;
  }
`;

const Contents = styled.div`
  margin-left: 1rem;
`;

const ProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DeleteBtnBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding-right: 0.3rem;
  cursor: pointer;
  svg {
    height: 100%;
    font-size: 1rem;
    color: ${palette.gray[6]};
  }
`;

export default Comment;
