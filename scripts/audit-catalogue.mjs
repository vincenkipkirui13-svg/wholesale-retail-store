import fs from 'node:fs';

const source = fs.readFileSync('lib/data.ts', 'utf8');
const records = source
  .split('\n')
  .filter((line) => line.trimStart().startsWith('{id:'))
  .map((line) => ({
    id: line.match(/\{id:'([^']+)'/)?.[1] ?? '',
    name: line.match(/name:'([^']+)'/)?.[1] ?? '',
    image: line.match(/image:'([^']+)'/)?.[1] ?? ''
  }));

const missingImages = records.filter((record) => !record.image);
const byImage = new Map();

for (const record of records) {
  if (!record.image) continue;
  const group = byImage.get(record.image) ?? [];
  group.push(record);
  byImage.set(record.image, group);
}

const duplicateImages = [...byImage.values()].filter((group) => group.length > 1);

console.log(JSON.stringify({
  totalProducts: records.length,
  productsWithImages: records.length - missingImages.length,
  missingImages,
  duplicateImages
}, null, 2));

if (missingImages.length || duplicateImages.length) {
  process.exitCode = 1;
}
