import React from 'react';
import styled from 'styled-components';

const S = {};

S.Button = styled.div`
  background-color: #0e537d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ffba2d;
  }
  &:active {
    background-color: #ff3a3a;
  }
`;

export default function Button(props) {

  return (
    <S.Button onClick={props.onClick}>
      {props.children}
    </S.Button>
  );
}