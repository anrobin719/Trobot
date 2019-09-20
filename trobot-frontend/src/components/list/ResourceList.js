import React from 'react';

import styled from 'styled-components';
import ListBox from './ListBox';
import palette from '../../lib/styles/palette';

const ResourceList = () => {
  return (
    <ListBox>
      <IdeaBox>
        <ContentBox>ResourceList</ContentBox>
      </IdeaBox>
      <IdeaBox>
        <ContentBox>ResourceList</ContentBox>
      </IdeaBox>
    </ListBox>
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

export default ResourceList;
