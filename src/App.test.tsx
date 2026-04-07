import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el portafolio principal', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: /principal/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Kenyi Ivan Vega Aliaga/i).length).toBeGreaterThan(0);
});
