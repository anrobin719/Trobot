import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Responsive from '../common/Responsive';

const Auth = ({ match }) => {
  const { authpath } = match.params;
  const isSignup = authpath === 'signup';
  const submitHandler = (email, password, signup) => {
    if (signup) {
      console.log('Sign up submit!');
    } else {
      console.log('Sign in submit!');
    }
  };

  return (
    <Wrapper>
      <AuthBox isSignup={isSignup}>
        <h2>{isSignup ? '회원가입' : '로그인'}</h2>
        {isSignup ? (
          <SignUp submitHandler={submitHandler} />
        ) : (
          <SignIn submitHandler={submitHandler} />
        )}
      </AuthBox>
    </Wrapper>
  );
};

const Wrapper = styled(Responsive)`
  position: relative;
  height: calc(100vh - 4rem);
`;

const AuthBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 90%;
  padding: ${props => (props.isSignup ? `3rem 3rem 4rem;` : `4rem 3rem 6rem;`)}
  border-radius: 0.6rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  > h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export default withRouter(Auth);
