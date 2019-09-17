import React from 'react';

import Header from '../components/common/Header';
import PeopleContainer from '../containers/people/PeopleContainer';

const PeoplePage = () => {
  return (
    <>
      <Header title="함께하는 사람들" />
      <PeopleContainer />
    </>
  );
};

export default PeoplePage;
