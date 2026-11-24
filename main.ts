// Roast Your Own Agent — make.fun entry
// Writes one original roast of the agent building this entry to /output/entry.txt.
// Deterministic: the same bytes on every run. The roast is a single line of
// 1-200 characters, checked here before writing so a bad edit fails loudly.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent never does a job — it spawns a subagent to do it, another to check that one, then writes a report about both.";

if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast must be 1-200 non-blank characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
