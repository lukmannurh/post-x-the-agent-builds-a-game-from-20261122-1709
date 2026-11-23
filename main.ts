// STAR DODGE — a video-on-X bounty entry (Node 22, standard library only).
//
// The entry IS the post: an AI agent got ONE prompt, built a tiny browser
// game from it (game.html in this repo — fly a rocket through an asteroid
// field, dodge the rocks, grab the stars), filmed itself building it and
// the game running, and cut it into video.mp4. The video ends with
// make.fun's referral end card (press pack, edition 2026-11-21) carrying
// referral code pkcbvd3n. Lukman posts video.mp4 natively on X from his
// public account, and POST.json names that post.
//
// This program does exactly one job: copy POST.json from the repository
// root to /output/POST.json, where the gate reads it. Nothing this program
// writes about the post is scored — the score comes from the post itself
// (views + 10x interactions, read via FxTwitter after the deadline).
//
// Local run (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
