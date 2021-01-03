import { v4 as uuid } from "uuid";
import Operation, { OperationSymbolMap } from "../constants/Operation";
import generateAnswerChoices from "../helpers/generateAnswerChoices";

class Expression {
  id = null;

  operation = null;

  factor1 = null;

  factor2 = null;

  choices = [];

  hasRespondedCorrectly = null;

  constructor({ id, factor1, factor2, operation, totalChoices }) {
    this.id = id || uuid();
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

  getOperationSymbol() {
    return OperationSymbolMap[this.operation];
  }

  toJS() {
    return {
      id: this.id,
      operation: this.operation,
      operationSymbol: this.getOperationSymbol(),
      factor1: this.factor1,
      factor2: this.factor2,
      hasResponded: this.hasResponded(),
      hasRespondedCorrectly: this.hasRespondedCorrectly,
      choices: this.choices,
    };
  }
}

export default Expression;
