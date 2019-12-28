import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

test('renders learn react link', () => {
  const { getByText } = render(<Button>Hello</Button>);
  const linkElement = getByText(/hello/i);
});