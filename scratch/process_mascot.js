import sharp from 'sharp';
import fs from 'fs';

async function makeTransparent() {
  const inputPath = 'C:/Users/Yogini Dastane/.gemini/antigravity-ide/brain/6b816c17-92bd-4b9a-a321-6a057844940e/dabbame_mascot_invite_1791721595756.jpg';
  const outputPath = 'c:/Users/Yogini Dastane/Desktop/KUSH/Workspace/site/public/dabbame-mascot.webp';

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Get raw RGBA buffer
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  // Flood fill from border pixels
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Helper to check if pixel is near-white or ground shadow
  function isOuterBg(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    // Pure or near white background
    if (r > 235 && g > 235 && b > 235) return true;
    
    // Ground shadow below shoes: y > height * 0.88 and faint brownish/gray shadow
    if (y > height * 0.88 && r > 180 && g > 170 && b > 160 && Math.abs(r - g) < 25 && Math.abs(r - b) < 30) {
      return true;
    }
    
    return false;
  }

  // Push all border pixels that are outer background
  for (let x = 0; x < width; x++) {
    if (isOuterBg(x, 0)) {
      queue.push(x, 0);
      visited[0 * width + x] = 1;
    }
    if (isOuterBg(x, height - 1)) {
      queue.push(x, height - 1);
      visited[(height - 1) * width + x] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    if (isOuterBg(0, y)) {
      queue.push(0, y);
      visited[y * width + 0] = 1;
    }
    if (isOuterBg(width - 1, y)) {
      queue.push(width - 1, y);
      visited[y * width + (width - 1)] = 1;
    }
  }

  // BFS
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const idx = (cy * width + cx) * 4;
    data[idx + 3] = 0; // Transparent

    // 4 neighbors
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (!visited[nIndex] && isOuterBg(nx, ny)) {
          visited[nIndex] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  console.log(`Processed ${queue.length / 2} transparent background pixels out of ${width * height}`);

  // Save as WebP
  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .webp({ quality: 95, effort: 6 })
    .toFile(outputPath);

  console.log(`Saved transparent mascot to ${outputPath}`);
}

makeTransparent().catch(console.error);
