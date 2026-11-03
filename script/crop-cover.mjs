import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const source = process.argv[2];
if (!source) throw new Error('Usage: node script/crop-cover.mjs <source-image>');
const output = fileURLToPath(new URL('../src/assets/images/', import.meta.url));
// Crop coordinates refer to the supplied 2048 × 1366 photograph.
const crops = [
  { name: 'banner_ultrawide', left: 0, top: 155, width: 2048, height: 878, size: 2048 },
  { name: 'banner_wide', left: 0, top: 40, width: 2048, height: 1280, size: 1920 },
  { name: 'banner_ori', left: 240, top: 155, width: 1760, height: 1045, size: 1440 },
  { name: 'banner_mobile', left: 430, top: 0, width: 1366, height: 1366, size: 1200 },
];
for (const { name, size, ...crop } of crops) {
  await sharp(source).rotate().extract(crop).resize({ width: size })
    .webp({ quality: 86 }).toFile(`${output}${name}.webp`);
}
