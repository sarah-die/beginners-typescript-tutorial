import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

// utility types
type MyType = Omit<User, "id">;
type MyTypePick = Pick<User, "firstName" | "lastName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
type tests2 = [
  Expect<Equal<MyTypePick, { firstName: string; lastName: string }>>
];
