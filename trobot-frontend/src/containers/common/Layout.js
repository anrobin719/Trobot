import React, { Component } from 'react';

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
    const { children } = this.props;
    const { showDrawer } = this.state;
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer show={showDrawer} hide={this.sideDrawerClosedHandler} />
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

export default Layout;
