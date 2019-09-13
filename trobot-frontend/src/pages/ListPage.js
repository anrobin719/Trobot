import React from 'react';

import Header from '../components/common/Header';
import List from '../components/list/List';
import Banner from '../components/list/Banner';

const ListPage = ({ listTitle, emoji, list, resource }) => {
  return (
    <>
      <Header emoji="💆🏻‍" title="라이프" />
      <List />
      <Banner />
    </>
  );
};

export default ListPage;
