import {
  wait,
  waitForElement,
  waitForDomChange,
  render,
  screen,
} from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  wait();
});

test('', () => {
  console.log('hi');
});
