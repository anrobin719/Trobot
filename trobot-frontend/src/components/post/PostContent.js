import React from 'react';

import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentCollectionContainer from '../../containers/post/CommentCollectionContainer';
import palette from '../../lib/styles/palette';
import device from '../../lib/styles/device';

const PostContent = ({
  body,
  authorId,
  editPostHandler,
  deletePostHandler,
}) => {
  const userId = localStorage.getItem('userId');

  return (
    <ContentBox>
      {body}
      {/* 로그인 아이디와 작성자 아이디가 같으면, 수정/삭제 버튼 디스플레이 */}
      {userId === authorId ? (
        <EditBtnBox>
          <span role="presentation" onClick={editPostHandler}>
            <EditIcon />
          </span>
          <span role="presentation" onClick={deletePostHandler}>
            <DeleteIcon />
          </span>
        </EditBtnBox>
      ) : null}
    </ContentBox>
  );
};

const ContentBox = styled.div`
  flex: 0 0 60%;
  position: relative;
  background: white;
  min-height: 20rem;
  margin-bottom: 3rem;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 0.2rem;
  @media ${device.tablet} {
    flex: none;
    margin-bottom: 1rem;
  }
`;

const EditBtnBox = styled.div`
  margin-bottom: 1rem;
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  span > svg {
    margin-left: 0.6rem;
    color: ${palette.gray[5]};
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export default PostContent;
