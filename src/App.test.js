import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the landing page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Number Pyramid/i);
    expect(linkElement).toBeInTheDocument();
  });
});
