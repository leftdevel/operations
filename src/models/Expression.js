import uuid from "uuid";
import Operation, { OperationSymbolMap } from "../constants/Operation";
import AnswerChoicesGenerator from "../helpers/AnswerChoicesGenerator";

class Expression {
  operation = null;

  factor1 = null;

  factor2 = null;

  choices = [];

  constructor({ factor1, factor2, operation, totalChoices }) {
    this.factor1 = factor1;
    this.factor2 = factor2;
    this.operation = operation;

    const choices = AnswerChoicesGenerator(this.answer(), totalChoices);

    // give choices an id so they can be tracked back.
    choices.forEach((value) => {
      this.choices.push({ id: uuid(), value });
    });
  }

  answer() {
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

  operationSymbolMap() {
    return OperationSymbolMap[this.operation];
  }
}

export default Expression;
