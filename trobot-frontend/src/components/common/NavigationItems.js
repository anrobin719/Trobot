import React from 'react';

import styled from 'styled-components';
import device from '../../lib/styles/device';
import NavigationItem from './NavigationItem';

const NavigationItems = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationItem link="/list" exact>
          아이디어
        </NavigationItem>
        <NavigationItem link="/people" exact>
          함께하는 사람들
        </NavigationItem>

        <NavigationItem link="/auth" exact>
          로그인
        </NavigationItem>
        <NavigationItem link="/auth" exact>
          회원가입
        </NavigationItem>
      </NavigationList>
    </nav>
  );
};

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  @media ${device.tablet} {
    margin-top: 1.3rem;
    display: block;
  }
`;

export default NavigationItems;
