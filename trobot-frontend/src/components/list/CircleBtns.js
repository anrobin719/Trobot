import React from 'react';

import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddIcon from '@material-ui/icons/Add';
import Button from '../ui/Button';

const CircleBtns = () => {
  const moveToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FloatBox>
      <Button theme="circleBtn" onClick={moveToTopHandler}>
        <ArrowUpwardIcon />
      </Button>
      <Button theme="circleBtn" to="/editor">
        <AddIcon />
      </Button>
    </FloatBox>
  );
};

const FloatBox = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 100;
`;

export default CircleBtns;