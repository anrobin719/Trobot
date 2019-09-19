import React from 'react';

import styled from 'styled-components';
import Button from '../ui/Button';

const PostSide = ({
  like,
  authorId,
  following,
  likePost,
  postId,
  followHanlder,
  likeHandler,
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

  // 좋아요한 포스트 중, 현재 포스트와 일치하는 경우가 있는지 확인
  let isLike;
  if (likePost) {
    isLike = likePost.find(f => {
      return f.likePostId === postId;
    });
  }

  // 현재 포스트 좋아요 숫자 계산. 좋아요가 없을 경우 0 반환
  let likeNum = 0;
  if (like) {
    likeNum = Object.keys(like).length;
  }

  return (
    // 일치할 경우, 다른 값 출력
    <ContentBox>
      <Button
        theme="point"
        disabled={isLike}
        size="full"
        type="button"
        onClick={() => onClickBtn('like')}
      >
        Like {likeNum}
      </Button>
      {/* 로그인 되어있지 않거나, 현재 포스트가 자신의 포스트가 아닐 때, 팔로우 버튼 디스플레이 */}
      {authorId !== userId && (
        <Button
          theme="basic"
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
