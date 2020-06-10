import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
  it('renders the app home screen', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Number Pyramid/i);
    expect(linkElement).toBeInTheDocument();
  });
});
