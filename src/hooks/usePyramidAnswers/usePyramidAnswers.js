const LevelInputs = {
  beginner: 4,
  intermediate: 5,
  advanced: 6,
};

/*
 * A hook that returns a sequence of the pyramid answers
 * as an array from top to bottom
 *
 */
export function usePyramidAnswers(rows) {
  const levels = LevelInputs[rows] || LevelInputs.beginner;
  const pyramidAnswers = calculatePyramidValues(levels);

  return pyramidAnswers;
}

function calculatePyramidValues(rows) {
  const answers = [];
  for (var level = rows - 1; level > 0; level--) {
    for (var i = 0; i < level; i++) {
      if (level === rows - 1) {
        // add first row
        answers.push(Math.ceil(Math.random() * (rows * 10 - 1) + rows));
      } else if (level === 1) {
        // add last row
        answers.push(answers[answers.length - 1] + answers[answers.length - 2]);
        return answers;
      } else {
        // add middle rows
        answers.push(
          answers[answers.length - level - 1] + answers[answers.length - level]
        );
      }
    }
  }
}
