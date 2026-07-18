import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

// Helper to run commands
function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    console.error(`Error running: ${cmd}`);
    console.error(e.stderr);
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
  console.log('Starting auto-commit process...');

  const out = run('git ls-files -o -m --exclude-standard');
  if (!out) {
    console.log('No files to commit.');
    return;
  }

  const files = out.split('\n').map(f => f.trim()).filter(f => f.length > 0);
  console.log(`Found ${files.length} files to commit.`);

  // Set up git user if not set
  run('git config user.name "Muhammad Usman"');
  run('git config user.email "m0hammadusman@github.com"');

  let count = 0;
  for (const file of files) {
    count++;
    const msg = getCommitMessage(file);
    
    // Add file
    run(`git add "${file}"`);
    
    // Commit
    const commitOut = run(`git commit -m "${msg}"`);
    if (commitOut) {
      console.log(`[${count}/${files.length}] Committed ${file}: ${msg}`);
    } else {
      console.log(`[${count}/${files.length}] Failed or skipped ${file}`);
    }

    // Optional: tiny sleep to stagger timestamps
    await new Promise(r => setTimeout(r, 100));
  }

  console.log('Finished committing all files!');
  console.log('Pushing to remote...');
  
  // Create main branch if it doesn't exist
  run('git branch -M main');
  
  // Push
  const pushOut = run('git push -u origin main');
  if (pushOut !== null) {
    console.log('Successfully pushed to GitHub!');
  } else {
    console.log('Push failed. You may need to push manually if it asks for credentials.');
  }
}

main().catch(console.error);
