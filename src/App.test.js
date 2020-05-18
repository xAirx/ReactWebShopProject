/* eslint-disable import/no-named-as-default */
import React from 'react';
import { render /* getAllByText, getAllByDisplayValue */ } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  const { getByText } = render(<App />);

  const linkElement = getByText(/Webshop - Production/);

  expect(linkElement).toBeInTheDocument();
});
