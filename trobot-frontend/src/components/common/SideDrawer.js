import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import device from '../../lib/styles/device';
import BackDrop from './BackDrop';
import NavigationItems from './NavigationItems';

const SideDrawer = ({ show, hide, isAuthenticated }) => {
  return (
    <>
      <BackDrop show={show} clicked={hide} />
      <SideDrawerBox show={show} onClick={hide} role="presentation">
        <NavLink to="/">
          <span>Trobot</span>
        </NavLink>
        <nav>
          <NavigationItems isAuthenticated={isAuthenticated} />
        </nav>
      </SideDrawerBox>
    </>
  );
};

const SideDrawerBox = styled.div`
  display: block;
  position: fixed;
  max-width: 80%;
  width: 360px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 300;
  background-color: white;
  padding: 2rem 1rem;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.show ? `translateX(0);` : `translateX(-100%);`)};
  @media ${device.tablet} {
    display: block;
  }
`;

export default SideDrawer;
