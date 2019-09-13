import React from 'react';
import { Link } from 'react-router-dom';

import NotesIcon from '@material-ui/icons/Notes';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import device from '../../lib/styles/device';
import Responsive from './Responsive';
import NavigationItems from './NavigationItems';

const Toolbar = ({ drawerToggleClicked }) => {
  return (
    <>
      <ToolbarBox>
        <Wrapper>
          <MenuToggleBtn
            onClick={() => drawerToggleClicked()}
            role="presentation"
          >
            <NotesIcon />
          </MenuToggleBtn>

          <LogoBox>
            <Link to="/">Trobot</Link>
          </LogoBox>
          <NavigationItemsBox>
            <NavigationItems />
          </NavigationItemsBox>
        </Wrapper>
      </ToolbarBox>
      <Spacer />
    </>
  );
};

const ToolbarBox = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  background: white;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const LogoBox = styled.div`
  a {
    height: 100%;
    line-height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${palette.blue[9]};
  }
  @media ${device.tablet} {
    display: none;
  }
`;

const MenuToggleBtn = styled.div`
  display: none;
  position: absolute;
  left: 1rem;
  svg {
    font-size: 2rem;
  }
  @media ${device.tablet} {
    display: block;
  }
`;

const NavigationItemsBox = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 4rem;
`;

export default Toolbar;
