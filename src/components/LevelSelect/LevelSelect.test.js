import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LevelSelect } from './LevelSelect';

describe('LevelSelect', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

  it('shows a dialog with 3 difficulty levels', () => {
    render(<LevelSelect />);
    const button = screen.getByRole('button', { name: /Play/i });

    fireEvent.click(button);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
