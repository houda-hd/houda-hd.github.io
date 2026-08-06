#!/usr/bin/env node
/* HOUDA+ 站内搜索索引生成器（零依赖）
 * 读取全站 HTML，生成 assets/search-data.json。
 * 用法：node build-search.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'assets', 'search-data.json');

function walk(dir, acc) {
  for (const name of fs.readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules' || name === '.github' || name === 'hv') continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (name.endsWith('.html')) acc.push(full);
  }
}

function stripTags(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<head[\s\S]*?<\/head>/gi, ' ');
}

function toText(html) {
  let t = stripTags(html);
  t = t.replace(/<[^>]+>/g, ' ');
  t = t
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

function pickTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (m && m[1].trim()) return toText(m[1]).replace(/\s+/g, ' ').trim();
  const h = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h && h[1].trim()) return toText(h[1]).replace(/\s+/g, ' ').trim();
  return 'HOUDA+';
}

function isNoindex(html) {
  return /name=["']?robots["']?[^>]*content=["']?[^"']*noindex/i.test(html)
    || /data-pagefind-ignore/i.test(html);
}

const files = [];
walk(ROOT, files);
const pages = [];
for (const f of files) {
  let html;
  try { html = fs.readFileSync(f, 'utf8'); } catch { continue; }
  if (isNoindex(html)) continue;
  const rel = path.relative(ROOT, f).split(path.sep).join('/');
  const title = pickTitle(html);
  const text = toText(html).slice(0, 3000);
  // 用正文前 140 字做默认摘要
  const excerpt = text.slice(0, 140);
  pages.push({ title, url: rel, excerpt, text });
}

pages.sort((a, b) => a.title.localeCompare(b.title, 'zh'));
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(pages, null, 0));
console.log(`Indexed ${pages.length} pages -> ${path.relative(ROOT, OUT)}`);
for (const p of pages) console.log('  -', p.url, '|', p.title);
