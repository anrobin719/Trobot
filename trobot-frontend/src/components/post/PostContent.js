import React from 'react';

import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentCollectionContainer from '../../containers/post/CommentCollectionContainer';
import palette from '../../lib/styles/palette';

const PostContent = ({ pnum, body, editPostHandler, deletePostHandler }) => {
  return (
    <ContentBox>
      <Body>
        {body}
        <EditBtnBox>
          <span role="presentation" onClick={() => editPostHandler(pnum)}>
            <EditIcon />
          </span>
          <span role="presentation" onClick={() => deletePostHandler(pnum)}>
            <DeleteIcon />
          </span>
        </EditBtnBox>
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
