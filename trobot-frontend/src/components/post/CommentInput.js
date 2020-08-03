import React, { Component } from 'react';

import styled from 'styled-components';
import Input from '../ui/Input';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';
import { updateObject, checkValidity } from '../../lib/shared/utility';

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        comments: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: '댓글 입력',
          },
          value: '',
          validation: {
            required: true,
          },
          vaild: false,
        },
      },
    };
  }

  inputChangeHandler = e => {
    const { controls } = this.state;
    const { isAuthenticated, showAskSignInModal } = this.props;

    if (isAuthenticated) {
      const updatedFormElement = updateObject(controls.comments, {
        value: e.target.value,
        valid: checkValidity(e.target.value, controls.comments.validation),
        touched: true,
      });

      const updatedForm = updateObject(controls, {
        comments: updatedFormElement,
      });

      this.setState({ controls: updatedForm });
    }

    else {
      showAskSignInModal();
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { submitHandler } = this.props;
    const { controls } = this.state;
    const inputVal = controls.comments.value;

    if (inputVal) {
      submitHandler(inputVal);
      
      const clearInputValue = updateObject(controls, {
        comments: updateObject(controls.comments, {
          value: '',
        }),
      });
      this.setState({ controls: clearInputValue });
    } else {
      const placeHolderValue = updateObject(controls, {
        comments: updateObject(controls.comments, {
          elementConfig: updateObject(controls.comments.elementConfig, {
            placeholder: '댓글을 입력해주세요',
          }),
        }),
      });
      this.setState({ controls: placeHolderValue });
    }
  };

  render() {
    const { controls } = this.state;
    const { myImg } = this.props;
    return (
      <CommentInputBox>
        <MyImg>
          <img src={myImg} alt="me" />
        </MyImg>
        <form onSubmit={this.onSubmit}>
          <Input
            elementType={controls.comments.elementType}
            configType={controls.comments.elementConfig.type}
            elementConfig={controls.comments.elementConfig}
            value={controls.comments.value}
            invalid={!controls.comments.valid}
            shouldValidate={controls.comments.validation}
            changed={e => this.inputChangeHandler(e)}
          />
          <Button theme="outline" type="submit">
            작성
          </Button>
        </form>
      </CommentInputBox>
    );
  }
}

const CommentInputBox = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding: 1rem;
  display: flex;
  align-items: center;
  form {
    flex: 1;
    display: flex;
    align-items: center;
    > div {
      margin: 0;
      flex: 1;
      label {
        display: none;
      }
    }
    button {
      font-size: 1rem;
    }
  }
`;

const MyImg = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CommentInput;
