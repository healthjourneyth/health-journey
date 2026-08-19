'use client';

import Link from 'next/link';
import { ShieldCheck, Sparkles } from 'lucide-react';

type ReviewItem={tag:string;headline:string;detail:string;notes:string[]};

const groups:{id:string;title:string;cases:ReviewItem[]}[]=[
{id:'40plus',title:'รีวิว 40+',cases:[
{tag:'วัย 40+',headline:'2 เดือน ลด 5 กก.',detail:'67 → 62 กก.',notes:['ไมเกรนดีขึ้น','เหนื่อยเพลียระหว่างวันลดลง','อาการภูมิแพ้ลดลง']},
{tag:'วัย 40+',headline:'1 เดือน ลด 5 กก.',detail:'51 → 46 กก.',notes:['อาการกินจุกจิกลดลง','หลับดีขึ้น','ความเครียดลดลง']},
{tag:'วัย 45+',headline:'3 เดือน ลด 6 กก.',detail:'49 → 43 กก.',notes:['มั่นใจขึ้น','รอบเอวหายไป 4 นิ้ว','อาการเหนื่อยเพลียง่ายลดลง']}]},
{id:'50plus',title:'รีวิว 50+',cases:[
{tag:'วัย 60+',headline:'4 เดือน ลด 5 กก.',detail:'71 → 66 กก. • รอบเอวลด 8 ซม.',notes:['ปวดเข่าลดลง','ใส่เสื้อผ้าชุดเก่าได้สบายขึ้น']},
{tag:'วัย 50+',headline:'6 เดือน ลด 19 กก.',detail:'67 → 48 กก.',notes:['ภูมิแพ้ดีขึ้น','ไมเกรนลดลง','สุขภาพดีขึ้น']},
{tag:'วัย 50',headline:'8 เดือน ลด 27 กก.',detail:'85 → 58.5 กก.',notes:['ค่าเบาหวานดีขึ้น','มั่นใจขึ้น','อาการปวดเมื่อยตามตัวลดลง']},
{tag:'วัย 60+',headline:'3 เดือน ลด 11 กก.',detail:'72 → 61 กก.',notes:['เลิกนอนกรน','ลดยาบางรายการ']}]},
{id:'younger',title:'รีวิววัยรุ่น',cases:[
{tag:'วัย 20+',headline:'7 เดือน ลด 30.1 กก.',detail:'123.5 → 93.4 กก.',notes:['มั่นใจขึ้น','กินเป็นมื้อได้ดีขึ้น','ใช้ชีวิตง่ายขึ้น']},
{tag:'วัย 30+',headline:'3 เดือน ลดประมาณ 9–10 กก.',detail:'72++ → 63 กก.',notes:['สุขภาพดีขึ้น','วิ่งออกกำลังกายได้นานขึ้น']}]},
{id:'conditions',title:'รีวิว เบาหวาน ความดัน โรคประจำตัว',cases:[
{tag:'วัยใกล้ 50',headline:'3 เดือน 80 → 69 กก.',detail:'น้ำตาลสะสม 6.5 → 5.4 • ไตรกลีเซอไรด์ 370 → 127',notes:['ไม่ได้ออกกำลังกาย','กินเหมือนเดิม']},
{tag:'วัย 50+',headline:'2 เดือน ลด 6 กก.',detail:'ความดันดีขึ้นจนหมอปรับลดยา',notes:['อารมณ์ดีขึ้น','ไม่หงุดหงิดง่าย','สุขภาพดีขึ้น','เคยกินยาความดันต่อเนื่อง 13 ปี']},
{tag:'วัยใกล้ 70',headline:'4 เดือน ลด 10 กก.',detail:'107 → 97 กก. • น้ำตาลสะสม 6.2 → 5.5',notes:['เบาหวานสงบ','หมอปรับลดยา']}]}
];

export default function ReviewsPage(){return <main className="min-h-screen bg-[#fffdf7] text-[#183e31]">
<section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_8%,#fff0a9,transparent_28%),radial-gradient(circle_at_88%_12%,#dff2c9,transparent_30%),linear-gradient(135deg,#fffdf7_0%,#f4f8e9_100%)]"><div className="relative mx-auto max-w-[1280px] px-5 py-12 md:px-8 md:py-16"><div className="max-w-4xl"><div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-black tracking-[0.18em] text-[#d4771a] ring-1 ring-[#eadfbe]"><Sparkles size={16}/> FEEL GREAT REVIEW</div><h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-[#15593d] md:text-6xl">ผลลัพธ์จากผู้ใช้จริง</h1><p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#596b61] md:text-xl">เรื่องราวการเปลี่ยนแปลงจากผู้ใช้จริง</p><div className="mt-7 flex flex-wrap gap-3"><Link href="#40plus" className="rounded-full bg-[#176646] px-5 py-3 text-sm font-black text-white shadow-lg">รีวิว 40+</Link><Link href="#50plus" className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#176646] ring-1 ring-[#dfe6d7]">รีวิว 50+</Link><Link href="#younger" className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#176646] ring-1 ring-[#dfe6d7]">รีวิววัยรุ่น</Link><Link href="#conditions" className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#176646] ring-1 ring-[#dfe6d7]">รีวิว เบาหวาน ความดัน</Link></div></div></div></section>
{groups.map(group=><section key={group.id} id={group.id} className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-12 md:px-8 md:py-16"><div className="mb-8"><h2 className="text-3xl font-black text-[#15593d] md:text-4xl">{group.title}</h2></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{group.cases.map((item,index)=><article key={`${group.id}-${index}`} className="rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(46,76,49,.08)] ring-1 ring-[#e7e0cd] md:p-7"><div className="inline-flex rounded-full bg-[#eff6e5] px-3 py-1 text-xs font-black text-[#4d7d36]">{item.tag}</div><h3 className="mt-3 text-2xl font-black leading-tight text-[#17583d]">{item.headline}</h3><p className="mt-2 font-bold leading-7 text-[#d87517]">{item.detail}</p><ul className="mt-4 space-y-2 text-sm font-semibold leading-6 text-[#5f6d65]">{item.notes.map(note=><li key={note}>• {note}</li>)}</ul></article>)}</div></section>)}
<section className="mx-auto max-w-[1280px] px-5 pb-12 md:px-8 md:pb-16"><div className="rounded-[34px] bg-[#15593d] p-7 text-white shadow-xl md:p-10"><div className="flex items-center gap-2 text-[#ffe08b]"><ShieldCheck size={20}/><span className="text-sm font-black tracking-[0.15em]">ใช้ข้อมูลอย่างรับผิดชอบ</span></div><p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-white/80">ข้อมูลในรีวิวเป็นประสบการณ์ของผู้รีวิวแต่ละราย ผลลัพธ์ของแต่ละคนอาจแตกต่างกัน</p></div></section></main>}
