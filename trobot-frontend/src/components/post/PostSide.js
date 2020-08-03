import React from 'react';

import styled from 'styled-components';
import Button from '../ui/Button';
import device from '../../lib/styles/device';

const PostSide = ({
  authorId,
  followHanlder,
  likeHandler,
  likeBtn,
  followBtn,
  showAskSignInModal,
}) => {
  const userId = localStorage.getItem('userId');

  const onClickBtn = btnName => {
    if (userId && btnName === 'like') {
      likeHandler();
      console.log(`like btn clicked!`);
    } else if (userId && btnName === 'follow') {
      followHanlder();
      console.log(`follow btn clicked!`);
    }
    else {
      showAskSignInModal();
    }
  };

  return (
    <ContentBox>
      <Button
        theme={likeBtn ? 'outlinePoint' : 'point'}
        size="full"
        type="button"
        onClick={() => onClickBtn('like')}
      >
        {likeBtn ? `Like ✓` : 'Like'}
      </Button>
      {authorId !== userId && (
        <Button
          theme={followBtn ? 'outline' : 'basic'}
          size="full"
          type="button"
          onClick={() => onClickBtn('follow')}
        >
          {followBtn ? `Following ✓` : 'Follow'}
        </Button>
      )}
    </ContentBox>
  );
};

const ContentBox = styled.div`
  flex: 0 0 36%;
  > button {
    margin-bottom: 1rem;
  }
  @media ${device.tablet} {
    flex: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    > button {
      flex: 0 0 48%;
    }
  }
`;

export default PostSide;
