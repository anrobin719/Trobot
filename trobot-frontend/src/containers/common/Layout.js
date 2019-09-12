import React, { Component } from 'react';

import styled from 'styled-components';
import Toolbar from '../../components/common/Toolbar';
import Footer from '../../components/common/Footer';

const Main = styled.main`
  min-height: calc(100vh - 4rem);
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Toolbar />
        <Main>{children}</Main>
        <Footer />
      </>
    );
  }
}

export default Layout;
