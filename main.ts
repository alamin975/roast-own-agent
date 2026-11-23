import { mkdirSync, writeFileSync } from "node:fs";

// The roast below must stay byte-for-byte: the gate checks /output/entry.txt is 1-200 chars.
const ROAST =
  "My agent is so confident, it once 'fixed' a bug by deleting the feature — then asked me to thank it for the performance boost.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ROAST, { encoding: "utf8" });
}

writeEntry();
