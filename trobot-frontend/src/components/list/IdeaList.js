import React from 'react';

import styled from 'styled-components';
import Idea from './Idea';

const IdeaList = ({ list }) => {
  // const testList = [
  //   {
  //     id: 1,
  //     title: 'Hello Trobot!',
  //     sub: '서브 타이틀 입니다.',
  //     author: '트로봇',
  //     like: 3,
  //     body: '아이디어 바디 부분 입니다.',
  //     comments: [
  //       { id: '업투하이', comment: '댓글 1 입니다.' },
  //       { id: '리체', comment: '댓글 2 입니다.' },
  //     ],
  //     publishedDate: '2019-09-14',
  //   },
  //   {
  //     id: 2,
  //     title: '작동하나요',
  //     sub: '작동하나요 서브 타이틀 입니다.',
  //     author: '리체',
  //     like: 33,
  //     body: '작동하나요 아이디어 바디 부분 입니다.',
  //     comments: [
  //       { id: '업투하이', comment: '댓글 1 입니다.' },
  //       { id: '트로봇', comment: '댓글 2 입니다.' },
  //     ],
  //     publishedDate: '2019-09-14',
  //   },
  //   {
  //     id: 3,
  //     title: 'Hello Trobot!',
  //     sub: '서브 타이틀 입니다.',
  //     author: '트로봇',
  //     like: 3,
  //     body: '아이디어 바디 부분 입니다.',
  //     comments: [
  //       { id: '업투하이', comment: '댓글 1 입니다.' },
  //       { id: '리체', comment: '댓글 2 입니다.' },
  //     ],
  //     publishedDate: '2019-09-14',
  //   },
  //   {
  //     id: 4,
  //     title: '작동하나요',
  //     sub: '작동하나요 서브 타이틀 입니다.',
  //     author: '리체',
  //     like: 33,
  //     body: '작동하나요 아이디어 바디 부분 입니다.',
  //     comments: [
  //       { id: '업투하이', comment: '댓글 1 입니다.' },
  //       { id: '트로봇', comment: '댓글 2 입니다.' },
  //     ],
  //     publishedDate: '2019-09-14',
  //   },
  // ];

  const ideas = list.map(idea => {
    return (
      <Idea
        key={idea.postId}
        title={idea.title}
        sub={idea.sub}
        author={idea.authorNickname}
        authorId={idea.authorId}
        like={idea.like}
        body={idea.body}
        comments={idea.comments}
        publishedDate={idea.publishedDate}
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
