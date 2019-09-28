import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import List from '../../components/list/List';
import CircleBtns from '../../components/list/CircleBtns';
import Loading from '../../components/ui/Loading';
import * as actions from '../../store/actions/index';

class ListContainer extends Component {
  componentDidMount() {
    const { tag, onGetListByTag, onGetList } = this.props;
    if (tag) {
      onGetListByTag(tag);
    } else {
      onGetList();
    }
  }

  componentDidUpdate(prevProps) {
    const { tag, onGetListByTag, onGetList, location } = this.props;
    if (location !== prevProps.location) {
      if (tag) {
        onGetListByTag(tag);
      } else {
        onGetList();
      }
    }
  }

  pathHandler = (postId, postTag) => {
    const { onShowModal, onStorePostId } = this.props;
    // 아이디어 클릭 시, 포스트 아이디와 태그를 저장
    onStorePostId(postId, postTag);
    onShowModal('post');
  };

  editHandler = () => {
    const { onShowModal } = this.props;
    onShowModal('askSignIn');
  };

  render() {
    const { list, resource, loading, isAuthenticated } = this.props;
    return (
      <>
        {!list ? (
          <Loading />
        ) : (
          <>
            <List
              list={list}
              resource={resource}
              loading={loading}
              pathHandler={this.pathHandler}
            />
            <CircleBtns
              isAuthenticated={isAuthenticated}
              editHandler={this.editHandler}
            />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list.list,
    loading: state.list.loading,
    error: state.list.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetListByTag: tag => dispatch(actions.getList(tag)),
    onGetList: () => dispatch(actions.getList()),
    onStorePostId: (postId, postTag) =>
      dispatch(actions.storePostId(postId, postTag)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ListContainer));
