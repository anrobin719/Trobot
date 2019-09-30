import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserContents from '../../components/user/UserContents';
import * as actions from '../../store/actions/index';
import Loading from '../../components/ui/Loading';

class UserContentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 리스트 변경용 상태 저장
      isLikeList: false,
      // 팔로우 버튼 테마 설정입니다. true = 활성화, false = 비활성화
      followBtn: null,
    };
  }

  componentDidMount() {
    const { unum, onGetMyList, onGetLikeList, onGetFollowList } = this.props;
    onGetMyList(unum);
    onGetLikeList(unum);
    onGetFollowList(unum);
  }

  componentDidUpdate(prevProps) {
    const {
      unum,
      onGetMyList,
      onGetLikeList,
      onGetFollowList,
      following,
    } = this.props;
    if (unum !== prevProps.unum) {
      onGetMyList(unum);
      onGetLikeList(unum);
      onGetFollowList(unum);

      // 팔로잉 유저 중, 포스트 작성자와 일치하는 경우가 있는지 확인합니다.
      let isFollow;
      if (following) {
        isFollow = following.find(f => {
          return f.userId === unum;
        });
      }
      console.log(isFollow);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ followBtn: isFollow !== undefined });
    }
  }

  changeListHandler = status => {
    if (status === 'like') {
      this.setState({
        isLikeList: true,
      });
    } else {
      this.setState({
        isLikeList: false,
      });
    }
  };

  pathHandler = (postId, postTag) => {
    const { onShowModal, onStorePostId } = this.props;
    onStorePostId(postId, postTag);
    onShowModal('post');
  };

  // 팔로우 버튼을 클릭할 때 이벤트 핸들러 입니다.
  followHanlder = () => {
    const { onFollow, unum, user, following } = this.props;
    const { email, nickname, img } = user.toJS();
    const followData = {
      userId: unum,
      nickname,
      email,
      img,
    };
    const { followBtn } = this.state;

    // 팔로잉 유저 중, 포스트 작성자와 일치하는 경우가 있는지 확인합니다.
    let isFollow;
    if (following) {
      isFollow = following.find(f => {
        return f.userId === unum;
      });
    }
    // 현재 포스트 작성자가 팔로우하는 유저라면, (또는 현재 팔로우 버튼이 활성화 된 상태라면)
    if (followBtn || (isFollow !== undefined && followBtn)) {
      // 팔로우 버튼 상태 '팔로우 취소(false)'로 전환합니다.
      this.setState({ followBtn: false });
      console.log('follow to false');
    }
    // 팔로우 한 유저가 아니라면,
    else {
      // 팔로우 버튼 상태 '팔로우 하기(true)'로 전환합니다.
      this.setState({ followBtn: true });
      console.log('follow to true');
    }

    // 포스트 작성자 아이디, 포스트 데이터, 팔로우 버튼의 활성 상태를 액션으로 보냅니다.
    onFollow(unum, followData, followBtn);
  };

  showAskSignInModal = () => {
    const { onShowModal } = this.props;
    onShowModal('askSignIn');
  };

  render() {
    const { isLikeList, followBtn } = this.state;
    const {
      isAuthenticated,
      unum,
      myList,
      likePost,
      likeList,
      following,
      followingList,
      followerList,
      loading,
    } = this.props;
    const userId = localStorage.getItem('userId');
    return (
      <>
        {!myList || loading ? (
          <Loading />
        ) : (
          <UserContents
            myPage={isAuthenticated && unum === userId}
            unum={unum}
            isLikeList={isLikeList}
            // 저장한 아이디어 리스트
            myList={myList}
            // 좋아요한 아이디어 리스트 - 로그인한 유저 용
            likeList={likeList}
            // 좋아요한 아이디어 리스트 - 다른 유저용
            likePost={likePost}
            following={following}
            followingList={followingList}
            followerList={followerList}
            followBtn={followBtn}
            changeListHandler={this.changeListHandler}
            pathHandler={this.pathHandler}
            followHanlder={this.followHanlder}
            showAskSignInModal={this.showAskSignInModal}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    otherUserId: state.user.getIn(['user', 'userId']),
    myList: state.list.myList,
    likePost: state.auth.likePost,
    likeList: state.list.likeList,
    following: state.auth.following,
    followingList: state.list.followingList,
    followerList: state.list.followerList,
    loading: state.list.loading,
    user: state.user.get('user'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetMyList: userId => dispatch(actions.getMyList(userId)),
    onGetLikeList: userId => dispatch(actions.getLikeList(userId)),
    onGetFollowList: userId => dispatch(actions.getFollowList(userId)),
    onStorePostId: (postId, postTag) =>
      dispatch(actions.storePostId(postId, postTag)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
    onFollow: (authorId, followData, followBtn) =>
      dispatch(actions.follow(authorId, followData, followBtn)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContentsContainer);
