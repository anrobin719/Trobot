import React from 'react';

import styled from 'styled-components';
import CommentCollection from './CommentCollection';

const testBody = `토끼, 가을 같이 계십니다. 걱정도 새워 계절이 밤이 봅니다. 새겨지는 어머니 옥 언덕 까닭이요, 못 사람들의 거외다. 다 동경과 별빛이 까닭입니다. 밤이 덮어 다 무덤 지나고 버리었습니다. 이런 어머님, 하나에 옥 무성할 내 토끼, 봅니다. 별 위에 이웃 이름을 부끄러운 계십니다. 것은 때 하나에 마디씩 이제 듯합니다. 차 이름과, 없이 사랑과 봅니다. 차 나의 다하지 딴은 노루, 노새, 있습니다. 하나에 가득 멀듯이, 까닭입니다. 별 걱정도 써 버리었습니다. 차 그리고 토끼, 나의 별 시인의 애기 나의 듯합니다. 옥 별에도 별들을 된 말 다 너무나 듯합니다. 하나에 가슴속에 파란 벌써 불러 별 가을 까닭입니다. 사랑과 시인의 덮어 불러 언덕 이름과, 사람들의 계십니다. 한 나는 시인의 풀이 어머님, 버리었습니다. 풀이 북간도에 밤을 지나고 하나에 별을 까닭이요, 마리아 듯합니다. 이름을 위에 나의 내 라이너 당신은 듯합니다. 불러 별들을 아이들의 나는 덮어 듯합니다.`;

const PostContent = () => {
  return (
    <ContentBox>
      <Body>{testBody}</Body>
      <CommentCollection />
    </ContentBox>
  );
};

const ContentBox = styled.div`
  flex: 0 0 60%;
`;

const Body = styled.div`
  background: white;
  margin-bottom: 3rem;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 0.2rem;
`;

export default PostContent;
