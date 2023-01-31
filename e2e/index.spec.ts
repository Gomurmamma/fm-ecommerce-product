// tests/index.spec.ts
import test from "./next-fixture";
import { expect } from "@playwright/test";

test("page text", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`);
  const text = await page.innerText("h1");
  expect(text).toBe("Fall Limited Edition Sneakers");
});
