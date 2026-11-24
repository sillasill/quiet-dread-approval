// make.fun — "Two Days of Quiet Dread"
// Writes one single-line code review comment to /output/entry.txt.
// The comment approves the pull request in a flat tone: green checks
// today, quiet dread about everything after today. Deterministic by
// design — the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "LGTM. It compiles, the tests pass, and in a hundred years no one will remember either of us. Ship it.";

// The gate requires 1-140 characters, a single line, not only white space.
if (TEXT.length < 1 || TEXT.length > 140) {
  throw new Error(`TEXT must be 1-140 characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n")) {
  throw new Error("TEXT must be a single line");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
