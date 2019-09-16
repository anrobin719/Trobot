import React from 'react';

import styled from 'styled-components';
import CommentCollectionContainer from '../../containers/post/CommentCollectionContainer';

const PostContent = ({ body }) => {
  return (
    <ContentBox>
      <Body>{body}</Body>
      {/* 댓글 관련 컴포넌트 : 댓글 인풋 + 댓글 출력 */}
      <CommentCollectionContainer />
    </ContentBox>
  );
};

const ContentBox = styled.div`
  flex: 0 0 60%;
`;

const Body = styled.div`
  background: white;
  min-height: 20rem;
  margin-bottom: 3rem;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 0.2rem;
`;

export default PostContent;
