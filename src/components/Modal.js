import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.5);
  z-index: 99;
`;

export default function Modal(props) {

  return ReactDOM.createPortal(
    <S.Container>
      {props.children}
    </S.Container>,
    document.getElementById('modal')
  );
}