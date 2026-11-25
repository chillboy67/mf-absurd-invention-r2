// Entry for make.fun: "One-Sentence Absurd Invention Pitch"
// Writes the one-sentence invention pitch to /output/entry.txt.
// The pitch is a single constant string, so the output is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH =
  "A self-apologising alarm clock that says sorry every time it wakes you, then immediately does it again tomorrow.";

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PITCH + "\n", "utf8");
console.log(`Wrote entry to ${outPath}`);
