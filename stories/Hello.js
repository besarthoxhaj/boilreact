import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Hello', module)
  .add('default', () => {
    return (
      <h1>Hello</h1>
    );
  });
