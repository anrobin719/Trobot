import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import IdeaList from '../list/IdeaList';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';

const UserContents = ({ list }) => {
  return (
    <Wrapper>
      <Ideas>
        <div>
          <h3>저장 아이디어</h3>
          <h3>작성 아이디어</h3>
        </div>
        <IdeaList list={list} />
      </Ideas>
      <MoreInfo>
        <Button theme="basic" size="full">
          Follow
        </Button>
      </MoreInfo>
    </Wrapper>
  );
};

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  //   outline: 1px solid red;
  padding-top: 3rem;
  padding-bottom: 6rem;
`;

const Ideas = styled.section`
  flex: 0 0 60%;
  //   outline: 1px solid red;
  > div {
    display: flex;
    margin-bottom: 1rem;
    > h3 {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1rem;
      margin-right: 1rem;
      &:hover,
      &:active {
        color: ${palette.blue[7]};
      }
    }
  }
`;

const MoreInfo = styled.section`
  padding-top: 2rem;
  flex: 0 0 36%;
  //   outline: 1px solid red;
`;

export default UserContents;
