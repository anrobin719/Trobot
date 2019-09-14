import React from 'react';

import styled from 'styled-components';
import Input from '../ui/Input';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';

const CommentInput = () => {
  return (
    <CommentInputBox>
      <MyImg>
        <img
          src="https://images.unsplash.com/photo-1557180340-e7910d785b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80"
          alt="me"
        />
      </MyImg>
      <Input
        elementType="input"
        configType="text"
        elementConfig={{
          type: 'text',
          placeholder: 'Add comment ...',
        }}
      />
      <Button theme="outline" type="button">
        작성
      </Button>
    </CommentInputBox>
  );
};

const CommentInputBox = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding: 1rem;
  display: flex;
  align-items: center;
  > div:nth-child(2) {
    margin: 0;
    flex: 1;
    label {
      display: none;
    }
  }
  button {
    font-size: 1rem;
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
