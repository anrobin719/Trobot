import React from 'react';
// import { Link } from 'react-router-dom';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const btn = ({ children, ...rest }) => (
  <BasicButton {...rest}>{children}</BasicButton>
);
const link = ({ children, ...rest }) => (
  <LinkButton {...rest}>{children}</LinkButton>
);

const Button = ({ to, onClick, disabled, theme, size, type, children }) => {
  const Element = to && !disabled ? link : btn;
  return (
    <Element
      href={to}
      onClick={onClick}
      disabled={disabled}
      theme={theme}
      size={size}
      type={type}
    >
      {children}
    </Element>
  );
};

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

const point = () => ({ theme }) => {
  if (theme === 'point') {
    return `
      color: white;
      background-color: ${palette.yellow[9]};
      &:hover {
          background-color: ${palette.yellow[7]};
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

const disable = () => ({ disabled }) => {
  if (disabled) {
    return `
    background-color: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: default;
    &:hover, &:active {
        box-shadow: none;
        background-color: ${palette.gray[3]};
    }
      `;
  }
  return null;
};

const BasicButton = styled.button.attrs`
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
    ${basic}
    ${point}
    ${outline}
    ${outlineWhite}
    ${circleBtn}
    ${full}
    ${disable}
`;

const LinkButton = styled.a`
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
    ${basic}
    ${point}
    ${outline}
    ${outlineWhite}
    ${circleBtn}
    ${full}
    ${disable}
`;

export default Button;
