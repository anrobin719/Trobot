import React, { Component } from 'react';

import List from '../../components/list/List';
import CircleBtns from '../../components/list/CircleBtns';

class ListContainer extends Component {
  componentDidMount() {
    const { tag } = this.props;
  }

  render() {
    const { list, resource } = this.props;
    return (
      <>
        <List list={list} resource={resource} />
        <CircleBtns />
      </>
    );
  }
}

export default ListContainer;
