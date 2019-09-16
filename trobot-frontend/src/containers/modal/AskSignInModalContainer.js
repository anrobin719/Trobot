import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AskSignInModal from '../../components/modal/AskSignInModal';
import * as actions from '../../store/actions/index';

class AskSignInModalContainer extends Component {
  signInSubmit = () => {
    const { history } = this.props;
    this.cancelHandler();
    history.push('/auth/signin');
  };

  signUpSubmit = () => {
    const { history } = this.props;
    this.cancelHandler();
    history.push('/auth/signup');
  };

  cancelHandler = () => {
    const { onCancelModal } = this.props;
    onCancelModal('askSignIn');
  };

  render() {
    const { show } = this.props;
    return (
      <AskSignInModal
        show={show}
        signInSubmit={this.signInSubmit}
        signUpSubmit={this.signUpSubmit}
        cancelHandler={this.cancelHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.base.getIn(['modal', 'askSignIn']),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(AskSignInModalContainer));
