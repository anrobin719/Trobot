import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import TagList from '../home/TagList';

const Banner = () => {
  return (
    <BannerBox>
      <Wrapper>
        <div>
          <h3>다른 아이디어</h3>
          <TagList tagNum="4" />
        </div>
      </Wrapper>
    </BannerBox>
  );
};

const BannerBox = styled.section`
  background: ${palette.blue[9]};
  height: 30rem;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  color: white;
  > div {
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 100%;
    > h3 {
      margin-top: 2rem;
    }
  }
`;

export default Banner;
