import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import BackDrop from '../ui/BackDrop';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostSide from './PostSide';
import palette from '../../lib/styles/palette';
import Loading from '../ui/Loading';

const Post = ({ show, hide, post, loading }) => {
  const {
    title,
    // sub,
    tag,
    body,
    like,
    // comments,
    authorNickname,
    publishedDate,
  } = post.toJS();
  return (
    <>
      {/* 백 드롭 */}
      <BackDrop show={show} clicked={hide} />
      <Wrapper show={show} clicked={hide}>
        {loading ? <Loading size="fit" /> : null}
        {/* 포스트 컨테이너 */}
        <PostBox>
          {/* 포스트 제목과 정보 */}
          <PostHeader
            title={title}
            tag={tag}
            authorNickname={authorNickname}
            publishedDate={publishedDate}
          />
          {/* 포스트 컨텐츠 */}
          <section>
            <PostContent body={body} />
            <PostSide like={like} />
          </section>
        </PostBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Responsive)`
  position: relative;
  height: 100vh;
  display: ${props => !props.show && 'none'};
`;

const PostBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 300;
  width: 100%;
  min-height: 100vh;
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
