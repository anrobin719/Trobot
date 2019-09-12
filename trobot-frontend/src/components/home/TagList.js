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

const TagListBox = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 3rem 0 2rem;
`;

const TagList = () => {
  const tags = tagData.map(tag => {
    return <Tag key={tag.title} title={tag.title} emoji={tag.emoji} />;
  });
  return <TagListBox>{tags}</TagListBox>;
};

export default TagList;
