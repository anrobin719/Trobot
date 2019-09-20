import React from 'react';

import styled from 'styled-components';
import shadow from '../../lib/styles/shadow';

const ListBox = ({ children, ...rest }) => {
  return <ListBoxWrapper {...rest}>{children}</ListBoxWrapper>;
};

const ListBoxWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  background: white;
  border-radius: .6rem;
  overflow-hidden;
  box-shadow: ${shadow.basic[0]};
`;

export default ListBox;
