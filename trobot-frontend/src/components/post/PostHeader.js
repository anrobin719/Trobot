import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const testTitle = 'Hello Trobot!';
const testSub = '서브 타이틀 입니다.';
const testAuthor = '트로봇';
const testLike = '33';
const testPublishedDate = '2019-09-14';

const PostHeader = () => {
  return (
    <ContentBox>
      <div>
        <h2>{testTitle}</h2>
        <p>
          <Link to={`/user/${testAuthor}`}>@{testAuthor}</Link>
        </p>
      </div>
      <span>{testPublishedDate}</span>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  a,
  span {
    color: ${palette.gray[6]};
  }
  a {
    font-size: 1rem;
    text-decoration: underline;
  }
`;

export default PostHeader;
