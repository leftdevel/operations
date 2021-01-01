import Expressions from "../constants/Expressions";
import { shuffle, randomIntFromInterval } from "../utils";

const MAX_CHOICES = 3;
const FAKE_ANSWER_MIN_DISTANCE = 1;
const FAKE_ANSWER_MAX_DISTANCE = 2;

class Exercise {
  expression = null;

  factor1 = null;

  factor2 = null;

  choices = [];

  constructor({ factor1, factor2, expression, totalChoices }) {
    this.factor1 = factor1;
    this.factor2 = factor2;
    this.expression = expression;

    this.choices = this.generateChoices(totalChoices);
  }

  generateChoices(totalChoices) {
    if (totalChoices > MAX_CHOICES) {
      throw new Error(`Can only generate a max of ${MAX_CHOICES}. Got ${totalChoices}`);
    }

    // always include the actual answer
    const choices = [this.answer()];
    // a fake answer that is higher number (by 1 or 2) than the actual answer.
    const fakeHigherAnswer = randomIntFromInterval(
      this.answer() + FAKE_ANSWER_MIN_DISTANCE,
      this.answer() + FAKE_ANSWER_MAX_DISTANCE
    );
    // a fake answer that is lower number (by 1 or 2) than the actual answer.
    const fakeLowerAnswer = randomIntFromInterval(
      this.answer() - FAKE_ANSWER_MAX_DISTANCE,
      this.answer() - FAKE_ANSWER_MIN_DISTANCE
    );
    // add fake answers to an an array, then shuffle it so we guarantee that higher and lower fake
    // answers will show up from time to time, specially when only two choices are expected, where one is
    // the correct answer and the other one fake.
    const fakeAnswers = shuffle([fakeHigherAnswer, fakeLowerAnswer]);

    while (choices.length < MAX_CHOICES) {
      // generategenerategenerategenerategenerategenerategenerategenerate a fake answer if required.
      if (choices.length < totalChoices) {
        choices.push(fakeAnswers.pop());
      } else {
        choices.push(null);
      }
    }

    // shuffle final choices so the correct answer don't always show up on the same place.
    return shuffle(choices);
  }

  answer() {
    switch (this.expression) {
      case Expressions.MULTIPLICATION:
        return this.factor1 * this.factor2;
      case Expressions.DIVISION:
        return this.factor1 / this.factor2;
      case Expressions.ADDITION:
        return this.factor1 + this.factor2;
      case Expressions.SUBTRACTION:
        return this.factor1 - this.factor2;
      default:
        throw new Error(`unknown expression: ${this.expression}`);
    }
  }
}

export default Exercise;
