import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import shadow from '../../lib/styles/shadow';

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
          background-color: ${palette.blue[8]};
      }
      `;
  }
  return null;
};

const point = () => ({ theme }) => {
  if (theme === 'point') {
    return `
      color: white;
      background-color: ${palette.point[0]};
      &:hover {
          background-color: ${palette.point[1]};
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

const outlinePoint = () => ({ theme }) => {
  if (theme === 'outlinePoint') {
    return `
      color: ${palette.point[2]};
      background-color: transparent;
      border: 1px solid ${palette.point[2]};
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
      background-color: ${palette.point[0]};
      box-shadow: ${shadow.float[2]};
      &:hover {
          transform: translateY(-4px);
          box-shadow: ${shadow.float[3]};
        }
    `;
  }
  return null;
};

const active = () => ({ theme }) => {
  if (theme === 'active') {
    return `
      background: ${palette.gray[0]};
      color: ${palette.blue[8]};
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

const big = () => ({ size }) => {
  if (size === 'big') {
    return `
      padding: .8rem 2.8rem;
      font-weight: 600;
      `;
  }
  return null;
};

const disable = () => ({ disabled }) => {
  if (disabled) {
    return `
    cursor: default;
    &:hover, &:active {
        box-shadow: none;
    }
      `;
  }
  return null;
};

const BasicButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 1.2rem;
    color: ${palette.gray[6]};
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
    ${outlinePoint}
    ${outlineWhite}
    ${circleBtn}
    ${full}
    ${big}
    ${disable}
    ${active}
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
    ${outlinePoint}
    ${outlineWhite}
    ${circleBtn}
    ${full}
    ${big}
    ${disable}
    ${active}
`;

export default Button;
