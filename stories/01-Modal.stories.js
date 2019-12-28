import React from 'react';
import * as Utils from './_utils';
import GlobalStyle from '../src/components/GlobalStyle';
import Modal from '../src/components/Modal';
export default {title: 'Modal'};

export const toStorybook = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Modal />
    </React.Fragment>
  );
}
