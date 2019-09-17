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

  pathHandler = postId => {
    const { onShowModal, onStorePostId } = this.props;
    onStorePostId(postId);
    onShowModal('post');
  };

  render() {
    const { list, resource, loading } = this.props;
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
            <CircleBtns />
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetListByTag: tag => dispatch(actions.getList(tag)),
    onGetList: () => dispatch(actions.getList()),
    onStorePostId: postId => dispatch(actions.storePostId(postId)),
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ListContainer));
