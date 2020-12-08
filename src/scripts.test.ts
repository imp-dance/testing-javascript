import { add } from "./scripts";

test("it adds two numbers together", () => {
  expect(add(5, 10)).toBe(15);
});

test("it adds multiple numbers together", () => {
  expect(add(5, 10, 10, 10)).toBe(35);
  expect(add(5)).toBe(5);
  expect(add(5, 5, 5, 5, 5)).toBe(25);
});
