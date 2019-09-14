import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Button = ({ theme, size, children, type, onClick }) => (
  <BasicButton theme={theme} size={size} type={type} onClick={onClick}>
    {children}
  </BasicButton>
);

const basic = () => ({ theme }) => {
  if (theme === 'basic') {
    return `
      color: white;
      background-color: ${palette.blue[9]};
      &:hover {
          background-color: ${palette.blue[7]};
      }
      `;
  }
  return null;
};

const outline = () => ({ theme }) => {
  if (theme === 'outline') {
    return `
      color: ${palette.blue[9]};
      background-color: transparent;
      border: 1px solid ${palette.blue[9]};
      `;
  }
  return null;
};

const outlineWhite = () => ({ theme }) => {
  if (theme === 'outlineWhite') {
    return `
      color: white;
      background-color: transparent;
      border: 1px solid white;
      `;
  }
  return null;
};

const circleBtn = ({ theme }) => {
  if (theme === 'circleBtn') {
    return `
      width: 56px;
      height: 56px;
      margin: 24px 0;
      padding: 0;
      color: white;
      font-weight: 300;
      font-size: 1rem;
      border-radius: 50%;
      background-color: ${palette.blue[9]};
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16), 0 6px 8px rgba(0, 0, 0, 0.22);
      &:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.22);
        }
    `;
  }
  return null;
};

const full = () => ({ size }) => {
  if (size === 'full') {
    return `
      width: 100%;
      padding: 5%;
      font-weight: 600;
      `;
  }
  return null;
};

const BasicButton = styled.button.attrs({
  type: props => props.type,
  onclick: props => props.onClick,
})`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 1.2rem;
    font-size: 1rem;
    border: none;
    border-radius: .2rem;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    ${circleBtn}
    ${basic}
    ${outline}
    ${outlineWhite}
    ${full}
`;

export default Button;
