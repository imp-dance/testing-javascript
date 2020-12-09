import { add, divide, multiply, subtract } from "../modules";

test("add() adds", () => {
  expect(add(5, 10, 10, 10)).toBe(35);
  expect(add(5, 5, 5, 5, 5)).toBe(25);
});

test("subtract() subtracts", () => {
  expect(subtract(35, 10, 10, 10)).toBe(5);
  expect(subtract(35, 5, 5, 5, 5)).toBe(15);
});

test("multiply() multiplies", () => {
  expect(multiply(10, 10)).toBe(100);
  expect(multiply(5, 5, 5)).toBe(125);
});

test("divide() divides", () => {
  expect(divide(10, 10)).toBe(1);
  expect(divide(5, 5, 5)).toBe(0.2);
});

test("Math functions returns value if only given one argument", () => {
  expect(add(5)).toBe(5);
  expect(subtract(5)).toBe(5);
  expect(multiply(5)).toBe(5);
  expect(divide(5)).toBe(5);
});

test("Giving incorrect parameters will throw an error", () => {
  const addFunc = (...numbers: unknown[]) => add(...(numbers as number[]));
  try {
    expect(addFunc("1", 3, {})).toBeNull();
    // shouldn't get to this point in the code
    expect(true).toBe(false);
  } catch {
    // we are expecting the above to fail, so pass the test if any errors thrown
  }
});
