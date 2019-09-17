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
      isStoredList: false,
    };
  }

  componentDidMount() {
    const { unum, onGetMyList } = this.props;
    onGetMyList(unum);
    // onGetStoredList(unum);
  }

  componentDidUpdate(prevProps) {
    const { unum, onGetMyList } = this.props;
    if (unum !== prevProps.unum) {
      onGetMyList(unum);
      // onGetStoredList(unum);
    }
  }

  changeListHandler = status => {
    if (status === 'stored') {
      this.setState({
        isStoredList: true,
      });
    } else {
      this.setState({
        isStoredList: false,
      });
    }
  };

  pathHandler = postId => {
    const { onShowModal, onStorePostId } = this.props;
    onStorePostId(postId);
    onShowModal('post');
  };

  render() {
    const { isStoredList } = this.state;
    const { storedList, myList, loading } = this.props;
    return (
      <>
        {!myList || loading ? (
          <Loading />
        ) : (
          <UserContents
            changeListHandler={this.changeListHandler}
            isStoredList={isStoredList}
            // storedList={storedList}
            myList={myList}
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
    storedList: state.list.storedList,
    myList: state.list.myList,
    loading: state.list.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetMyList: userId => dispatch(actions.getMyList(userId)),
    onStorePostId: postId => dispatch(actions.storePostId(postId)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContentsContainer);
