/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
	render, /* getAllByText, getAllByDisplayValue */
} from '@testing-library/react';
import App from './App.tsx';

test('renders h1', () => {
	const { getByText } = render(<App />);

	const linkElement = getByText(/Webshop - Development/);

	expect(linkElement).toBeInTheDocument();
});
