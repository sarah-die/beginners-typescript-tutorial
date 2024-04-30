import { expect, it } from "vitest";

// note: a type can represent anything (number, object, boolean)
// better to extract the type to make error messages etc. more readable
type AddTwoNumbersProps = {
  first: number;
  second: number;
};

// note: interfaces can only be used to present objects (and a couple of other things)
interface AddTwoNumbersInterface {
  first: number;
  second: number;
}

export const addTwoNumbers = (
  // solution 1: use props-type
  params: AddTwoNumbersProps
  // solution 2: parse in object type
  // { first: number; second: number }
  // solution 3: use props-interface
  // AddTwoNumbersInterface
) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
