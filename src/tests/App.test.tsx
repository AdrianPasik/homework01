import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('renders upper title', () => {
  render(<App />);
  const title = screen.getByText(/SDH Frontend Homework/i);
  expect(title).toBeInTheDocument();
});
