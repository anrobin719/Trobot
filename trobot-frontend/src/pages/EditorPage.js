import React from 'react';

import Header from '../components/common/Header';
import EditorContainer from '../containers/editor/EditorContainer';

const EditorPage = ({ match }) => {
  const { pnum } = match.params;
  return (
    <>
      <Header title={pnum ? '아이디어 수정' : '아이디어 작성'} emoji="📝" />
      <EditorContainer postId={pnum} />
    </>
  );
};

export default EditorPage;
