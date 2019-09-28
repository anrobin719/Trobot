import React, { Component } from 'react';

import styled from 'styled-components';
import Input from '../ui/Input';
import { updateObject, checkValidity } from '../../lib/shared/utility';
import Button from '../ui/Button';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        nickname: {
          label: '닉네임',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: '10자 이내의 닉네임을 입력하세요.',
          },
          value: '',
          validation: {
            required: true,
            maxLength: 10,
          },
          vaild: false,
          touched: false,
        },
        email: {
          label: '이메일',
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
          label: '비밀번호',
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: '6자 이상의 비밀번호를 설정하세요.',
          },
          value: '',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: false,
          touched: false,
        },
        ckeck_password: {
          label: '비밀번호 확인',
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: '비밀번호를 한번 더 입력해주세요.',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
      },
      signup: true,
    };
  }

  onSubmit = e => {
    const { submitHandler } = this.props;
    const { controls, signup } = this.state;
    e.preventDefault();

    const authForm = {
      nickname: controls.nickname.value,
      email: controls.email.value,
      password: controls.password.value,
      signup,
      img:
        'https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png',
    };

    submitHandler(authForm);
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
    const { error } = this.props;

    for (const key in controls) {
      formElementsArray.push({
        id: key,
        config: controls[key],
      });
    }

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        label={formElement.config.label}
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
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          <BtnBox>
            <Button theme="basic" type="submit">
              회원가입
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
  margin-top: 3rem;
`;

const ErrorMessage = styled.div`
  font-weight: 300;
  text-align: center;
`;

export default SignUp;
