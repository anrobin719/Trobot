import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    background-color: white;
    border-radius: .6rem;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,.1), 0 2px 4px rgba(0,0,0,.1);
    transition: box-shadow .2s ease-out;
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
        box-shadow: 0 16px 24px rgba(0,0,0,.1), 0 2px 4px rgba(0,0,0,.1);
  }
`;

export default Tag;
