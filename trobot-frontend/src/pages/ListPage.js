import React from 'react';

import HeaderContainer from '../containers/list/HeaderContainer';
import ListContainer from '../containers/list/ListContainer';
import BannerContainer from '../containers/list/BannerContainer';

const ListPage = ({ match }) => {
  const { tag } = match.params;
  return (
    <>
      <HeaderContainer tag={tag} />
      <ListContainer tag={tag} />
      <BannerContainer tag={tag} />
    </>
  );
};

export default ListPage;
