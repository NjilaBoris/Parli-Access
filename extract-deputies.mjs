
import { readFileSync, writeFileSync } from "fs";
import * as cheerio from "cheerio";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node extract-deputies.mjs /path/to/saved-page.html");
  process.exit(1);
}

const html = readFileSync(inputPath, "utf-8");
const $ = cheerio.load(html);

const seen = new Map(); // key: filename (lowercased) -> { name, image }

$(".sppb-carousel-extended-item img").each((_, el) => {
  const src = $(el).attr("src") || "";
  const alt = ($(el).attr("alt") || "").trim();
  const filename = src.split("/").pop();
  if (!filename || !alt) return;

  const key = filename.toLowerCase();
  if (!seen.has(key)) {
    seen.set(key, { name: alt, image: filename });
  }
});

const deputies = Array.from(seen.values()).sort((a, b) =>
  a.name.localeCompare(b.name, "fr")
);

writeFileSync(
  "deputies.json",
  JSON.stringify(deputies, null, 2) + "\n",
  "utf-8"
);

console.log(`Extracted ${deputies.length} unique deputies -> deputies.json`);
