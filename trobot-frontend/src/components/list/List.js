import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import IdeaList from './IdeaList';
import ResourceList from './ResourceList';
import Loading from '../ui/Loading';
import device from '../../lib/styles/device';

const List = ({ tag, list, loading, pathHandler }) => {
  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* 왼쪽 flex box */}
          <IdeaBox>
            <h3>아이디어</h3>
            <IdeaList list={list} pathHandler={pathHandler} />
          </IdeaBox>
          {/* 오른쪽 flex box */}
          <ResourceBox>
            <h3>관련자료</h3>
            <ResourceList tag={tag} />
          </ResourceBox>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 6rem;
  min-height: 100vh;
`;

const IdeaBox = styled.section`
  flex: 0 0 60%;
  > h3 {
    margin-bottom: 1rem;
  }
  @media ${device.tablet} {
    flex: 0 0 100%;
    > h3 {
      display: none;
    }
  }
`;
const ResourceBox = styled.section`
  flex: 0 0 36%;
  > h3 {
    margin-bottom: 1rem;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export default List;
