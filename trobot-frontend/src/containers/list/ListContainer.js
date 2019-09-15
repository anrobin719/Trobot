import React, { Component } from 'react';

import List from '../../components/list/List';

class ListContainer extends Component {
  componentDidMount() {
    const { tag } = this.props;
  }

  render() {
    const { list, resource } = this.props;
    return <List list={list} resource={resource} />;
  }
}

export default ListContainer;
