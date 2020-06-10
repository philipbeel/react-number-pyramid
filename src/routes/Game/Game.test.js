import React from 'react';
import { render, screen } from '@testing-library/react';
import { Game } from './Game';

jest.mock('../../hooks/useQuery', () => {
  return {
    useQuery: (...args) => {
      return { get: jest.fn() };
    },
  };
});

describe('Game', () => {
  it('renders the submit & quit buttons', () => {
    render(<Game />);
    const quit = screen.getByText(/Quit/i);
    const submit = screen.getByText(/Submit/i);

    expect(quit).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
});
