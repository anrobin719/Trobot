import React from 'react';

import styled from 'styled-components';
import Idea from './Idea';
import shadow from '../../lib/styles/shadow';

const IdeaList = ({ list, pathHandler }) => {
  const ideas = list.map(idea => {
    return (
      <Idea
        key={idea.postId}
        postId={idea.postId}
        tag={idea.tag}
        title={idea.title}
        sub={idea.sub}
        authorNickname={idea.authorNickname}
        authorId={idea.authorId}
        like={idea.like}
        body={idea.body}
        comments={idea.comments}
        publishedDate={idea.publishedDate}
        pathHandler={pathHandler}
      />
    );
  });

  return <IdeaListBox>{ideas}</IdeaListBox>;
};

const IdeaListBox = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  background: white;
  border-radius: .6rem;
  overflow-hidden;
  box-shadow: ${shadow.basic[0]};
`;

export default IdeaList;
