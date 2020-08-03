import React from 'react';

import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostSide from './PostSide';
import palette from '../../lib/styles/palette';
import Loading from '../ui/Loading';
import device from '../../lib/styles/device';
import CommentCollectionContainer from '../../containers/post/CommentCollectionContainer';

const Post = ({
  post,
  loading,
  editPostHandler,
  deleteModalHandler,
  followHanlder,
  likeHandler,
  likeBtn,
  followBtn,
  showAskSignInModal,
}) => {
  const {
    title,
    tag,
    body,
    authorId,
    authorNickname,
    publishedDate,
  } = post.toJS();

  const stoppropagation = e => {
    e.stopPropagation();
  };

  return (
    <>
      <PostBox onClick={stoppropagation}>
        {loading ? (
          <Loading size="fit" />
        ) : (
          <>
            <PostHeader
              title={title}
              tag={tag}
              authorId={authorId}
              authorNickname={authorNickname}
              publishedDate={publishedDate}
            />
            <section>
              <PostContent
                body={body}
                authorId={authorId}
                editPostHandler={editPostHandler}
                deletePostHandler={deleteModalHandler}
              />
              <PostSide
                authorId={authorId}
                followHanlder={followHanlder}
                likeHandler={likeHandler}
                likeBtn={likeBtn}
                followBtn={followBtn}
                showAskSignInModal={showAskSignInModal}
              />

              <CommentCollectionContainer />
            </section>
          </>
        )}
      </PostBox>
    </>
  );
};

const PostBox = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 3rem;
  background: ${palette.gray[1]};
  border-radius: 1rem;
  > section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 1rem;
  }

  @media ${device.tablet} {
    padding: 3rem 2rem;
    > section {
      display: block;
    }
  }
  @media ${device.mobileL} {
    padding: 2rem 1rem;
  }
`;

export default Post;
