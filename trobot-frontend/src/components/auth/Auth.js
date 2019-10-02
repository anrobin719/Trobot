import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Responsive from '../common/Responsive';
import Loading from '../ui/Loading';
import shadow from '../../lib/styles/shadow';
import device from '../../lib/styles/device';

const Auth = ({ match, authSubmitHandler, loading, error }) => {
  const { authPath } = match.params;
  const isSignup = authPath === 'signup';
  const submitHandler = authForm => {
    authSubmitHandler(authForm);
  };

  return (
    <>
      <Wrapper>
        <AuthBox isSignup={isSignup}>
          {loading ? <Loading size="fit" /> : null}
          <h2>{isSignup ? '회원가입' : '로그인'}</h2>
          {isSignup ? (
            <SignUp submitHandler={submitHandler} error={error} />
          ) : (
            <SignIn submitHandler={submitHandler} error={error} />
          )}
        </AuthBox>
      </Wrapper>
    </>
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
  box-shadow: ${shadow.basic[1]};
  > h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    padding: ${props =>
      props.isSignup ? `3rem 2rem 4rem;` : `4rem 2rem 6rem;`}
  }
  @media ${device.mobileL} {
    padding: ${props =>
      props.isSignup ? `3rem 1rem 4rem;` : `4rem 1rem 6rem;`}
  }
`;

export default withRouter(Auth);
