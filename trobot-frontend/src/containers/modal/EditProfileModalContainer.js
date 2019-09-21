import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import EditProfileModal from '../../components/modal/EditProfileModal';

class EditProfileModalContainer extends Component {
  deleteSubmit = () => {
    const { onDeletePost, postId } = this.props;
    onDeletePost(postId);
    this.cancelHandler();
  };

  cancelHandler = () => {
    const { onCancelModal } = this.props;
    onCancelModal('askDelete');
  };

  render() {
    const { show } = this.props;
    return (
      <EditProfileModal
        show="true"
        deleteSubmit={this.deleteSubmit}
        cancelHandler={this.cancelHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.base.getIn(['modal', 'askDelete']),
    postId: state.post.get('postId'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal: modalName => dispatch(actions.hideModal(modalName)),
    onDeletePost: postId => dispatch(actions.deletePost(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfileModalContainer);
