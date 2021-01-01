const Operation = {
  MULTIPLICATION: "multiplication",
  DIVISION: "division",
  ADDITION: "addition",
  SUBTRACTION: "subtraction",
};

export default Operation;

export const OperationSymbolMap = {
  [Operation.MULTIPLICATION]: "X",
  [Operation.DIVISION]: "/",
  [Operation.ADDITION]: "+",
  [Operation.SUBTRACTION]: "-",
};
