import { validateArrayOfTypes } from "../utils";

export const add = (...numbers: number[]): number => {
  if (!validateArrayOfTypes(numbers, "number")) {
    return null;
  }
  return numbers.reduce((a, b) => a + b);
};

export const subtract = (...numbers: number[]): number => {
  if (!validateArrayOfTypes(numbers, "number")) {
    return null;
  }
  return numbers.reduce((a, b) => a - b);
};

export const multiply = (...numbers: number[]): number => {
  if (!validateArrayOfTypes(numbers, "number")) {
    return null;
  }
  return numbers.reduce((a, b) => a * b);
};

export const divide = (...numbers: number[]): number => {
  if (!validateArrayOfTypes(numbers, "number")) {
    return null;
  }
  return numbers.reduce((a, b) => a / b);
};
