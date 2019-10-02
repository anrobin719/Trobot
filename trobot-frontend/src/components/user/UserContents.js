import React, { Component } from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import IdeaList from '../list/IdeaList';
import Button from '../ui/Button';
import ListBox from '../list/ListBox';
import palette from '../../lib/styles/palette';
import FollowList from './FollowList';
import device from '../../lib/styles/device';

class UserContents extends Component {
  toggleFollow = () => {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle,
    });
  };

  onClickBtn = () => {
    const { followHanlder, showAskSignInModal } = this.props;
    const userId = localStorage.getItem('userId');
    // 로그인 상태인 경우 정상 작동
    if (userId) {
      followHanlder();
      console.log(`follow btn clicked!`);
    }
    // 아닌 경우 로그인 모달
    else {
      showAskSignInModal();
    }
  };

  render() {
    const {
      myPage,
      unum,
      isLikeList,
      // 저장한 아이디어 리스트
      myList,
      // 좋아요한 아이디어 리스트 - 로그인한 유저 용
      likeList,
      // 좋아요한 아이디어 리스트 - 다른 유저용
      likePost,
      // 팔로우 버튼 디스플레이 판단용 내 팔로잉 리스트
      following,
      // 팔로잉 리스트
      followingList,
      // 팔로워 리스트
      followerList,
      // 팔로우 버튼 활성화 상태
      followBtn,
      changeListHandler,
      pathHandler,
    } = this.props;

    return (
      <Wrapper>
        {/* 오른쪽 버튼 + 팔로우 정보 */}
        <MoreInfo>
          {/* 현재 유저 페이지가 자신의 페이지가 아닐 때, 팔로우 버튼 디스플레이 */}
          {!myPage && (
            <Button theme="basic" size="full" onClick={this.onClickBtn}>
              {followBtn ? `Following ✓` : 'Follow'}
            </Button>
          )}
          <ListBoxWrapper>
            <List>
              <FollowListLabel>Following</FollowListLabel>
              {followingList && <FollowList list={followingList} />}
            </List>
            <List>
              <FollowListLabel>Follower</FollowListLabel>
              {followerList && <FollowList list={followerList} />}
            </List>
          </ListBoxWrapper>
        </MoreInfo>

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
            <IdeaList
              list={myPage ? likePost : likeList}
              pathHandler={pathHandler}
            />
          ) : (
            <IdeaList list={myList} pathHandler={pathHandler} />
          )}
        </Ideas>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Responsive)`
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 6rem;

  @media ${device.tablet} {
    display: block;
  }
`;

const MoreInfo = styled.section`
  padding-top: 52px;
  flex: 0 0 36%;
  > button {
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    flex: none;
    padding-top: 1rem;
  }
  @media ${device.mobileL} {
    padding-top: 0;
  }
`;

const ListBoxWrapper = styled.div`
  > div:nth-child(1) {
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    > div {
      flex: 0 0 49%;
    }
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

const List = styled(ListBox)``;

const FollowListLabel = styled.div`
  padding: 1rem;
  font-family: 'Heebo', sans-serif;
  font-weight: 600;
  color: ${palette.point[0]};
  border-bottom: 1px solid ${palette.gray[3]};
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

  @media ${device.tablet} {
    flex: none;
    > div > button {
      flex: 1;
    }
  }
`;

export default UserContents;
