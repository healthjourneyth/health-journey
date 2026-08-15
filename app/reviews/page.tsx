'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Heart, ShieldCheck, Sparkles } from 'lucide-react';

const cases = [
  { rank: 1, title: 'น้ำหนัก 59 → 56.3 กก.', period: 'ประมาณ 1 เดือน', category: 'น้ำหนัก', detail: 'ลูกค้ารายงานว่าน้ำหนักจาก 59 กก. เหลือ 56.3 กก.', why: 'ตัวเลขชัด เข้าใจง่าย และเหมาะกับการเล่าเป็นประสบการณ์ส่วนบุคคล' },
  { rank: 2, title: 'น้ำหนัก 67 → 65.05 กก.', period: '14 วัน', category: 'น้ำหนัก', detail: 'มีภาพรายงานน้ำหนักและระบุช่วงเวลา 14 วัน', why: 'มีทั้งตัวเลขและระยะเวลาที่ชัดเจน' },
  { rank: 3, title: 'น้ำหนัก 63 → 60.55 กก.', period: 'จากภาพรีวิว', category: 'น้ำหนัก + รูปร่าง', detail: 'ลูกค้ารายงานว่าตัวเบาขึ้น ผ้าหลวม และรู้สึกว่าตัวเองเปลี่ยน', why: 'เล่าได้ทั้งตัวเลขและความรู้สึกจากชีวิตจริง' },
  { rank: 4, title: 'น้ำหนัก 66 กก. แต่รูปร่างเปลี่ยน', period: 'จากภาพรีวิว', category: 'รูปร่าง', detail: 'ลูกค้ารายงานว่ากางเกงหลวม ขาเล็กลง และแก้มลดลง', why: 'ทำให้เห็นว่าความเปลี่ยนแปลงไม่ได้มีแค่ตัวเลขบนตาชั่ง' },
  { rank: 5, title: 'น้ำหนัก 98 → 90 กก.', period: 'จากภาพรีวิว', category: 'น้ำหนัก + สุขภาพ', detail: 'มีการส่งตัวเลขน้ำหนัก และมีข้อความเกี่ยวกับระดับน้ำตาลปลายนิ้ว 111', why: 'เป็นเคสที่มีข้อมูลหลายมิติ แต่ควรเล่าแบบ case study ไม่สรุปเหตุและผลจากผลิตภัณฑ์' },
  { rank: 6, title: 'Before 123.5 → After 93.4 กก.', period: 'จากภาพ Before/After', category: 'น้ำหนัก + รูปร่าง', detail: 'ภาพเปรียบเทียบแสดงน้ำหนักก่อน 123.5 กก. และหลัง 93.4 กก.', why: 'ภาพเห็นความแตกต่างชัด แต่ไม่ควรใช้เป็นผลลัพธ์มาตรฐานของคนทั่วไป' },
  { rank: 7, title: 'Before 120 → After 90 กก.', period: 'จากภาพ Before/After', category: 'น้ำหนัก + รูปร่าง', detail: 'ภาพเปรียบเทียบแสดงน้ำหนักก่อน 120 และหลัง 90 กก.', why: 'เหมาะกับคอนเทนต์ Before/After โดยต้องใส่บริบทว่าเป็นประสบการณ์เฉพาะบุคคล' },
  { rank: 8, title: '2 เดือน: น้ำหนักลด 2 กก. และรายงานว่านอนดีขึ้น', period: '2 เดือน', category: 'การนอน + น้ำหนัก', detail: 'ลูกค้ารายงานว่าหลับลึกหลับสบายขึ้น และน้ำหนักลด 2 กก.', why: 'เป็น Lifestyle Story ที่ไม่ยึดติดกับการลดน้ำหนักอย่างเดียว' },
  { rank: 9, title: 'กินอาหารได้ตามปกติและทำต่อได้', period: 'จากบทสนทนา', category: 'พฤติกรรมการกิน', detail: 'มีบทสนทนาที่สะท้อนว่าลูกค้ายังรับประทานอาหารและมองว่าแนวทางทำต่อได้', why: 'เหมาะกับการตอบข้อกังวลเรื่องการดูแลตัวเองแบบทรมานหรือทำต่อเนื่องยาก' },
  { rank: 10, title: 'ประสบการณ์เรื่องความหิวและการกินจุกจิก', period: 'จากบทสนทนา', category: 'พฤติกรรมการกิน', detail: 'มีลูกค้ารายงานประสบการณ์เกี่ยวกับความหิวและการควบคุมการกินที่เปลี่ยนไป', why: 'ตอบ Pain Point ได้ดี แต่ควรใช้คำว่า “ลูกค้ารายนี้รายงานว่า” ไม่ทำเป็น claim ของผลิตภัณฑ์' },
];

const categories = [
  ['น้ำหนัก', '59→56.3, 67→65.05, 63→60.55, 98→90, 120→90, 123.5→93.4 กก.', 'ใช้เป็นแกนหลักของรีวิวได้ แต่ไม่สื่อว่าเป็นผลลัพธ์ที่ทุกคนจะได้'],
  ['รูปร่าง', 'ตัวเบาขึ้น เสื้อผ้าหลวม กางเกงหลวม ขาเล็กลง แก้มลดลง', 'เป็นจุดขายที่ปลอดภัยและเล่าแบบประสบการณ์ได้ดี'],
  ['พฤติกรรมการกิน', 'กินอาหารได้ ทำต่อได้ และมีประสบการณ์เรื่องความหิว', 'เหมาะกับการตอบ objection แต่หลีกเลี่ยงคำว่า “กินอะไรก็ได้”'],
  ['การนอน', 'มีรีวิวที่รายงานว่าหลับลึก/หลับสบายขึ้น', 'ใช้เป็นประสบการณ์เฉพาะบุคคล ไม่สรุปว่า Feel Great ทำให้นอนดีขึ้น'],
  ['น้ำตาล', 'มีเคสที่ส่งค่าปลายนิ้ว 111 และบริบทเกี่ยวกับเบาหวาน/ยา', 'จัดเป็น Health Case Study ความเสี่ยง claim สูง'],
  ['ไขมันในเลือด', 'ผลตรวจหนึ่งชุด: Cholesterol 164, TG 293, HDL 39, LDL 66', 'ยังไม่มีค่า Before/After ในภาพชุดนี้ จึงไม่ควรสรุปว่าผลิตภัณฑ์ลดไขมัน'],
  ['ความดัน/ยา', 'มีรีวิวที่พูดถึงความดันและการเปลี่ยนแปลงเรื่องยาโดยแพทย์', 'ต้องไม่ชักชวนให้หยุดหรือลดยาเอง และไม่ใช้เป็น claim หลัก'],
];

export default function ReviewsPage() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#ef7417] shadow-sm ring-1 ring-[#eedbb5]"><Sparkles size={16}/> Feel Great Review & Case Bank</div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-[#145b3f] md:text-6xl">เสียงจากลูกค้า<br/><span className="text-[#ef7117]">และสิ่งที่เราเรียนรู้จากรีวิวจริง</span></h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#53675d] md:text-xl">รวบรวมข้อมูลจากภาพรีวิวที่นุกส่งมา เพื่อใช้เป็นฐานข้อมูลสำหรับคอนเทนต์ การเล่าเคส และการสื่อสารกับลูกค้า โดยแยก “ประสบการณ์ที่ลูกค้ารายงาน” ออกจากการกล่าวอ้างผลทางการแพทย์</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[['01','จุดขายหลัก','น้ำหนักเปลี่ยน + รูปร่างเปลี่ยน'],['02','สิ่งที่พูดซ้ำ','ดูแลตัวเองง่ายขึ้นและทำต่อได้'],['03','หลักการสื่อสาร','เล่าประสบการณ์ ไม่สรุปเหตุและผลเกินหลักฐาน']].map(([n,t,d])=><div key={n} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#eadfc9]"><div className="text-sm font-black text-[#ef7417]">{n}</div><div className="mt-1 text-xl font-black text-[#17583d]">{t}</div><div className="mt-1 font-semibold leading-6 text-[#68766e]">{d}</div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-12 md:px-8 md:py-16">
        <div className="flex items-end justify-between gap-4"><div><div className="text-sm font-black tracking-[0.2em] text-[#f28a1b]">TOP 10 CASES</div><h2 className="mt-2 text-3xl font-black text-[#145b3f] md:text-4xl">10 รีวิวที่น่าใช้ที่สุด</h2></div><div className="hidden rounded-full bg-[#fff3c7] px-4 py-2 text-sm font-black text-[#80631f] md:block">คัดจากความชัด + ความเล่าเรื่อง + ความปลอดภัย</div></div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cases.map((item)=><article key={item.rank} className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-[#eadfc9] transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7417] to-[#ffc928] font-black text-white">{item.rank}</div><span className="rounded-full bg-[#eef7df] px-3 py-1 text-xs font-black text-[#34714c]">{item.category}</span></div><span className="text-xs font-bold text-[#8a8f87]">{item.period}</span></div>
            <h3 className="mt-5 text-2xl font-black leading-tight text-[#174e38]">{item.title}</h3>
            <p className="mt-3 font-medium leading-7 text-[#596b61]">{item.detail}</p>
            <div className="mt-4 rounded-2xl bg-[#fffaf0] p-4"><div className="text-sm font-black text-[#ef7117]">ทำไมเลือกเคสนี้</div><div className="mt-1 text-sm font-semibold leading-6 text-[#5c6c63]">{item.why}</div></div>
          </article>)}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-8 md:py-16">
          <div className="text-center"><div className="text-sm font-black tracking-[0.2em] text-[#f28a1b]">CASE CATEGORIES</div><h2 className="mt-2 text-3xl font-black text-[#145b3f] md:text-4xl">แยกรีวิวตามปัญหาที่ลูกค้าสนใจ</h2></div>
          <div className="mt-8 overflow-hidden rounded-[28px] border border-[#eadfc9] bg-[#fffdf7]">
            {categories.map(([name,evidence,note],i)=><div key={name} className={`grid gap-3 p-5 md:grid-cols-[180px_1fr_1fr] md:items-center ${i<categories.length-1?'border-b border-[#eee4d0]':''}`}><div className="text-xl font-black text-[#17583d]">{name}</div><div className="text-sm font-semibold leading-6 text-[#596b61]">{evidence}</div><div className="flex gap-2 text-sm font-semibold leading-6 text-[#6b6f66]"><CheckCircle2 className="mt-1 shrink-0 text-[#5c9a4b]" size={17}/>{note}</div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-12 md:px-8 md:py-16">
        <div className="rounded-[32px] bg-[#17583d] p-7 text-white shadow-xl md:p-10">
          <div className="flex items-start gap-4"><ShieldCheck size={30} className="mt-1 shrink-0 text-[#ffd35a]"/><div><h2 className="text-2xl font-black md:text-3xl">แนวทางใช้รีวิวอย่างปลอดภัย</h2><ul className="mt-5 space-y-3 text-sm font-semibold leading-7 text-white/90 md:text-base"><li>• ใช้คำว่า “ลูกค้ารายนี้รายงานว่า…” เมื่อพูดถึงประสบการณ์ส่วนบุคคล</li><li>• ไม่สรุปว่า Feel Great เป็นสาเหตุโดยตรงของผลลัพธ์จาก testimonial เพียงอย่างเดียว</li><li>• ไม่สื่อว่าใคร ๆ ก็จะลดได้เท่ากัน หรือใช้ตัวเลขสูงสุดเป็นผลลัพธ์มาตรฐาน</li><li>• เคสเรื่องน้ำตาล ไขมัน ความดัน หรือยา ให้แยกเป็น Health Case Study และไม่ชักชวนให้หยุด/ลดยาเอง</li><li>• ผลเลือดที่มีในชุดนี้เป็นข้อมูล ณ จุดหนึ่ง หากไม่มี Before/After ไม่ควรสรุปว่าค่าดีขึ้นเพราะผลิตภัณฑ์</li></ul></div></div>
        </div>
      </section>

      <footer className="bg-[#075137] text-white"><div className="mx-auto max-w-[1280px] px-5 py-8 text-center md:px-8"><div className="font-black">Health Journey by Nook Health Coach</div><div className="mt-1 text-sm text-white/70">หน้า Case Bank สำหรับจัดเก็บและใช้เป็นข้อมูลประกอบการสื่อสารกับลูกค้า</div></div></footer>
    </main>
  );
}
