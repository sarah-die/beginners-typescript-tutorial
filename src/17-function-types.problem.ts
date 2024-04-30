import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

// (arguments) => returnType
// void is typescript specific
// note: use this when passing functions into something
type FocusListener = (arg: boolean) => void;

const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
