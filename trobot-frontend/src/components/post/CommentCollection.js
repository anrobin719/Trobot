import React from 'react';

import styled from 'styled-components';
import Comment from './Comment';
import CommentInput from './CommentInput';

const testComments = [
  {
    id: '업투하이',
    img:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    comment: '댓글 1 입니다.',
  },
  {
    id: '리체',
    img:
      'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3012&q=80',
    comment: '댓글 2 입니다.',
  },
];

const CommentCollection = () => {
  const commentList = testComments.map(comment => {
    return (
      <Comment
        key={comment.id}
        img={comment.img}
        id={comment.id}
        comment={comment.comment}
      />
    );
  });

  return (
    <CommentWrapper>
      <CommentInput />
      <CommentList>{commentList}</CommentList>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  background: white;
  border-radius: 0.2rem;
`;

const CommentList = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 0.2rem;
`;

export default CommentCollection;
