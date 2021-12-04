export enum Numbers {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  ZERO = '0',
}

export enum Operations {
  SUM = '+',
  SUBTRACTION = '-',
  MULTIPLICATION = 'x',
  DIVISION = '÷',
  PERCENTAGE = '%',
}

export enum Specials {
  RESET = 'C',
  DELETE = 'D',
  MODE_OR_LESS = '+/-',
  POINT = '.',
  EQUAL = '=',
}

export enum Errors {
  INDETERMINATION = 'Invalid operation',
  DIGIT_NUMBERS = 'Number of digits exceeded',
  UNKNOWN = 'Error',
}

export type Actions = Numbers | Operations | Specials;
