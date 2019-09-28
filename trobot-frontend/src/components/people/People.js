import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Loading from '../ui/Loading';
import palette from '../../lib/styles/palette';
import shadow from '../../lib/styles/shadow';

const Person = ({ userId, img, nickname, email }) => {
  return (
    <PersonOutBox>
      <Link to={`/user/${userId}`}>
        <div>
          <StyleDiv />
          <ImgBox>
            <img src={img} alt={nickname} />
          </ImgBox>
          <h6>{nickname}</h6>
          <p>{email}</p>
        </div>
      </Link>
    </PersonOutBox>
  );
};

const People = ({ people, loading }) => {
  let personList = null;
  if (people) {
    personList = people.map(person => {
      return (
        <Person
          key={person.userId}
          userId={person.userId}
          img={person.img}
          nickname={person.nickname}
          email={person.email}
        />
      );
    });
  }

  return (
    <>
      <Wrapper>
        {loading ? <Loading size="fit" /> : null}
        <PeopleBox>
          <p>
            트로봇에 아이디어를 기여한 사람들입니다.
            <br />
            해결책을 함께 고민하고 있습니다.
          </p>
          <PersonListBox>{personList}</PersonListBox>
        </PeopleBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 198px);
`;

const PeopleBox = styled(Responsive)`
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

const PersonListBox = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 3rem;
`;

const PersonOutBox = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 4rem;
  flex: 0 0 20%;
  height: 14rem;
  > a > div {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    background-color: white;
    border-radius: 0.3rem;
    cursor: pointer;
    box-shadow: ${shadow.basic[0]};
  }
  h6 {
    font-weight: 500;
    margin-top: 5rem;
    margin-bottom: 0.3rem;
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${palette.gray[6]};
    font-family: 'Heebo', sans-serif;
    margin-bottom: 0.6rem;
  }
  span {
    font-size: 0.8rem;
    font-weight: 300;
    font-family: 'Heebo', sans-serif;
  }
`;

const StyleDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.2rem;
  border-radius: 0.3rem 0.3rem 0 0;
  background-color: ${palette.gray[2]};
`;

const ImgBox = styled.div`
  position: absolute;
  top: 1rem;
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default People;
