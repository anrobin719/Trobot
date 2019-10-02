import React from 'react';

import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddIcon from '@material-ui/icons/Add';
import Button from '../ui/Button';
import device from '../../lib/styles/device';

const CircleBtns = ({ isAuthenticated, editHandler }) => {
  const moveToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FloatBox>
      <Button theme="circleBtn" onClick={moveToTopHandler}>
        <ArrowUpwardIcon />
      </Button>
      {isAuthenticated ? (
        <Button theme="circleBtn" to="/editor">
          <AddIcon />
        </Button>
      ) : (
        <Button theme="circleBtn" onClick={editHandler}>
          <AddIcon />
        </Button>
      )}
    </FloatBox>
  );
};

const FloatBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 4rem;
  z-index: 100;

  @media ${device.laptop} {
    right: 3rem;
  }
  @media ${device.mobileL} {
    bottom: 0rem;
    right: 1rem;
  }
`;

export default CircleBtns;
