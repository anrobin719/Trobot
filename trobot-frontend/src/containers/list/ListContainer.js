import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../../components/list/List';
import CircleBtns from '../../components/list/CircleBtns';
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

  render() {
    const { list, resource, loading } = this.props;
    return (
      <>
        <List list={list} resource={resource} loading={loading} />
        <CircleBtns />
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListContainer);
