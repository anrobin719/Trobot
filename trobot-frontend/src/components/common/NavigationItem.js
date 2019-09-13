import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import device from '../../lib/styles/device';

const NavigationItem = ({ children, link, exact }) => {
  return (
    <NavigationBox>
      <NavLink to={link} exact={exact} activeClassName="active">
        {children}
      </NavLink>
    </NavigationBox>
  );
};

const NavigationBox = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 4px;
  padding: 0 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${palette.gray[7]};
  cursor: pointer;
  user-select: none;
  a {
        height: 100%;
        &:hover,
        &:active,
        &.active {
            color: ${palette.blue[9]};
    }
  }
  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    a {
        width: 100%;
      }
    }
  }
`;

export default NavigationItem;
