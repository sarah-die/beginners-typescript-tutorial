import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

// note: extends is a property of interface that type doesn´t have
interface BaseWithId {
  id: string;
}

interface User extends BaseWithId {
  firstName: string;
  lastName: string;
}

interface Post extends BaseWithId {
  title: string;
  body: string;
}

// extend multiple interfaces
interface Comment extends BaseWithId, User {
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<
    Equal<
      Comment,
      { id: string; comment: string; firstName: string; lastName: string }
    >
  >
];
