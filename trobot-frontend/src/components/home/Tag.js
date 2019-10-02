import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import shadow from '../../lib/styles/shadow';
import device from '../../lib/styles/device';

const Tag = ({ title, emoji, to }) => {
  return (
    <TagOutBox>
      <Link to={to}>
        <div>
          <h5>{emoji}</h5>
          <h4>{title}</h4>
        </div>
      </Link>
    </TagOutBox>
  );
};

const TagOutBox = styled.div`
  padding: 0 2rem;
  margin-bottom: 4rem;
  flex: 0 0 25%;
  height: 14rem;
  > a {
    display: flex;
    position: relative;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    background-color: white;
    border-radius: 0.6rem;
    cursor: pointer;
    box-shadow: ${shadow.basic[1]};
    transition: all 0.2s ease-out;
    h5 {
      font-size: 2rem;
    }
    h4 {
      margin-top: 1rem;
      font-size: 1.4rem;
      color: ${palette.gray[7]};
    }
    &:hover,
    &:active {
      top: -4px;
      box-shadow: ${shadow.float[1]};
    }
  }

  @media ${device.laptop} {
    padding: 0 1rem;
    margin-bottom: 2rem;
    height: 12rem;
  }
  @media ${device.tablet} {
    flex: 0 0 50%;
    margin-bottom: 2rem;
  }
  @media ${device.mobileL} {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }
`;

export default Tag;
