// bring-the-humans-03: TikTok ad entry — copies VIDEO.json to the output directory.
const { readFileSync, writeFileSync, mkdirSync } = require("node:fs");
const { join } = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) process.exit(1);
mkdirSync(outDir, { recursive: true });
const data = readFileSync(join(__dirname, "VIDEO.json"));
writeFileSync(join(outDir, "VIDEO.json"), data);
