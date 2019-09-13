import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import IdeaList from './IdeaList';
import ResourceList from './ResourceList';

const List = ({ list, resource }) => {
  return (
    <Wrapper>
      {/* 왼쪽 flex box */}
      <IdeaBox>
        <h3>아이디어</h3>
        <IdeaList />
      </IdeaBox>
      {/* 오른쪽 flex box */}
      <ResourceBox>
        <h3>자료</h3>
        <ResourceList />
      </ResourceBox>
    </Wrapper>
  );
};

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  padding-top: 6rem;
  padding-bottom: 6rem;
  outline: 1px solid red;
`;

const IdeaBox = styled.section`
  outline: 1px solid cyan;
  flex: 0 0 60%;
`;
const ResourceBox = styled.section`
  outline: 1px solid cyan;
  flex: 0 0 36%;
`;

export default List;
