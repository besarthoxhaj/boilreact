import React from 'react';
import * as Utils from './_utils';
import GlobalStyle from '../src/components/GlobalStyle';
import * as T from '../src/components/Typography';
export default {title: 'Typography'};

export const toStorybook = (...params) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Utils.CenterWrapper>
        <T.H1>Hello, World!</T.H1>
      </Utils.CenterWrapper>
    </React.Fragment>
  );
}