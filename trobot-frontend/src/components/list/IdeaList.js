import React from 'react';

import styled from 'styled-components';
import Idea from './Idea';

const IdeaList = ({ list, pathHandler }) => {
  const ideas = list.map(idea => {
    return (
      <Idea
        key={idea.postId}
        postId={idea.postId}
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
  box-shadow: 0 4px 4px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.1);
`;

export default IdeaList;
