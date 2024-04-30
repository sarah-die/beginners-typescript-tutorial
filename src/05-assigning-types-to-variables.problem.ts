import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
// use this to get autocomplete
const defaultUser: User = {
  id: 1,
  firstName: "name",
  lastName: "last",
  isAdmin: true,
};

const defaultUser2 = {
  id: 1,
  firstName: "name",
  lastName: "last",
  isAdmin: false,
} satisfies User;

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
  expect(getUserId(defaultUser2)).toEqual(1);
});
