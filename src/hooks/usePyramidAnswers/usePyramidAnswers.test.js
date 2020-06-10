import { usePyramidAnswers } from './usePyramidAnswers';

describe('usePyramidAnswers', () => {
  it.each([
    ['', 6],
    ['beginner', 6],
    ['intermediate', 10],
    ['advanced', 15],
  ])(
    'returns correct number of answers for %s',
    (difficulty, expectedTotal) => {
      const answers = usePyramidAnswers(difficulty);
      expect(answers.length).toEqual(expectedTotal);
    }
  );

  it('sums adjacent row values to give parent value', () => {
    const answers = usePyramidAnswers();
    const topRowValue = answers[answers.length - 1];
    const secondRowTotal =
      answers[answers.length - 2] + answers[answers.length - 3];
    expect(topRowValue).toEqual(secondRowTotal);
  });
});
