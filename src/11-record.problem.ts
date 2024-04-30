import { expect, it } from "vitest";

const createCache = () => {
  // utility type
  // allows to assign values to an object with dynamic keys

  // allows to add any number of dynamic keys to a specific object at runtime
  // const cache: Record<string, string> = {};

  // note: "can´t use to index this"-error
  // [id: string] = index of the object = key of the object
  const cache: { [id: string]: string } = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
