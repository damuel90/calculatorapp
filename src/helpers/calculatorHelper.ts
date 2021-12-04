import {Errors, Operations} from '../constants/actions';

export const isValidResult = (values: string) => {
  return !Object.values<string>(Errors).includes(values);
};

export const signChange = (value: string) => {
  if (!isValidResult(value)) {
    return value;
  }
  if (value.includes('-')) {
    value = value.replace('-', '');
  } else {
    value = '-' + value;
  }
  return value;
};

export const writeNumber = (PrevValue: string, currentValue: string) => {
  if (!isValidResult(PrevValue)) {
    return currentValue;
  }
  if (PrevValue.replace('-', '').replace('.', '').length > 19) {
    return PrevValue;
  }
  if (PrevValue === '0' || PrevValue === '-0') {
    const isNegative = PrevValue.startsWith('-');
    return isNegative ? signChange(currentValue) : currentValue;
  }
  return PrevValue + currentValue;
};

export const writePoint = (PrevValue: string) => {
  if (!isValidResult(PrevValue)) {
    return PrevValue;
  }
  if (PrevValue.includes('.')) {
    return PrevValue;
  }
  return PrevValue + '.';
};

export const deleteNumber = (value: string) => {
  if (!isValidResult(value)) {
    return value;
  }
  const isNegative = value.startsWith('-');
  if (isNegative) {
    value = signChange(value);
  }
  if (value.length === 1) {
    return '0';
  }
  return isNegative ? signChange(value.slice(0, -1)) : value.slice(0, -1);
};

export const cleanNumber = (value: string) => {
  if (!isValidResult(value)) {
    return '';
  }
  if (value.endsWith('.')) {
    return value.slice(0, -1);
  }
  return value;
};

export const validateDigits = (value: string) => {
  if (
    value.replace('-', '').replace('.', '').length > 19 ||
    value.includes('e')
  ) {
    return Errors.DIGIT_NUMBERS;
  }
  return value;
};

export const calculate = (
  PrevValue: string,
  currentValue: string,
  operation: Operations,
) => {
  const a = parseFloat(PrevValue);
  const b = parseFloat(currentValue);
  switch (operation) {
    case Operations.SUM:
      return validateDigits((a + b).toString());
    case Operations.SUBTRACTION:
      return validateDigits((a - b).toString());
    case Operations.MULTIPLICATION:
      return validateDigits((a * b).toString());
    case Operations.DIVISION:
      if (b === 0) {
        return Errors.INDETERMINATION;
      }
      return validateDigits((a / b).toString());
    default:
      return Errors.UNKNOWN;
  }
};
