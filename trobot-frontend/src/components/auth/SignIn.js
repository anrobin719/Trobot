import React, { Component } from 'react';

import Input from '../ui/Input';
import { updateObject, checkValidity } from '../../lib/shared/utility';
import styled from 'styled-components';
import Button from '../ui/Button';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'example@google.com',
          },
          value: '',
          validation: {
            required: true,
            isEmail: true,
          },
          vaild: false,
          touched: false,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'password',
          },
          value: '',
          validation: {
            required: true,
            minLength: 8,
          },
          valid: false,
          touched: false,
        },
      },
      isSignup: false,
    };
  }

  onSubmit = e => {
    const { submitHandler } = this.props;
    const { controls, isSignup } = this.state;
    e.preventDefault();
    submitHandler(controls.email.value, controls.password.value, isSignup);
  };

  inputChangedHandler = (event, controlName) => {
    const { controls } = this.state;
    const updateControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation,
        ),
        touched: true,
      }),
    });
    this.setState({ controls: updateControls });
  };

  render() {
    const formElementsArray = [];
    const { controls } = this.state;

    for (const key in controls) {
      formElementsArray.push({
        id: key,
        config: controls[key],
      });
    }

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        label={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        configType={formElement.config.elementConfig.type}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));
    return (
      <>
        <form onSubmit={this.onSubmit}>
          {form}
          <BtnBox>
            <Button theme="basic" type="submit">
              로그인
            </Button>
          </BtnBox>
        </form>
      </>
    );
  }
}

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export default SignIn;
