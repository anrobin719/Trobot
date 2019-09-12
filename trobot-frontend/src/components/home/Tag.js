import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagOutBox = styled.div`
  padding: 0 2rem;
  margin-bottom: 4rem;
  flex: 0 0 25%;
  height: 14rem;
  > div {
    height: 100%;
    background-color: white;
    border-radius: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: box-shadow .2s ease-out;
    box-shadow: 0 4px 8px rgba(0,0,0,.1), 0 2px 4px rgba(0,0,0,.1);
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

const Tag = ({ title, emoji }) => {
  return (
    <TagOutBox>
      <div>
        <div>
          <h5>{emoji}</h5>
          <h4>{title}</h4>
        </div>
      </div>
    </TagOutBox>
  );
};

export default Tag;
