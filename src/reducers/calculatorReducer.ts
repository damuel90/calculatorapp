import {Actions, Numbers, Operations, Specials} from '../constants/actions';
import {
  cleanNumber,
  deleteNumber,
  calculate,
  signChange,
  writeNumber,
  writePoint,
  isValidResult,
} from '../helpers/calculatorHelper';

interface CalculatorState {
  result: string;
  otherResult: string;
  operation: null | Operations;
}

export const initState = {
  result: '0',
  otherResult: '',
  operation: null,
};

export const init = () => initState;

export const reducer = (state: CalculatorState, action: {type: Actions}) => {
  switch (action.type) {
    case Specials.RESET:
      return initState;
    case Specials.MODE_OR_LESS:
      return {...state, result: signChange(state.result)};
    case Specials.DELETE:
      return {
        ...state,
        result: deleteNumber(state.result),
      };
    case Specials.POINT:
      return {
        ...state,
        result: writePoint(state.result),
      };
    case Numbers.ONE:
    case Numbers.TWO:
    case Numbers.THREE:
    case Numbers.FOUR:
    case Numbers.FIVE:
    case Numbers.SIX:
    case Numbers.SEVEN:
    case Numbers.EIGHT:
    case Numbers.NINE:
    case Numbers.ZERO:
      return {
        ...state,
        result: writeNumber(state.result, action.type.toString()),
      };
    case Operations.SUM:
    case Operations.SUBTRACTION:
    case Operations.MULTIPLICATION:
    case Operations.DIVISION:
      if (state.operation) {
        const result = calculate(
          state.otherResult,
          cleanNumber(state.result),
          state.operation,
        );
        return {
          operation: isValidResult(result) ? action.type : null,
          otherResult: isValidResult(result) ? result : '',
          result: isValidResult(result) ? '0' : result,
        };
      }
      const result = cleanNumber(state.result);
      return {
        operation: result ? action.type : state.operation,
        otherResult: result ? result : state.otherResult,
        result: result ? '0' : state.result,
      };
    case Specials.EQUAL:
      if (state.operation) {
        return {
          ...initState,
          result: calculate(
            state.otherResult,
            cleanNumber(state.result),
            state.operation,
          ),
        };
      }
      return state;
    default:
      return state;
  }
};
