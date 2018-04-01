import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Overlay from '../app/components/Overlay';

storiesOf('Overlay')
  .add('default', () => {
    return (
      <Overlay isOpen/>
    );
  })
