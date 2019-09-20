import React from 'react';

import Idea from './Idea';
import ListBox from './ListBox';

const IdeaList = ({ list, pathHandler }) => {
  // const { like } = list.toJS();
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
        like={idea.like ? Object.keys(idea.like).length : 0}
        body={idea.body}
        comments={idea.comments}
        publishedDate={idea.publishedDate}
        pathHandler={pathHandler}
      />
    );
  });

  return <ListBox>{ideas}</ListBox>;
};

export default IdeaList;
