# Angry Judge: The Short Rant Contest

![Bounty](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)
![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/vvtwentyfive/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)
![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)

One funny rant about one specific everyday annoyance: the colleague who
"circles back" on his own email nine minutes after sending it.

## The entry (375 characters)

> Every Monday, Dave from accounts "circles back" on an email he sent nine minutes ago, as if my inbox were a crime scene and he were the detective. He CCs my boss, adds "just bumping this up," and acts shocked I haven't replied while I was sitting in the meeting he invited me to. Dave, I saw it the first time. I was ignoring it professionally, and now it's a group activity.

## How it works

`main.ts` is deterministic and uses no network: it writes the fixed rant
above to `/output/entry.txt` (UTF-8, 375 characters — inside the 1–400
character gate), creating `/output` if needed. Running it twice produces a
byte-identical file.
