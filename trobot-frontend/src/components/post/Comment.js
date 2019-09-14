import React from 'react';

import styled from 'styled-components';

const Comment = ({ img, id, comment }) => {
  return (
    <CommentBox>
      <ProfileImg>
        <img src={img} alt={id} />
      </ProfileImg>
      <div>
        <h6>{id}</h6>
        <p>{comment}</p>
      </div>
    </CommentBox>
  );
};

const CommentBox = styled.div`
  margin-bottom: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  > div:nth-child(2) {
    margin-left: 1rem;
  }
`;

const ProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Comment;
