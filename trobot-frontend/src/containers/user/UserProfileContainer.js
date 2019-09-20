import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../components/user/UserProfile';
import * as actions from '../../store/actions/index';

class UserProfileContainer extends Component {
  componentDidMount() {
    const { onGetUserInfo, unum } = this.props;
    const userId = localStorage.getItem('userId');
    // 마이페이지가 아닌 다른 유저 페이지 방문시에만 유저 정보 get
    if (userId !== unum) {
      onGetUserInfo(unum);
      console.log('MOUNT');
    }
  }

  componentDidUpdate(prevProps) {
    const { onGetUserInfo, unum } = this.props;
    // 다른 유저 페이지로 전환시 유저 정보 get
    if (unum !== prevProps.unum) {
      onGetUserInfo(unum);
      console.log('UPDATE');
    }
  }

  editHandler = () => {
    console.log('edit btn clicked!');
  };

  render() {
    const { isAuthenticated, user, unum, loading } = this.props;
    const userId = localStorage.getItem('userId');
    let nickname;
    let email;
    let img;

    // 마이페이지 방문시
    if (isAuthenticated && userId === unum) {
      nickname = localStorage.getItem('nickname');
      email = localStorage.getItem('email');
      img = localStorage.getItem('img');
    }
    // 다른 유저 페이지 방문시
    else {
      const userInfo = user.toJS();
      nickname = userInfo.nickname;
      email = userInfo.email;
      img = userInfo.img;
    }

    return (
      <UserProfile
        myPage={isAuthenticated && unum === userId}
        nickname={nickname}
        email={email}
        img={img}
        loading={loading}
        editHandler={this.editHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    user: state.user.get('user'),
    loading: state.user.get('loading'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUserInfo: userId => dispatch(actions.getUserInfo(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileContainer);
