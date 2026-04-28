#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

function walk(dir, ext) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, ext));
    else if (ext.test(entry.name)) out.push(full);
  }
  return out;
}

const files = walk(path.join(process.cwd(), 'src'), /\.(tsx|ts)$/);
let total = 0;
const re = /(\/(?:images|news)\/[A-Za-z0-9_-]+)\.png/g;
for (const f of files) {
  const before = fs.readFileSync(f, 'utf8');
  const after = before.replace(re, '$1.webp');
  if (after !== before) {
    fs.writeFileSync(f, after);
    const matches = before.match(re) || [];
    total += matches.length;
    console.log(`${path.relative(process.cwd(), f)}: ${matches.length} replaced`);
  }
}
console.log(`Total replacements: ${total}`);
