import React from 'react';

import styled from 'styled-components';
import Tag from './Tag';

const tagData = [
  { title: '라이프', emoji: '💆🏻‍', link: '/list/라이프' },
  { title: '테크', emoji: '💻', link: '/list/테크' },
  { title: '경제', emoji: '💸', link: '/list/경제' },
  { title: '환경', emoji: '🌿', link: '/list/환경' },
  { title: '생산성', emoji: '📈', link: '/list/생산성' },
  { title: '건강', emoji: '💪', link: '/list/건강' },
  { title: '문화', emoji: '🌈', link: '/list/문화' },
  { title: '그 외 분류', emoji: '👀', link: '/list/기타' },
];

const TagList = ({ tagNum }) => {
  let slicedData;
  if (!tagNum || tagNum > tagData.length) {
    slicedData = tagData;
  } else {
    slicedData = tagData.slice(0, tagNum);
  }
  const tags = slicedData.map(tag => {
    return (
      <Tag key={tag.title} title={tag.title} emoji={tag.emoji} to={tag.link} />
    );
  });
  return <TagListBox>{tags}</TagListBox>;
};

const TagListBox = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  margin-top: 3rem;
`;

export default TagList;
