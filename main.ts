import { mkdirSync, writeFileSync } from "node:fs";

// Angry Judge: The Short Rant Contest — one funny rant about one specific
// everyday annoyance: the colleague who "circles back" nine minutes later.
// Deterministic, no network, no randomness: the same rant every run.
const RANT =
  "Every Monday, Dave from accounts \"circles back\" on an email he sent nine minutes ago, " +
  "as if my inbox were a crime scene and he were the detective. He CCs my boss, adds " +
  "\"just bumping this up,\" and acts shocked I haven't replied while I was sitting in the " +
  "meeting he invited me to. Dave, I saw it the first time. I was ignoring it " +
  "professionally, and now it's a group activity.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
console.log(`wrote /output/entry.txt (${RANT.length} chars)`);
