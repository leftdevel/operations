import { v4 as uuid } from "uuid";
import Operation, { OperationSymbolMap } from "../constants/Operation";
import generateAnswerChoices from "../helpers/generateAnswerChoices";
import Choice from "./Choice";

/**
 * @class
 */
class Expression {
  id = null;

  operation = null;

  factor1 = null;

  factor2 = null;

  totalChoices = 0;

  /**
   * @property {Choice[]} choices
   */
  choices = [];

  userAnswer = null;

  constructor({ id, factor1, factor2, operation, totalChoices = 0 }) {
    this.id = id || uuid();
    this.factor1 = factor1;
    this.factor2 = factor2;
    this.operation = operation;
    this.totalChoices = totalChoices;
  }

  /**
   * Note: This has been decoupled from the constructor (see Exercise constructor's side effects) since we want
   * to create a copy of this expression and we want to prevent generating choices unnecessarily.
   */
  generateChoices() {
    const choices = generateAnswerChoices(this.getAnswer(), this.totalChoices);
    // give choices an id so they can be tracked back.
    choices.forEach((value) => {
      this.choices.push(new Choice({ value }));
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
    this.userAnswer = userAnswer;
  }

  hasResponded() {
    return this.userAnswer !== null;
  }

  hasRespondedCorrectly() {
    return this.userAnswer === this.getAnswer();
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
      userAnswer: this.userAnswer,
      answer: this.getAnswer(),
      hasResponded: this.hasResponded(),
      hasRespondedCorrectly: this.hasRespondedCorrectly(),
      choices: this.choices.map((choice) => choice.toJS()),
    };
  }
}

export default Expression;

/**
 * @returns {Expression}
 */
export function createFromJS(data) {
  const expression = new Expression({
    id: data.id,
    factor1: data.factor1,
    factor2: data.factor2,
    operation: data.operation,
    totalChoices: data.totalChoices,
  });

  expression.choices = data.choices.map((choice) => new Choice(choice));
  expression.userAnswer = data.userAnswer;

  return expression;
}
