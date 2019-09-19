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
    };
  }

  componentDidMount() {
    const { unum, onGetMyList, onGetLikeList } = this.props;
    onGetMyList(unum);
    onGetLikeList(unum);
  }

  componentDidUpdate(prevProps) {
    const { unum, onGetMyList, onGetLikeList } = this.props;
    if (unum !== prevProps.unum) {
      onGetMyList(unum);
      onGetLikeList(unum);
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

  render() {
    const { isLikeList } = this.state;
    const {
      isAuthenticated,
      unum,
      following,
      likeList,
      likePost,
      myList,
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
            following={following}
            isLikeList={isLikeList}
            // 저장한 아이디어 리스트
            myList={myList}
            // 좋아요한 아이디어 리스트 - 로그인한 유저 용
            likeList={likeList}
            // 좋아요한 아이디어 리스트 - 다른 유저용
            likePost={likePost}
            changeListHandler={this.changeListHandler}
            pathHandler={this.pathHandler}
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
    likeList: state.list.likeList,
    loading: state.list.loading,
    following: state.auth.following,
    likePost: state.auth.likePost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetMyList: userId => dispatch(actions.getMyList(userId)),
    onGetLikeList: userId => dispatch(actions.getLikeList(userId)),
    onStorePostId: (postId, postTag) =>
      dispatch(actions.storePostId(postId, postTag)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContentsContainer);
