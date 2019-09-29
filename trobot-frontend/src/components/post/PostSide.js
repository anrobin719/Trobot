import React from 'react';

import styled from 'styled-components';
import Button from '../ui/Button';

const PostSide = ({
  authorId,
  following,
  followHanlder,
  likeHandler,
  likeBtn,
  showAskSignInModal,
}) => {
  const userId = localStorage.getItem('userId');

  const onClickBtn = btnName => {
    // 로그인 상태인 경우 정상 작동
    if (userId && btnName === 'like') {
      likeHandler();
      console.log(`like btn clicked!`);
    } else if (userId && btnName === 'follow') {
      followHanlder();
      console.log(`follow btn clicked!`);
    }
    // 아닌 경우 로그인 모달
    else {
      showAskSignInModal();
    }
  };

  // 팔로잉 유저 중, 포스트 작성자와 일치하는 경우가 있는지 확인
  let isFollow;
  if (following) {
    isFollow = following.find(f => {
      return f.userId === authorId;
    });
  }

  return (
    // 일치할 경우, 다른 값 출력
    <ContentBox>
      <Button
        theme={likeBtn ? 'outlinePoint' : 'point'}
        size="full"
        type="button"
        onClick={() => onClickBtn('like')}
      >
        {likeBtn ? `Like ✓` : 'Like'}
      </Button>
      {/* 로그인 되어있지 않거나, 현재 포스트가 자신의 포스트가 아닐 때, 팔로우 버튼 디스플레이 */}
      {authorId !== userId && (
        <Button
          theme={isFollow ? 'outline' : 'basic'}
          disabled={isFollow}
          size="full"
          type="button"
          onClick={() => onClickBtn('follow')}
        >
          {isFollow ? `Following ✓` : 'Follow'}
        </Button>
      )}
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
