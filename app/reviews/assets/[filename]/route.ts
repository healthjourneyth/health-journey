import { gunzipSync } from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { NextResponse } from 'next/server';

function tarEntries(buffer: Buffer) {
  const entries: { name: string; data: Buffer }[] = [];
  let offset = 0;
  while (offset + 512 <= buffer.length) {
    const header = buffer.subarray(offset, offset + 512);
    if (header.every((b) => b === 0)) break;
    const name = header.subarray(0, 100).toString('utf8').replace(/\0+$/, '');
    const sizeText = header.subarray(124, 136).toString('ascii').replace(/\0+$/, '').trim();
    const size = parseInt(sizeText || '0', 8) || 0;
    const dataStart = offset + 512;
    const dataEnd = dataStart + size;
    entries.push({ name, data: buffer.subarray(dataStart, dataEnd) });
    offset = dataStart + Math.ceil(size / 512) * 512;
  }
  return entries;
}

export async function GET(_request: Request, context: { params: Promise<{ filename: string }> }) {
  const { filename } = await context.params;
  if (!/^[a-zA-Z0-9._-]+$/.test(filename)) return new NextResponse('Not found', { status: 404 });

  const archivePath = path.join(process.cwd(), 'public', 'review-cases.tar.gz');
  if (!fs.existsSync(archivePath)) return new NextResponse('Not found', { status: 404 });

  try {
    const entries = tarEntries(gunzipSync(fs.readFileSync(archivePath)));
    if (filename === '__index.json') {
      const names = entries.filter((entry) => /\.(png|jpe?g|webp)$/i.test(entry.name)).map((entry) => entry.name);
      return NextResponse.json(names, { headers: { 'Cache-Control': 'no-store' } });
    }

    const entry = entries.find((item) => item.name === filename);
    if (!entry) return new NextResponse('Not found', { status: 404 });

    const ext = path.extname(filename).toLowerCase();
    const contentType = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : ext === '.webp' ? 'image/webp' : 'application/octet-stream';
    return new NextResponse(entry.data as BodyInit, {
      headers: { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=31536000, immutable' },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
