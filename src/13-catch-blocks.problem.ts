import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
      // throw "Failure";
    }
  } catch (e) {
    // checking at runtime what that type is
    if (e instanceof Error) return e.message;
    // in case someone wrote e custom message before
    if (typeof e === "string") return e;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
