import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HowToPlay } from './HowToPlay';

describe('HowToPlay', () => {
  it('shows a dialog with instructions', () => {
    render(<HowToPlay />);
    const button = screen.getByRole('button', { name: /Rules/i });

    fireEvent.click(button);

    const instructions = screen.getByText(/How to play/i);
    expect(instructions).toBeInTheDocument();
  });
});
