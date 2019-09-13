import React from 'react';

import styled from 'styled-components';

const Input = ({
  invalid,
  shouldValidate,
  touched,
  elementType,
  configType,
  //   dafaultValue,
  changed,
  elementConfig,
  value,
  label,
}) => {
  let inputElement = null;

  switch (elementType) {
    case 'input':
      switch (configType) {
        // case 'checkbox':
        //   inputElement = dafaultValue.map(val => {
        //     return (
        //       <CheckBoxDiv key={val} className={classes.checkboxTag}>
        //         <input type="checkbox" value={val} onChange={changed} />
        //         <span>{val}</span>
        //       </CheckBoxDiv>
        //     );
        //   });
        //   break;
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

const InputDiv = styled.div`
  margin-bottom: 32px;
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
`;

// const CheckBoxDiv = styled.div`

// `;

const InputTag = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #484848;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #484848;
    background-color: #fff;
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
  ${invalid}
`;

const TextareaTag = styled.textarea`
  display: block;
  width: 100%;
  height: calc((1.5em + 0.75rem + 2px) * 3);
  padding: 0.375rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #484848;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #484848;
    background-color: #fff;
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
  ${invalid}
`;

export default Input;
