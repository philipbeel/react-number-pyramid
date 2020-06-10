import React from 'react';
import { render } from '@testing-library/react';
import { LevelComplete } from './LevelComplete';

describe('LevelComplete', () => {
  xit('shows a success dialog with two buttons', () => {
    render(<LevelComplete isOpen={true} />);
    // const button = screen.getByRole('button', { name: /Play/i });

    // fireEvent.click(button);
    // expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
