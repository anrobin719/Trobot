import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';

const personData = [
  {
    nikname: '사이언',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '리체',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3012&q=80',
    like: 33,
  },
  {
    nikname: '업투하이',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    like: 33,
  },
  {
    nikname: '로비',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '로비',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '스타트래커',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '로아줄리아',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    like: 33,
  },
  {
    nikname: '사이언',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '리체',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3012&q=80',
    like: 33,
  },
  {
    nikname: '업투하이',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    like: 33,
  },
  {
    nikname: '로비',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '로비',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '스타트래커',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    like: 33,
  },
  {
    nikname: '로아줄리아',
    email: 'data@gmail.com',
    img:
      'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    like: 33,
  },
];

const Person = ({ img, nikname, email, like }) => {
  return (
    <PersonOutBox>
      <div>
        <ImgBox>
          <img src={img} alt={nikname} />
        </ImgBox>
        <h6>{nikname}</h6>
        <p>{email}</p>
        <span>👍{like}</span>
      </div>
    </PersonOutBox>
  );
};

const People = () => {
  const personList = personData.map(person => {
    return (
      <Person
        img={person.img}
        nikname={person.nikname}
        email={person.email}
        like={person.like}
      />
    );
  });
  return (
    <Wrapper>
      <p>
        트로봇에 아이디어를 기여한 사람들입니다.
        <br />
        해결책을 함께 고민하고 있습니다.
      </p>
      <PersonListBox>{personList}</PersonListBox>
    </Wrapper>
  );
};

const Wrapper = styled(Responsive)`
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
  > div {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    background-color: white;
    border-radius: 0.3rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const ImgBox = styled.div`
  width: 4rem;
  height: 4rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default People;
