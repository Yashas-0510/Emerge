#!/usr/bin/env node

/**
 * Deploy script — Emerge Fitness
 * Run: node deploy.js
 *
 * Prerequisites:
 * 1. GitHub CLI (gh) authenticated: https://cli.github.com/
 * 2. Vercel CLI (vercel) installed: npm i -g vercel
 *
 * What this does:
 * 1. Initializes git if not already done
 * 2. Pushes to GitHub (creates repo if needed)
 * 3. Opens Vercel import URL so you can connect the repo
 */

const { execSync } = require('child_process');
const { githost } = require('os');

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', ...opts });
}

async function main() {
  const repoName = 'emerg-fitness';

  // 1. Git init if needed
  try {
    run('git rev-parse --git-dir');
    console.log('✓ Git already initialized');
  } catch {
    run('git init');
    run('git add .');
    run('git commit -m "Initial commit — Emerge Fitness website"');
    console.log('✓ Git initialized');
  }

  // 2. Check if remote exists
  try {
    run('git remote get-url origin');
    console.log('✓ Remote already set');
  } catch {
    console.log('\n📦 Creating GitHub repo...');
    run(`gh repo create ${repoName} --public --source=. --push`);
    console.log('✓ GitHub repo created and pushed');
  }

  // 3. Open Vercel import
  const importUrl = `https://vercel.com/new?repo=${repoName}`;
  console.log(`\n🚀 Open this link to import your repo on Vercel:`);
  console.log(`   ${importUrl}`);
  console.log(`\n   1. Click "Import Git Repository"`);
  console.log(`   2. Select "${repoName}"`);
  console.log(`   3. Click "Deploy" — your site goes live in ~60 seconds`);
  console.log(`\n   After first deploy, every push to main auto-deploys.\n`);

  // Try to auto-open
  try {
    require('open')(importUrl);
  } catch {}
}

main().catch(console.error);
