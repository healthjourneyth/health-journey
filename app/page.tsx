'use client';
import Link from 'next/link';
import { ArrowRight, Check, Heart, Leaf, Route, Droplets, Footprints, Moon, Salad, ShieldCheck, Sparkles, Users } from 'lucide-react';

const LINE_URL = 'https://lin.ee/onjp01B';
const LINE_QR = `https://quickchart.io/qr?text=${encodeURIComponent(LINE_URL)}&size=220&margin=2`;

const today = [
  { icon: Droplets, title: 'ดื่มน้ำ', sub: 'เป้าหมาย 2.5 ลิตร', value: '1.5 ลิตร วันนี้' },
  { icon: Footprints, title: 'เดิน', sub: 'เป้าหมาย 6,000 ก้าว', value: '3,200 ก้าว วันนี้' },
  { icon: Salad, title: 'ผัก', sub: 'อย่างน้อย 2 มื้อ', value: '1 มื้อ วันนี้' },
  { icon: Moon, title: 'การนอน', sub: 'เป้าหมาย 7–8 ชั่วโมง', value: '6.2 ชั่วโมง เมื่อคืน' },
];

const benefits = [
  ['เข้าใจสุขภาพตัวเองง่ายขึ้น', 'รู้ว่าร่างกายกำลังบอกอะไรเรา', Heart],
  ['ทำสิ่งเล็ก ๆ ได้ทุกวัน', 'เริ่มจากสิ่งที่ทำได้จริง ไม่ต้องสมบูรณ์แบบ', Leaf],
  ['มีเพื่อนช่วยคิด', 'วันที่ไม่ไหวก็ยังมีคนเดินไปด้วยกัน', Users],
  ['ค่อย ๆ แข็งแรงขึ้น', 'เพื่อใช้ชีวิตกับคนที่เรารักได้นานขึ้น', Sparkles],
];

export default function Home() {
  return (
    <main className="bg-[#fbf8ef] text-[#263f35]">
      <section className="mx-auto max-w-[1500px] px-4 pt-5 md:px-7 md:pt-7">
        <div className="overflow-hidden rounded-[34px] bg-white shadow-[0_18px_55px_rgba(64,78,55,.09)] ring-1 ring-[#eee5d4]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-center px-7 py-9 md:px-12 md:py-11">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#f1f6e8] px-4 py-2 text-[14px] font-medium text-[#477552]"><Leaf size={16}/> Your Health Journey</div>
              <h1 className="max-w-[560px] text-[1.85rem] font-semibold leading-[1.32] tracking-[-.02em] text-[#315047] md:text-[2.35rem]">
                สุขภาพดีวันนี้<br/><span className="text-[#24774f]">เพื่ออยู่กับคนที่คุณรัก</span><br/><span className="font-serif font-medium italic text-[#c89635]">ไปนาน ๆ</span> <span className="text-[#c89635]">♡</span>
              </h1>
              <p className="mt-4 max-w-[560px] text-[18px] leading-8 text-[#4d5f56]">เริ่มจากเข้าใจสุขภาพของตัวเองง่าย ๆ แล้วค่อย ๆ ดูแลตัวเองในแบบที่เหมาะกับชีวิตเรา</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/assessment" className="group inline-flex items-center gap-3 rounded-full bg-[#087b58] px-6 py-3.5 text-[17px] font-semibold text-white shadow-lg shadow-[#087b58]/15 transition hover:-translate-y-0.5">เริ่มประเมินสุขภาพฟรี <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1"><ArrowRight size={17}/></span></Link>
                <span className="text-[14px] text-[#5c6b63]">ใช้เวลาประมาณ 3–5 นาที</span>
              </div>
              <div className="mt-5 flex items-center gap-2 text-[14px] font-medium text-[#53645b]"><ShieldCheck size={17} className="text-[#6b9c57]"/> ข้อมูลของคุณเป็นความลับ • เริ่มได้โดยไม่ต้องเก่งเรื่องสุขภาพ</div>
            </div>
            <div className="relative aspect-[1.45] overflow-hidden bg-[#f8f2e7] lg:aspect-auto lg:min-h-[430px]">
              <img src="/family-hero.jpg" alt="ครอบครัวหลายวัยใช้เวลาร่วมกันอย่างมีความสุข" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0]/15 via-transparent to-[#2b5d43]/5"/>
              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white/92 p-4 shadow-lg backdrop-blur-sm ring-1 ring-white">
                <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4eedc] text-[#c89635]"><Heart size={20} className="fill-[#f1dfac]"/></div><div><p className="text-[14px] text-[#64736b]">สุขภาพดี ไม่ใช่แค่เพื่อตัวเรา</p><p className="text-[19px] font-semibold text-[#236746]">แต่เพื่อคนที่เรารัก ❤️</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 py-5 md:px-7"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title,text,Icon])=>{const I=Icon as typeof Heart; return <div key={title as string} className="rounded-[24px] bg-white p-5 ring-1 ring-[#eee5d4]"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2f7e9] text-[#5c9852]"><I size={20}/></div><div className="mt-3 text-[17px] font-semibold text-[#405348]">{title as string}</div><div className="mt-1 text-[15px] leading-6 text-[#5b6b62]">{text as string}</div></div>})}</div></section>

      <section className="mx-auto max-w-[1500px] px-4 pb-5 md:px-7"><div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
        <div className="rounded-[30px] bg-white p-6 shadow-[0_12px_45px_rgba(55,75,58,.06)] ring-1 ring-[#eee5d4]">
          <div className="flex items-center justify-between gap-4"><div><div className="text-[15px] text-[#5f7067]">วันนี้ของคุณ</div><h2 className="mt-1 text-[27px] font-semibold text-[#176646]">วันนี้เริ่มต้นดูแลสุขภาพง่าย ๆ ด้วยกันนะคะ 🌿</h2></div><span className="shrink-0 rounded-full bg-[#f1f6e8] px-3 py-1.5 text-[14px] font-medium text-[#66825b]">ง่าย ๆ 4 เรื่อง</span></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">{today.map(({icon:Icon,title,sub,value})=><div key={title} className="rounded-[22px] border border-[#eee9dd] bg-[#fffdfa] p-4"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf8f3] text-[#26956f]"><Icon size={20}/></div><div><div className="text-[17px] font-semibold text-[#3e5148]">{title}</div><div className="text-[14px] text-[#627169]">{sub}</div></div></div><div className="mt-3 flex items-center justify-between"><span className="text-[15px] font-medium text-[#4e6057]">{value}</span><button aria-label={`บันทึก ${title}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bfe4d2] text-[#15906c] hover:bg-[#eff9f2]"><Check size={17}/></button></div></div>)}</div>
          <div className="mt-4 rounded-[20px] bg-[#f8f4e8] px-4 py-3.5 text-[15px] text-[#53645b]"><span className="font-semibold text-[#236746]">เลือกทำแค่ 1 อย่างก่อนก็ได้ค่ะ ❤️</span> ความสม่ำเสมอสำคัญกว่าความสมบูรณ์แบบ</div>
        </div>
        <div className="rounded-[30px] bg-[#f6f8ee] p-6 ring-1 ring-[#e4ead7]"><div className="flex items-center justify-between"><div><div className="text-[15px] text-[#718078]">My Health Journey</div><h2 className="mt-1 text-[27px] font-semibold text-[#176646]">ทุกก้าวเล็ก ๆ มีความหมาย</h2></div><Route className="text-[#78a45c]"/></div><div className="mt-8 flex items-center px-2"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-4 ring-[#deebd0] text-[#6f9e55]"><Leaf size={21}/></div><div className="h-1 flex-1 bg-[#b9d49c]"/><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#df9d9d]"><Heart size={18}/></div><div className="h-1 flex-1 bg-[#d8dfd0]"/><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#b6b9ae]"><Sparkles size={18}/></div></div><div className="mt-3 grid grid-cols-3 text-center text-[14px] font-medium text-[#617067]"><span>เริ่มต้น</span><span>ดูแลต่อเนื่อง</span><span>แข็งแรงขึ้น</span></div><div className="mt-6 flex items-center gap-3 rounded-[22px] bg-white/85 p-4"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf5df] text-[#6d9954]"><Check size={21}/></div><div><div className="text-[17px] font-semibold text-[#496050]">คุณเริ่มต้นแล้วค่ะ 🌱</div><div className="mt-1 text-[14px] leading-6 text-[#65736b]">วันนี้ไม่ต้องทำทุกอย่าง แค่เลือกหนึ่งก้าวที่ทำได้จริง</div></div></div><Link href="/journey" className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-[#35764e]">ดูเส้นทางของฉัน <ArrowRight size={16}/></Link></div>
      </div></section>

      <section className="mx-auto max-w-[1500px] px-4 pb-12 md:px-7"><div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[30px] bg-white p-6 ring-1 ring-[#eee5d4]"><div className="flex items-center justify-between gap-5"><div><div className="text-[15px] text-[#68766e]">คะแนนสุขภาพของคุณ</div><h2 className="mt-1 text-[25px] font-semibold text-[#176646]">เริ่มต้นจากตัวเรา ไม่ต้องเปรียบเทียบกับใคร</h2></div><div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border-[9px] border-[#e5efd5] border-t-[#6d9b55] text-[27px] font-semibold text-[#3f7651]">68</div></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{['โภชนาการ 72','การเคลื่อนไหว 55','การนอน 60','ความเครียด 75'].map(x=><div key={x} className="rounded-2xl bg-[#fbfaf4] p-3 text-[15px] font-medium text-[#596960]">{x}</div>)}</div><Link href="/result" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f1f6e8] px-4 py-2.5 text-[15px] font-semibold text-[#3d744d]">ดูเส้นทางสุขภาพของฉัน <ArrowRight size={16}/></Link></div>
        <div className="rounded-[30px] bg-[#fffdf7] p-6 ring-1 ring-[#eee5d4]"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e7d4] text-[#c89635]"><Heart size={21}/></div><div><div className="text-[15px] text-[#6d7b73]">อยากมีคนช่วยดูแลต่อไหม?</div><h2 className="text-[25px] font-semibold text-[#176646]">จองคิวปรึกษาโค้ชส่วนตัว ❤️</h2></div></div><p className="mt-4 text-[16px] leading-7 text-[#52645a]">ถ้าอยากคุยเรื่องสุขภาพของตัวเองแบบเจาะจง กดจองคิวผ่าน LINE ได้เลยค่ะ</p>
          <div className="mt-5 md:hidden"><a href={LINE_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#087b58] px-6 py-3.5 text-[17px] font-semibold text-white shadow-lg shadow-[#087b58]/15 transition hover:-translate-y-0.5">เปิด LINE OA เพื่อคุยกับโค้ช <ArrowRight size={18}/></a></div>
          <div className="mt-5 hidden items-center gap-5 rounded-[24px] bg-[#f7f8ef] p-4 md:flex"><div className="shrink-0 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-[#e8eadf]"><img src={LINE_QR} alt="QR Code สำหรับเพิ่มเพื่อน LINE OA FG4U" width={150} height={150} className="h-[150px] w-[150px]"/></div><div><div className="text-[18px] font-semibold text-[#176646]">เปิด LINE OA ผ่านคอมพิวเตอร์</div><p className="mt-1 text-[14px] leading-6 text-[#65736b]">ใช้โทรศัพท์สแกน QR Code นี้ แล้วเพิ่มเพื่อน LINE OA เพื่อคุยกับ Health Coach ได้เลยค่ะ</p><div className="mt-2 text-[13px] text-[#78857e]">LINE OA • FG4U</div></div></div>
        </div>
      </div></section>
    </main>
  );
}
