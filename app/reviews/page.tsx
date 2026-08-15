'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, Heart, ShieldCheck } from 'lucide-react';

const CASES = Array.from({ length: 10 }, (_, i) => `review-case-${String(i + 1).padStart(2, '0')}.webp`);

async function loadReviewImages() {
  const response = await fetch('/review-cases.tar.gz', { cache: 'no-store' });
  if (!response.ok) throw new Error('โหลดภาพรีวิวไม่สำเร็จ');
  const compressed = await response.arrayBuffer();
  const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'));
  const bytes = new Uint8Array(await new Response(stream).arrayBuffer());
  const result = new Map<string, string>();
  let offset = 0;
  while (offset + 512 <= bytes.length) {
    const header = bytes.slice(offset, offset + 512);
    if (header.every((v) => v === 0)) break;
    const name = new TextDecoder().decode(header.slice(0, 100)).replace(/\0.*$/, '');
    const sizeText = new TextDecoder().decode(header.slice(124, 136)).replace(/\0.*$/, '').trim();
    const size = parseInt(sizeText || '0', 8) || 0;
    offset += 512;
    const data = bytes.slice(offset, offset + size);
    if (name) result.set(name, URL.createObjectURL(new Blob([data], { type: 'image/webp' })));
    offset += Math.ceil(size / 512) * 512;
  }
  return result;
}

export default function ReviewsPage() {
  const [images, setImages] = useState<Map<string, string>>(new Map());
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    let urls: string[] = [];
    loadReviewImages().then((map) => {
      if (!active) return;
      urls = Array.from(map.values());
      setImages(map);
    }).catch(() => setError(true));
    return () => {
      active = false;
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#193f31]">
      <header className="sticky top-0 z-20 border-b border-[#efdcb3] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff4cf] ring-1 ring-[#e4c979]"><Heart size={22} className="fill-[#ffd35a] text-[#4c8b48]" /></div>
            <div><div className="text-xl font-black text-[#145b3f]">Health Journey</div><div className="text-xs font-semibold text-[#bd7118]">by Nook Health Coach</div></div>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#e8d8b7] bg-white px-4 py-2 text-sm font-black text-[#286047]"><ArrowLeft size={17}/> กลับหน้าหลัก</Link>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#fff3c7] via-[#fffaf0] to-[#e7f4dc]">
        <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-8 md:py-16">
          <div className="max-w-4xl">
            <div className="text-sm font-black tracking-[0.2em] text-[#f28a1b]">FEEL GREAT REVIEW</div>
            <h1 className="mt-3 text-4xl font-black leading-tight text-[#145b3f] md:text-6xl">10 เคสรีวิวจริง<br/><span className="text-[#ef7117]">จากภาพรีวิวเดิม</span></h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#53675d]">ปรับเฉพาะกรอบและการจัดวางให้ดูสะอาดขึ้น โดยคงภาพ ชุด คน และข้อความในรีวิวเดิมไว้ ไม่เติมข้อความลงบนภาพรีวิว</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-14">
        {error ? <div className="rounded-3xl bg-white p-8 text-center font-bold text-[#9a4c2d] ring-1 ring-[#eadfc9]">กำลังเตรียมภาพรีวิว กรุณารีเฟรชหน้านี้อีกครั้งค่ะ</div> : null}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((name, index) => {
            const src = images.get(name);
            return <article key={name} className="overflow-hidden rounded-[30px] bg-white p-3 shadow-lg ring-1 ring-[#eadfc9]">
              <div className="overflow-hidden rounded-[24px] bg-[#fffaf0]">
                {src ? <img src={src} alt={`Feel Great review case ${index + 1}`} className="block h-auto w-full" /> : <div className="aspect-square animate-pulse bg-[#f3ead7]" />}
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-12 md:px-8 md:pb-16">
        <div className="rounded-[30px] bg-[#17583d] p-6 text-white md:p-8">
          <div className="flex items-start gap-3"><ShieldCheck className="mt-1 shrink-0 text-[#ffd35a]"/><div><div className="text-xl font-black">ภาพรีวิวเดิม • จัดวางใหม่เท่านั้น</div><div className="mt-1 text-sm font-semibold leading-6 text-white/80">ไม่เพิ่มคำ ไม่เปลี่ยนคน ไม่สร้าง Before/After ใหม่ และไม่แต่งผลลัพธ์จากรีวิวเดิม</div></div></div>
        </div>
      </section>
    </main>
  );
}
