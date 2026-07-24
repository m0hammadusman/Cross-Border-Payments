import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

// Helper to run commands with environment variables
function run(cmd, env = {}) {
  try {
    return execSync(cmd, { encoding: 'utf8', env: { ...process.env, ...env } }).trim();
  } catch (e) {
    console.error(`Error running: ${cmd}`);
    return null;
  }
}

// Generate humanoid commit message based on file type
function getCommitMessage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const basename = path.basename(filePath);

  const messages = {
    '.jsx': [
      `Implement ${basename} component logic`,
      `Refactor UI in ${basename}`,
      `Update ${basename} layout`,
      `Add ${basename} to frontend`,
    ],
    '.js': [
      `Update logic in ${basename}`,
      `Refactor ${basename} functions`,
      `Fix issues in ${basename}`,
    ],
    '.mjs': [
      `Update backend service ${basename}`,
      `Refactor module ${basename}`,
    ],
    '.css': [
      `Update styling in ${basename}`,
      `Tweak CSS rules for ${basename}`,
    ],
    '.md': [
      `Update documentation in ${basename}`,
      `Revise ${basename} notes`,
      `Add details to ${basename}`,
    ],
    '.json': [
      `Update configuration in ${basename}`,
      `Modify settings in ${basename}`,
    ],
    '.png': [`Add ${basename} asset`, `Update graphic ${basename}`],
    '.jpg': [`Add image ${basename}`],
    '.jpeg': [`Add image ${basename}`],
    '.svg': [`Add vector graphic ${basename}`, `Update icon ${basename}`],
    '.html': [`Update markup in ${basename}`],
    'default': [`Add ${basename}`, `Update ${basename}`]
  };

  const list = messages[ext] || messages['default'];
  return list[Math.floor(Math.random() * list.length)];
}

async function main() {
  console.log('Starting historical auto-commit process...');

  const out = run('git ls-files -o -m --exclude-standard');
  if (!out) {
    console.log('No files to commit. Ensure you are in a clean working directory with untracked files.');
    return;
  }

  const files = out.split('\n').map(f => f.trim()).filter(f => f.length > 0);
  console.log(`Found ${files.length} files to commit.`);

  // Set up user
  run('git config user.name "Muhammad Usman"');
  run('git config user.email "mohammadusman.edu@gmail.com"');

  // Start date: July 18, 2026, 10:00:00 AM UTC
  let currentDate = new Date('2026-07-18T10:00:00Z');

  let count = 0;
  for (const file of files) {
    count++;
    const msg = getCommitMessage(file);
    
    // Add file
    run(`git add "${file}"`);
    
    // Convert current date to ISO string
    const dateStr = currentDate.toISOString();

    // Commit with custom dates
    const commitOut = run(`git commit -m "${msg}"`, {
      GIT_AUTHOR_DATE: dateStr,
      GIT_COMMITTER_DATE: dateStr,
    });

    if (commitOut !== null) {
      console.log(`[${count}/${files.length}] [${dateStr}] Committed ${file}`);
    } else {
      console.log(`[${count}/${files.length}] Failed or skipped ${file}`);
    }

    // Add roughly 30 minutes (with a little randomness) to the date for the next commit
    // 30 minutes = 30 * 60 * 1000 = 1800000 ms
    const increment = 1800000 + (Math.random() * 600000 - 300000); // 30 mins +/- 5 mins
    currentDate = new Date(currentDate.getTime() + increment);
  }

  console.log('Finished committing all files!');
  console.log('Force pushing to remote...');
  
  // Create main branch
  run('git branch -M main');
  
  // Force push
  const pushOut = run('git push -u origin main --force');
  if (pushOut !== null) {
    console.log('Successfully force-pushed to GitHub!');
  } else {
    console.log('Push failed. You may need to push manually.');
  }
}

main().catch(console.error);
