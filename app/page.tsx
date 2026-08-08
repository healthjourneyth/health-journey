import Link from 'next/link';
import { ArrowRight, Heart, Sparkles, ShieldCheck, Users, Route, MessageCircle } from 'lucide-react';

const benefits = [
  [Sparkles, 'รู้จักตัวเองมากขึ้น', 'เริ่มจากเรื่องที่คุณทำได้จริงในชีวิตประจำวัน'],
  [Route, 'มีเส้นทางของตัวเอง', 'เห็นก้าวเล็ก ๆ และค่อย ๆ เดินไปทีละวัน'],
  [MessageCircle, 'มีเพื่อนคอยช่วย', 'AI Coach และ Health Coach เดินไปกับคุณ'],
];

export default function Home() {
  return <main className="overflow-hidden">
    <section className="relative min-h-[650px] bg-[#fbfaf5]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-[.9fr_1.1fr] md:py-16">
        <div className="relative z-10 md:pl-4">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100">
            <Heart size={16} className="fill-emerald-100"/> เริ่มต้นการเดินทางเพื่อสุขภาพที่ดีขึ้น
          </div>
          <h1 className="max-w-xl text-[2.7rem] font-extrabold leading-[1.12] tracking-tight text-[#17352a] md:text-[4.3rem]">
            สุขภาพดีวันนี้<br/><span className="text-emerald-700">เพื่ออยู่กับคนที่คุณรัก</span><br/>
            <span className="font-serif italic text-[#c99a2e]">ได้นานขึ้น</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">ไม่ต้องเปลี่ยนทุกอย่างในวันเดียว เริ่มจากการรู้จักตัวเอง แล้วค่อย ๆ เดินไปทีละก้าว พร้อมคนที่ช่วยคุณได้จริง</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/assessment" className="group inline-flex items-center gap-3 rounded-full bg-emerald-700 px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-800">
              ✨ เริ่มประเมินสุขภาพฟรี <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1"><ArrowRight size={18}/></span>
            </Link>
            <span className="text-sm font-medium text-slate-500">ใช้เวลาประมาณ 3 นาที</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500"><ShieldCheck size={17} className="text-emerald-700"/> ข้อมูลของคุณเป็นส่วนตัว • ไม่มีคำตอบถูกหรือผิด</div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[4rem] bg-emerald-100/70 blur-2xl"/>
          <div className="relative overflow-hidden rounded-[3rem] bg-white p-2 shadow-2xl ring-1 ring-white/70">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=88" alt="ครอบครัวใช้เวลาร่วมกันอย่างมีความสุข" className="h-[500px] w-full rounded-[2.5rem] object-cover md:h-[590px]"/>
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Heart className="fill-emerald-100"/></div><div><p className="font-bold text-emerald-900">สุขภาพดี ไม่ใช่แค่เพื่อตัวเรา</p><p className="text-lg font-extrabold text-emerald-700">แต่เพื่อคนที่เรารัก ❤️</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-8 md:-mt-10 md:relative md:z-20">
      <div className="grid gap-4 rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-emerald-100 md:grid-cols-3 md:p-6">
        {benefits.map(([Icon, title, desc]: any) => <div key={title} className="flex gap-4 rounded-3xl p-4 md:p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon size={24}/></div>
          <div><h3 className="font-extrabold text-emerald-900">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p></div>
        </div>)}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-16 pt-10">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl bg-emerald-800 p-7 text-white"><Users className="text-lime-300"/><h2 className="mt-5 text-2xl font-extrabold">เดินไปด้วยกัน</h2><p className="mt-2 leading-7 text-emerald-50">ไม่ต้องเก่ง ไม่ต้องพร้อม แค่เริ่มต้น และให้ Health Journey ช่วยเตือนสิ่งเล็ก ๆ ที่สำคัญ</p></div>
        <div className="rounded-3xl bg-[#f7f2e5] p-7"><Route className="text-emerald-700"/><h2 className="mt-5 text-2xl font-extrabold text-emerald-900">เห็นความก้าวหน้าของตัวเอง</h2><p className="mt-2 leading-7 text-slate-600">คะแนนไม่ใช่คำตัดสิน แต่เป็นหมุดหมายให้คุณเห็นว่า วันนี้เราเดินมาไกลแค่ไหนแล้ว</p></div>
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-emerald-100"><MessageCircle className="text-emerald-700"/><h2 className="mt-5 text-2xl font-extrabold text-emerald-900">มีคนช่วยเมื่อไม่รู้จะเริ่มตรงไหน</h2><p className="mt-2 leading-7 text-slate-600">ถามได้ทุกวัน ทั้งเรื่องอาหาร การนอน การเคลื่อนไหว และเป้าหมายของคุณ</p></div>
      </div>
    </section>
  </main>
}
