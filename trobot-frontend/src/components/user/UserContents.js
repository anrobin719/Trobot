import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import IdeaList from '../list/IdeaList';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';

const UserContents = ({
  myPage,
  unum,
  following,
  isLikeList,
  // 저장한 아이디어 리스트
  myList,
  // 좋아요한 아이디어 리스트 - 로그인한 유저 용
  likeList,
  // 좋아요한 아이디어 리스트 - 다른 유저용
  likePost,
  changeListHandler,
  pathHandler,
}) => {
  // 팔로잉 유저 중 현재 페이지 유저와 일치하는 경우가 있는지 확인
  let isFollow;
  if (following) {
    isFollow = following.find(f => {
      return f.userId === unum;
    });
  }

  return (
    <Wrapper>
      <Ideas>
        <div>
          <Button
            theme={isLikeList && 'active'}
            onClick={() => changeListHandler('like')}
          >
            좋아요한 아이디어
          </Button>
          <Button
            theme={!isLikeList && 'active'}
            onClick={() => changeListHandler('my')}
          >
            작성한 아이디어
          </Button>
        </div>
        {/* 좋아요한 아이디어, 작성한 아이디어 스위치 버튼 */}
        {isLikeList ? (
          // 내 페이지 일 때, 다른 유저 페이지 일 때 구분
          <IdeaList list={myPage ? likePost : likeList} />
        ) : (
          <IdeaList list={myList} pathHandler={pathHandler} />
        )}
      </Ideas>
      <MoreInfo>
        {/* 현재 유저 페이지가 자신의 페이지가 아닐 때, 팔로우 버튼 디스플레이 */}
        {!myPage && (
          <Button theme="basic" disabled={isFollow} size="full">
            {isFollow ? `Following ✓` : 'Follow'}
          </Button>
        )}
      </MoreInfo>
    </Wrapper>
  );
};

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 6rem;
`;

const Ideas = styled.section`
  flex: 0 0 60%;
  > div {
    display: flex;
    margin-bottom: 1rem;
    > h3 {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1rem;
      margin-right: 1rem;
      &:hover,
      &:active {
        color: ${palette.blue[9]};
      }
    }
  }
`;

const MoreInfo = styled.section`
  padding-top: 2rem;
  flex: 0 0 36%;
`;

export default UserContents;
