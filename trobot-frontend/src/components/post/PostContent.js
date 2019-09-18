import React from 'react';

import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentCollectionContainer from '../../containers/post/CommentCollectionContainer';
import palette from '../../lib/styles/palette';

const PostContent = ({
  body,
  authorId,
  editPostHandler,
  deletePostHandler,
}) => {
  const userId = localStorage.getItem('userId');

  return (
    <ContentBox>
      <Body>
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
      </Body>

      {/* 댓글 관련 컴포넌트 : 댓글 인풋 + 댓글 출력 */}
      <CommentCollectionContainer />
    </ContentBox>
  );
};

const ContentBox = styled.div`
  flex: 0 0 60%;
`;

const Body = styled.div`
  position: relative;
  background: white;
  min-height: 20rem;
  margin-bottom: 3rem;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 0.2rem;
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
