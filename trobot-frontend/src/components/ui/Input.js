import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Input = ({
  invalid,
  shouldValidate,
  touched,
  elementType,
  configType,
  dafaultValue,
  changed,
  elementConfig,
  value,
  label,
  postTag,
}) => {
  let inputElement = null;

  switch (elementType) {
    case 'input':
      switch (configType) {
        case 'radio':
          inputElement = dafaultValue.map(val => {
            return (
              <RadioTag key={val}>
                <input
                  type="radio"
                  name="tags"
                  value={val}
                  onChange={changed}
                />
                <span>{val}</span>
              </RadioTag>
            );
          });
          break;
        case 'text':
        case 'email':
        case 'password':
          inputElement = (
            <InputTag
              {...elementConfig}
              inValid={invalid && shouldValidate && touched}
              value={value}
              autoComplete="on"
              onChange={changed}
            />
          );
          break;
        default:
          inputElement = (
            <InputTag
              {...elementConfig}
              inValid={invalid && shouldValidate && touched}
              value={value}
              onChange={changed}
            />
          );
      }
      break;

    case 'textarea':
      inputElement = (
        <TextareaTag
          {...elementConfig}
          inValid={invalid && shouldValidate && touched}
          value={value}
          onChange={changed}
        />
      );
      break;

    default:
      inputElement = (
        <input {...elementConfig} value={value} onChange={changed} />
      );
  }

  return (
    <InputDiv>
      <label>{label}</label>
      {inputElement}
    </InputDiv>
  );
};

const invalid = props => `
  border: ${props.inValid && `1px solid rgba(255, 0, 0, 0.4);`}
  background-color: ${props.inValid && `#ff000015;`}
`;

const input = () => `
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: white;
  border: 1px solid ${palette.gray[3]};
  border-radius: 0.2rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: ${palette.blue[3]};
    outline: none;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
  &::placeholder {
    color: ${palette.gray[5]};
  }
`;

const InputDiv = styled.div`
  margin-bottom: 32px;
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
`;

const InputTag = styled.input`
  height: calc(1.5em + 0.75rem + 2px);
  ${input}
  ${invalid}
`;

const TextareaTag = styled.textarea`
  height: calc((1.5em + 0.75rem + 2px) * 5);
  ${input}
  ${invalid}
`;

const RadioTag = styled.div`
  display: inline-block;
  margin-right: 32px;
  input {
    margin-right: 6px;
  }
`;

export default Input;
