import Expressions from "../constants/Expressions";

class Exercise {
  expression = null;

  factor1 = null;

  factor2 = null;

  choices = [];

  constructor({ factor1, factor2, expression, choiceSettings }) {
    this.factor1 = factor1;
    this.factor2 = factor2;
    this.expression = expression;

    this.choices = this.generateChoices(choiceSettings);
  }

  generateChoices(totalChoices) {
    // always include the actual answer
    const choices = [this.answer()];

    // @todo 3 must be upgraded to a constant.
    while (choices.length < 3) {
      let fakeAnswer = null;

      if (choices.length < totalChoices) {
        fakeAnswer = this.randomIntFromInterval(this.answer() + 1, this.answer() + 2);
      }

      choices.push(fakeAnswer);
    }
  }

  /**
   * Min and max included
   */
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  answer() {
    switch (this.expression) {
      case Expressions.MULTIPLICATION:
        return (this.factor1 * this.factor2);
      case Expressions.DIVISION:
        return (this.factor1 / this.factor2);
      case Expressions.ADDITION:
        return (this.factor1 + this.factor2);
      case Expressions.SUBTRACTION:
        return (this.factor1 - this.factor2);
      default:
        throw new Error(`unknown expression: ${this.expression}`);
    }
  }
}

export default Exercise;
