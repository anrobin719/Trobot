import React from 'react';

import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = ({ isSignup }) => {
  const submitHandler = (email, password, isSignup) => {
    if (isSignup) {
      console.log('Sign up submit!');
    } else {
      console.log('Sign in submit!');
    }
  };

  return (
    <AuthBox>
      <h2>로그인</h2>
      {isSignup ? <SignUp /> : <SignIn submitHandler={submitHandler} />}
    </AuthBox>
  );
};

const AuthBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 90%;
  padding: 4rem 4rem 8rem;
  border-radius: 0.6rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  > h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export default Auth;
