import React from 'react';
import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  margin: 10px;
  padding: 10px;
`;


export default function CenterWrapper(props) {

  return (
    <S.Container>
      {props.children}
    </S.Container>
  );
}