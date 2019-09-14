import React from 'react';

import styled from 'styled-components';
import Button from '../ui/Button';

const PostSide = () => {
  return (
    <ContentBox>
      <Button theme="point" size="full" type="button">
        Like
      </Button>
      <Button theme="basic" size="full" type="button">
        Follow
      </Button>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  flex: 0 0 36%;
  button {
    margin-bottom: 1rem;
  }
`;

export default PostSide;
