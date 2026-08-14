import fs from 'fs';
import path from 'path';

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walkSync(filepath, callback);
    } else {
      callback(filepath);
    }
  }
}

walkSync('docs', (filepath) => {
  if (filepath.endsWith('.md')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    content = content.replace(/{% hint style="info" %}/g, '::: info');
    content = content.replace(/{% hint style="warning" %}/g, '::: warning');
    content = content.replace(/{% hint style="success" %}/g, '::: tip');
    content = content.replace(/{% endhint %}/g, ':::');

    if (content !== original) {
      fs.writeFileSync(filepath, content);
      console.log(`Updated ${filepath}`);
    }
  }
});
