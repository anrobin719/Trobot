import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Toolbar from '../../components/common/Toolbar';
import Footer from '../../components/common/Footer';
import SideDrawer from '../../components/common/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false,
    };
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showDrawer: !prevState.showDrawer };
    });
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showDrawer: false });
  };

  render() {
    const { showDrawer } = this.state;
    const { children, isAuthenticated, userId } = this.props;
    return (
      <>
        <Toolbar
          isAuthenticated={isAuthenticated}
          userId={userId}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuthenticated={isAuthenticated}
          userId={userId}
          show={showDrawer}
          hide={this.sideDrawerClosedHandler}
        />
        <Main>{children}</Main>
        <Footer />
      </>
    );
  }
}

const Main = styled.main`
  min-height: calc(100vh - 4rem);
  background: ${palette.backBlue[0]};
  color: ${palette.gray[7]};
`;

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(Layout);
