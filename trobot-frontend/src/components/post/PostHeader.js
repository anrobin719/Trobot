import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import moment from 'moment';
import palette from '../../lib/styles/palette';
import device from '../../lib/styles/device';

const PostHeader = ({
  title,
  tag,
  authorId,
  authorNickname,
  publishedDate,
}) => {
  return (
    <ContentBox>
      <div>
        <h2>{title}</h2>
        <p>
          <Link to={`/user/${authorId}`}>@{authorNickname}</Link>
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
    display: inline-block;
    margin-top: 0.3rem;
    font-size: 1rem;
    text-decoration: underline;
  }
  @media ${device.tablet} {
    display: block;
    span {
      font-size: 0.8rem;
    }
  }
  @media ${device.mobileL} {
    > div > h2 {
      font-size: 1.6rem;
    }
    a {
      font-size: 0.8rem;
    }
  }
`;

export default PostHeader;
