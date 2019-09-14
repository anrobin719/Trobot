import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import BackDrop from '../common/BackDrop';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostSide from './PostSide';
import palette from '../../lib/styles/palette';

const Post = () => {
  return (
    <>
      <BackDrop show="true" />
      <Wrapper>
        <PostBox>
          <PostHeader />
          <section>
            <PostContent />
            <PostSide />
          </section>
        </PostBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Responsive)`
  position: relative;
  height: 100vh;
`;

const PostBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 300;
  width: 100%;
  padding: 4rem 3rem;
  background: ${palette.gray[2]};
  border-radius: 1rem;
  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Post;
