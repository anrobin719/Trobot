import React from 'react';

import styled from 'styled-components';
import ListBox from './ListBox';
import palette from '../../lib/styles/palette';
import resources from '../../lib/resources/resources';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ResourceList = ({ tag = '기타분류' }) => {
  let list = resources[`${tag}`].map(resource => {
    let firstLetter = resource.title.slice(0, 1);
    return (
      <a
        key={resource.title}
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IdeaBox>
          <ContentBox>
            <span role="img" aria-label="resource">
              💡
            </span>
            <p>
              {resource.title} <ArrowForwardIosIcon />
            </p>
          </ContentBox>
        </IdeaBox>
      </a>
    );
  });

  return <ListBox>{list}</ListBox>;
};

const IdeaBox = styled.article`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[1]};
  padding: 1.6rem 2rem;
  cursor: pointer;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 2rem;
    margin-right: 1rem;
  }
  p {
    height: 2rem;
    font-size: 1rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    svg {
      height: 100%;
      font-size: 0.8rem;
      padding-top: 0.2rem;
      margin-left: 0.5rem;
      color: ${palette.gray[5]};
    }
  }
`;

export default ResourceList;
