import React, { Component } from 'react';

import styled from 'styled-components';
import Input from '../ui/Input';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';
import { updateObject } from '../../lib/shared/utility';

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
            isEmail: true,
          },
          vaild: false,
        },
      },
    };
  }

  // 댓글 인풋 체인지 핸들러
  inputChangeHandler = e => {
    const { controls } = this.state;
    const updatedFormElement = updateObject(controls.comments, {
      value: e.target.value,
    });

    const updatedForm = updateObject(controls, {
      comments: updatedFormElement,
    });

    this.setState({ controls: updatedForm });
  };

  // 작성시 인풋 값 전송, 인풋 값 초기화
  onSubmit = e => {
    e.preventDefault();
    const { submitHandler } = this.props;
    const { controls } = this.state;
    const inputVal = controls.comments.value;
    submitHandler(inputVal);
    console.log('comment Input submit!', inputVal);

    const clearInputValue = updateObject(controls, {
      comments: updateObject(controls.comments, {
        value: '',
      }),
    });
    this.setState({ controls: clearInputValue });
  };

  render() {
    const { controls } = this.state;
    return (
      <CommentInputBox>
        <MyImg>
          <img
            src="https://images.unsplash.com/photo-1557180340-e7910d785b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80"
            alt="me"
          />
        </MyImg>
        <form onSubmit={this.onSubmit}>
          <Input
            elementType={controls.comments.elementType}
            configType={controls.comments.elementConfig.type}
            elementConfig={controls.comments.elementConfig}
            value={controls.comments.value}
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
