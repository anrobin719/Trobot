import React from 'react';

import PostContainer from '../containers/post/PostContainer';

const PostPage = ({ match }) => {
  const { pnum } = match.params;
  return <PostContainer pnum={pnum} />;
};

export default PostPage;
