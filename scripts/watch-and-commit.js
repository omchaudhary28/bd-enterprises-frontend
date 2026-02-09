#!/usr/bin/env node
const { spawnSync, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const WATCH_PATHS = [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'public')];
const DEBOUNCE_MS = 700;

const BRANCH = process.env.WATCH_BRANCH || 'main';
const COMMIT_MSG = process.env.WATCH_COMMIT_MSG || 'chore: auto changes';

let timer = null;
let running = false;

function log(...args) {
  console.log('[watch]', ...args);
}

function runBuild() {
  log('Running build...');
  const res = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], { stdio: 'inherit' });
  return res.status === 0;
}

function gitHasChanges() {
  try {
    const out = execSync('git status --porcelain').toString().trim();
    return out.length > 0;
  } catch (err) {
    log('git status failed:', err.message);
    return false;
  }
}

function gitCommitAndPromptPush() {
  try {
    if (!gitHasChanges()) {
      log('No changes to commit.');
      return;
    }

    execSync('git add -A', { stdio: 'inherit' });
    try {
      execSync(`git commit -m "${COMMIT_MSG}"`, { stdio: 'inherit' });
      log('Committed changes.');
    } catch (e) {
      log('Nothing to commit or commit failed.');
    }

    promptYesNo(`Push commits to '${BRANCH}' now? (y/N) `, (yes) => {
      if (yes) {
        try {
          execSync(`git push origin ${BRANCH}`, { stdio: 'inherit' });
          log('Pushed to remote.');
        } catch (err) {
          log('git push failed:', err.message);
        }
      } else {
        log('Skipped push.');
      }
    });
  } catch (err) {
    log('git operations failed:', err.message);
  }
}

function promptYesNo(question, cb) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question(question, (ans) => {
    rl.close();
    const y = String(ans || '').trim().toLowerCase();
    cb(y === 'y' || y === 'yes');
  });
}

function onChange(file) {
  if (running) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(async () => {
    running = true;
    log('Detected change:', file);
    const ok = runBuild();
    if (ok) {
      gitCommitAndPromptPush();
    } else {
      log('Build failed; skipping commit/push.');
    }
    running = false;
  }, DEBOUNCE_MS);
}

function startWatch() {
  log('Watching paths:', WATCH_PATHS.join(', '));
  WATCH_PATHS.forEach((p) => {
    if (!fs.existsSync(p)) return;
    fs.watch(p, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      const ignored = filename.endsWith('.map') || filename.endsWith('.tmp');
      if (ignored) return;
      onChange(filename);
    });
  });

  // initial build
  runBuild();
}

startWatch();
