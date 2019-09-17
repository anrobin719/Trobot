import React from 'react';

import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostSide from './PostSide';
import palette from '../../lib/styles/palette';
import Loading from '../ui/Loading';

const Post = ({ post, loading }) => {
  const {
    title,
    // sub,
    tag,
    body,
    like,
    // comments,
    authorId,
    authorNickname,
    publishedDate,
  } = post.toJS();
  return (
    <>
      {loading ? <Loading size="fit" /> : null}
      {/* 포스트 컨테이너 */}
      <PostBox>
        {/* 포스트 제목과 정보 */}
        <PostHeader
          title={title}
          tag={tag}
          authorId={authorId}
          authorNickname={authorNickname}
          publishedDate={publishedDate}
        />
        {/* 포스트 컨텐츠 */}
        <section>
          <PostContent body={body} />
          <PostSide like={like} />
        </section>
      </PostBox>
    </>
  );
};

const PostBox = styled.div`
  // position: absolute;
  // top: 0;
  // left: 50%;
  // transform: translateX(-50%);
  // height: 100%;
  // z-index: 300;
  // width: 100%;

  width: 1024px;
  min-height: 100vh;
  margin: 0 auto; /* 중앙 정렬 */

  /* 브라우저 크기에 따라 가로 사이즈 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  padding: 4rem 3rem;
  background: ${palette.gray[1]};
  border-radius: 1rem;
  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Post;
