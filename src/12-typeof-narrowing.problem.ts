import { expect, it } from "vitest";

// write this function
// note: you can´t access a property we don´t know is there
const coerceAmount = (amount: number | { amount: number }) => {
  // solution 1
  // if (typeof amount === "number") return amount;
  // return amount.amount;

  // solution 2
  if (typeof amount === "object") return amount.amount;
  return amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
