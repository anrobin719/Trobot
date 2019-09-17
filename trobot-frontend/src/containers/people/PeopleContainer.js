import React, { Component } from 'react';
import { connect } from 'react-redux';

import People from '../../components/people/People';
import * as actions from '../../store/actions/index';

class PeopleContainer extends Component {
  componentDidMount() {
    const { onGetPeople } = this.props;
    onGetPeople();
  }

  render() {
    const { people, loading } = this.props;
    return <People people={people} loading={loading} />;
  }
}

const mapStateToProps = state => {
  return {
    people: state.people.people,
    loading: state.people.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPeople: () => dispatch(actions.getPeople()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleContainer);
