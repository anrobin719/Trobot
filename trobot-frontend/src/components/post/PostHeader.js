import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import moment from 'moment';
import palette from '../../lib/styles/palette';

const PostHeader = ({ title, tag, authorNickname, publishedDate }) => {
  return (
    <ContentBox>
      <div>
        <h2>{title}</h2>
        <p>
          <Link to={`/user/${authorNickname}`}>@{authorNickname}</Link>
        </p>
      </div>
      <span>{moment(publishedDate).format('lll')}</span>
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
