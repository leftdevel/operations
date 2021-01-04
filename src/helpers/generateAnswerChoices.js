import { shuffleArray, randomIntFromInterval } from "../utils";

const MAX_CHOICES = 3;

// Distances (see below) for fake answers vary from 1 to 2, this is mainly because if the fake answer is too off from
// the correct answer it could become obvious that is fake. The closer it is to the real one, the more likely to confuse
// the end user.

// e.g if answer is 4 then the fake answer should be either 3 or 5 (+- 1);
const FAKE_ANSWER_MIN_DISTANCE = 1;
// e.g if answer is 4 then the fake answer should be either 2 or 6 (+- 2);
const FAKE_ANSWER_MAX_DISTANCE = 2;

function generateAnswerChoices(answer, totalChoices) {
  if (totalChoices > MAX_CHOICES) {
    throw new Error(`Can only generate a max of ${MAX_CHOICES}. Got ${totalChoices}`);
  }

  // always include the actual answer
  const choices = [answer];
  // a fake answer that is higher number (by 1 or 2) than the actual answer.
  const fakeHigherAnswer = randomIntFromInterval(answer + FAKE_ANSWER_MIN_DISTANCE, answer + FAKE_ANSWER_MAX_DISTANCE);
  // a fake answer that is lower number (by 1 or 2) than the actual answer.
  const fakeLowerAnswer = randomIntFromInterval(answer - FAKE_ANSWER_MAX_DISTANCE, answer - FAKE_ANSWER_MIN_DISTANCE);
  // add fake answers to an an array, then shuffle it so we guarantee that higher and lower fake
  // answers will show up from time to time, specially when only two choices are expected, where one is
  // the correct answer and the other one fake.
  const fakeAnswers = shuffleArray([fakeHigherAnswer, fakeLowerAnswer]);

  while (choices.length < MAX_CHOICES) {
    // generategenerategenerategenerategenerategenerategenerategenerate a fake answer if required.
    if (choices.length < totalChoices) {
      choices.push(fakeAnswers.pop());
    } else {
      // we don't use null here because we'll check this value against null in order to tell if the user
      // has selected an empty string answer (they are selectable by design).
      choices.push("");
    }
  }

  // shuffle final choices so the correct answer don't always show up on the same place.
  return shuffleArray(choices);
}

export default generateAnswerChoices;
