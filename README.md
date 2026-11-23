# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/lukmannurh/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/lukmannurh/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

STAR DODGE — one prompt, one game. An AI agent built a tiny browser game (fly a rocket through an asteroid field) from a single sentence, and filmed it: a 32.5 s vertical video of the prompt, the agent coding, and real gameplay.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=pkcbvd3n&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

---

## The one prompt

> Build a tiny browser game: fly a rocket through an asteroid field.
> Steer with arrow keys, dodge the rocks, grab the stars.
> Score climbs as the speed rises. One HTML file.

## The game

**STAR DODGE** (`game.html`, single file, no dependencies) — steer a rocket
with arrow keys / A-D / mouse / touch, dodge falling asteroids, grab stars
for points, build combos, survive as the speed climbs. 3 lives, shield
after every hit, particles, screen shake, game over + restart (R).

- Play it: open `game.html` in any browser.
- Film mode: `game.html?autopilot=1` — the ship steers itself (used only
  to capture the gameplay footage in the video).

## The video

`video.mp4` — 32.5 s, vertical 1080×1920, 30 fps, H.264, no audio:

1. **0–4 s** — the one prompt, on screen.
2. **4–14 s** — the agent working: terminal, code appearing, game written.
3. **14–30 s** — the finished game RUNNING: real gameplay footage, recorded
   live in headless Chromium (Playwright) with the autopilot flying.
4. **27.5–30 s** — "YOUR TURN — COME BUILD ON MAKE.FUN".
5. **30–32.5 s** — make.fun's official referral end card (press pack,
   edition 2026-11-21, transparent WebM over the last 2.5 s, used as-is),
   referral code `pkcbvd3n` typed into its field.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is
all the program does — the entry is the post itself.

## The post

`POST.json` names the X post (video posted natively from a public account).
Post text is in `POST-DRAFT.txt` — it carries the required bounty line,
`@makefunai`, and play code `makefun-arch-wren-candy`.
