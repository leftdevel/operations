import { v4 as uuid } from "uuid";
import Operation, { OperationSymbolMap } from "../constants/Operation";
import generateAnswerChoices from "../helpers/generateAnswerChoices";

class Expression {
  operation = null;

  factor1 = null;

  factor2 = null;

  choices = [];

  hasRespondedCorrectly = null;

  constructor({ factor1, factor2, operation, totalChoices }) {
    this.factor1 = factor1;
    this.factor2 = factor2;
    this.operation = operation;

    const choices = generateAnswerChoices(this.getAnswer(), totalChoices);

    // give choices an id so they can be tracked back.
    choices.forEach((value) => {
      this.choices.push({ id: uuid(), value });
    });
  }

  getAnswer() {
    switch (this.operation) {
      case Operation.MULTIPLICATION:
        return this.factor1 * this.factor2;
      case Operation.DIVISION:
        return this.factor1 / this.factor2;
      case Operation.ADDITION:
        return this.factor1 + this.factor2;
      case Operation.SUBTRACTION:
        return this.factor1 - this.factor2;
      default:
        throw new Error(`unknown operation: ${this.operation}`);
    }
  }

  respond(userAnswer) {
    this.hasRespondedCorrectly = userAnswer === this.getAnswer();
  }

  hasResponded() {
    return this.hasRespondedCorrectly !== null;
  }

  operationSymbol() {
    return OperationSymbolMap[this.operation];
  }
}

export default Expression;
