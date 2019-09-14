import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Idea = ({ title, sub, author, like, body, comments, publishedDate }) => {
  return (
    <IdeaBox>
      <ContentBox>
        <div>
          <h3>{title}</h3>
          <h6>{sub}</h6>
        </div>
        <div>
          <span>👍{like}</span>
        </div>
      </ContentBox>
    </IdeaBox>
  );
};

const IdeaBox = styled.article`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid ${palette.gray[1]};
  cursor: pointer;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export default Idea;
