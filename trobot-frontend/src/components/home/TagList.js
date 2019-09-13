import React from 'react';

import styled from 'styled-components';
import Tag from './Tag';

// 🌈👬🌦☔️💆🏻‍🌿🌱🐈🏃🏻‍🤝💪🧬🔑💸💵📸📷🔬🦠🎁💻📈📚
const tagData = [
  { title: '라이프', emoji: '💆🏻‍' },
  { title: '테크', emoji: '💻' },
  { title: '경제', emoji: '💸' },
  { title: '환경', emoji: '🌿' },
  { title: '생산성', emoji: '📈' },
  { title: '건강', emoji: '💪' },
  { title: '문화', emoji: '🌈' },
  { title: '그 외 분류', emoji: '👀' },
];

const TagList = ({ tagNum }) => {
  let slicedData;
  if (!tagNum || tagNum > tagData.length) {
    slicedData = tagData;
  } else {
    slicedData = tagData.slice(0, tagNum);
  }
  const tags = slicedData.map(tag => {
    return <Tag key={tag.title} title={tag.title} emoji={tag.emoji} />;
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
