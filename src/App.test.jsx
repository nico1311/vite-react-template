import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/do something/i);
  expect(buttonElement).toBeInTheDocument();
});
