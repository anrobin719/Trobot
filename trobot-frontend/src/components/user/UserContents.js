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
  isStoredList,
  // storedList,
  myList,
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
            theme={isStoredList && 'active'}
            onClick={() => changeListHandler('stored')}
          >
            저장 아이디어
          </Button>
          <Button
            theme={!isStoredList && 'active'}
            onClick={() => changeListHandler('my')}
          >
            작성 아이디어
          </Button>
        </div>
        {isStoredList ? null : (
          // <IdeaList list={storedList} />
          <IdeaList list={myList} pathHandler={pathHandler} />
        )}
      </Ideas>
      <MoreInfo>
        {/* 현재 유저 페이지가 자신의 페이지일때, 팔로우 버튼 디스플레이 */}
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
  //   outline: 1px solid red;
  padding-top: 3rem;
  padding-bottom: 6rem;
`;

const Ideas = styled.section`
  flex: 0 0 60%;
  //   outline: 1px solid red;
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
  //   outline: 1px solid red;
`;

export default UserContents;
