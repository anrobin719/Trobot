import React from 'react';

import Header from '../components/common/Header';
import Editor from '../components/editor/Editor';

const EditorPage = ({ isEdit }) => {
  return (
    <>
      <Header title={isEdit ? '아이디어 수정' : '아이디어 작성'} emoji="📝" />
      <Editor isEdit={isEdit} />
    </>
  );
};

export default EditorPage;
