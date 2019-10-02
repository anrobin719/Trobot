import React from 'react';

import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Responsive from '../components/common/Responsive';
import TagList from '../components/home/TagList';
import device from '../lib/styles/device';

const HomePage = () => {
  return (
    <>
      {/* 인트로 */}
      <Intro>
        <Wrapper>
          <h1>Trouble Bot</h1>
          <p>해결이 필요한 실제 아이디어 제공 서비스</p>
        </Wrapper>
      </Intro>

      {/* 태그 선택 섹션 */}
      <TagSection>
        <Wrapper>
          <h3>아이디어</h3>
          <p>분류마다 아이디어와 유용한 참고자료를 제공합니다.</p>
          <TagList />
        </Wrapper>
      </TagSection>

      {/* 정보 섹션 */}
      <InfoSection>
        <Wrapper>
          <h3>아이디어를 쉽게 저장하세요</h3>
          <p>좋아요를 클릭해 아이디어를 저장할 수 있습니다.</p>
          <ImgBox />

          <h3>푸쉬 알림이 곧 찾아옵니다!</h3>
          <p>COMING SOON</p>
          <ImgBox />
        </Wrapper>
      </InfoSection>

      {/* 컨텍트 섹션 */}
      <ContactSection>
        <Wrapper>
          <h2>의견이 있으신가요?</h2>
          <p>제안에 열려있습니다. 개선사항에 대해 연락주세요!</p>
        </Wrapper>
      </ContactSection>
    </>
  );
};

const Wrapper = styled(Responsive)`
  height: 100%;
  padding: 6rem 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  h1,
  h2,
  h3 {
    color: ${palette.blue[9]};
  }
  p {
    margin-top: 0.3rem;
    margin-bottom: 3rem;
    color: ${palette.gray[6]};
  }
`;

const Intro = styled.section`
  padding-bottom: 3rem;
  background: white;
  h1 {
    font-size: 5.6rem;
    font-weight: 800;
    font-family: 'Heebo', sans-serif;
    line-height: 7rem;
  }
  p {
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 4.6rem;
      line-height: 6rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media ${device.mobileL} {
    h1 {
      font-size: 3.6rem;
      line-height: 4.6rem;
    }
  }
`;

const TagSection = styled.section`
  background-color: ${palette.backBlue[0]};
  text-align: center;
`;

const InfoSection = styled.section`
  background: white;
`;

const ImgBox = styled.div`
  background-color: ${palette.gray[1]};
  width: 100%;
  padding-bottom: 46%;
  margin-bottom: 6rem;

  @media ${device.tablet} {
    width: 90%;
    padding-bottom: 60%;
  }
`;

const ContactSection = styled.section`
  background: ${palette.blue[9]};
  padding: 3rem 0;
  h2 {
    color: white;
    font-size: 2rem;
  }
  p {
    color: white;
    margin-bottom: 0;
  }
`;

export default HomePage;
