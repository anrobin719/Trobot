import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import EditProfileModal from '../../components/modal/EditProfileModal';

class EditProfileModalContainer extends Component {
  profileSubmit = () => {
    const { onEditProfile, postId } = this.props;
    onEditProfile(postId);
    this.cancelHandler();
  };

  cancelHandler = () => {
    const { onCancelModal } = this.props;
    onCancelModal('editProfile');
  };

  render() {
    const { show } = this.props;
    return (
      <EditProfileModal
        show={show}
        profileSubmit={this.profileSubmit}
        cancelHandler={this.cancelHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.base.getIn(['modal', 'editProfile']),
    postId: state.post.get('postId'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
    // onEditProfile: postId => dispatch(actions.editProfile(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfileModalContainer);
