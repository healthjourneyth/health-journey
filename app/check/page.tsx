'use client';
import {useMemo,useState} from 'react';
import Link from 'next/link';
import {ArrowRight,Calculator,Heart,ShieldCheck,RotateCcw} from 'lucide-react';

function bmiCategory(b:number){
  if(b<18.5)return ['น้ำหนักน้อย','ควรดูร่วมกับโภชนาการและสุขภาพโดยรวม','yellow'];
  if(b<23)return ['อยู่ในช่วงปกติ','เป็นข้อมูลคัดกรองเบื้องต้น ยังควรดูร่วมกับรอบเอวและปัจจัยสุขภาพอื่น ๆ','green'];
  if(b<25)return ['เริ่มมีแนวโน้มน้ำหนักเกิน','ลองดูร่วมกับรอบเอวและพฤติกรรมการกินเพื่อเห็นภาพสุขภาพชัดขึ้น','orange'];
  if(b<30)return ['น้ำหนักเกิน','BMI เป็นตัวชี้วัดคัดกรองเบื้องต้น ควรดูร่วมกับรอบเอวและปัจจัยสุขภาพอื่น ๆ','orange'];
  return ['BMI สูง','ควรประเมินสุขภาพโดยรวมเพิ่มเติม โดยเฉพาะถ้ามีโรคประจำตัวหรือใช้ยาอยู่','red'];
}
function whrCategory(v:number,sex:string){
  if(!sex)return ['ผล WHR','เลือกเพศเพื่อดูเกณฑ์ประกอบ','gray'];
  const high=sex==='หญิง'?v>=0.85:v>=0.90;
  return high?['รอบเอวเมื่อเทียบกับสะโพกค่อนข้างสูง','ค่า WHR ตั้งแต่ 0.85 ในผู้หญิง หรือ 0.90 ในผู้ชาย เป็นเกณฑ์ที่ WHO ใช้ประกอบการประเมินความเสี่ยงที่เพิ่มขึ้น','orange']:['อยู่ต่ำกว่าเกณฑ์อ้างอิง WHO','ค่า WHR ต่ำกว่า 0.85 ในผู้หญิง หรือ 0.90 ในผู้ชาย','green'];
}
export default function QuickCheck(){
 const [weight,setWeight]=useState(''); const [height,setHeight]=useState(''); const [waist,setWaist]=useState(''); const [hip,setHip]=useState(''); const [sex,setSex]=useState('');
 const bmi=useMemo(()=>weight&&height?Number(weight)/(Number(height)/100)**2:0,[weight,height]);
 const whr=useMemo(()=>waist&&hip?Number(waist)/Number(hip):0,[waist,hip]);
 const bc=bmi?bmiCategory(bmi):null; const wc=whr?whrCategory(whr,sex):null;
 const reset=()=>{setWeight('');setHeight('');setWaist('');setHip('');setSex('')};
 return <main className="min-h-screen bg-[#fffdf5] text-[#214a38]">
  <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_10%,#fff0aa,transparent_38%),radial-gradient(circle_at_85%_5%,#dff3bd,transparent_35%)] -z-0"/>
  <header className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8"><Link href="/" className="flex items-center gap-2 font-black text-[#176646]"><Heart className="fill-[#ffd35a]"/> Health Journey <span className="hidden text-sm font-semibold text-[#9a762b] sm:inline">by FG4U</span></Link><Link href="/assessment" className="text-sm font-bold text-[#176646] hover:text-[#ef7417]">ประเมินสุขภาพแบบละเอียด →</Link></header>
  <section className="relative mx-auto max-w-4xl px-5 pb-10 pt-8 text-center md:px-8 md:pt-14"><div className="text-sm font-black tracking-[0.2em] text-[#ef7417]">QUICK HEALTH CHECK</div><h1 className="mt-3 text-4xl font-black leading-tight text-[#145b3f] md:text-6xl">เช็ก BMI & WHR<br/><span className="text-[#ef7417]">รู้จักร่างกายตัวเองในไม่กี่นาที</span></h1><p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#65766c] md:text-lg">กรอกน้ำหนัก ส่วนสูง รอบเอว และรอบสะโพก เพื่อดูค่าประเมินเบื้องต้นได้ทันที</p></section>
  <section className="relative mx-auto max-w-5xl px-5 pb-16 md:px-8"><div className="rounded-[34px] bg-white p-6 shadow-xl ring-1 ring-[#e8e4d4] md:p-10"><div className="grid gap-5 sm:grid-cols-2"><Field label="น้ำหนัก" unit="กก." value={weight} onChange={setWeight} placeholder="เช่น 65"/><Field label="ส่วนสูง" unit="ซม." value={height} onChange={setHeight} placeholder="เช่น 160"/><Field label="รอบเอว" unit="นิ้ว" value={waist} onChange={setWaist} placeholder="เช่น 32"/><Field label="รอบสะโพก" unit="นิ้ว" value={hip} onChange={setHip} placeholder="เช่น 40"/></div><p className="mt-3 text-center text-sm font-medium text-[#718078]">ใช้สายวัดวัดรอบเอวและรอบสะโพกเป็นนิ้วได้เลยค่ะ</p><div className="mt-6"><label className="mb-2 block text-base font-black text-[#355447]">เพศ</label><div className="grid grid-cols-2 gap-3"><button type="button" onClick={()=>setSex('หญิง')} className={`rounded-2xl border-2 p-4 text-lg font-bold ${sex==='หญิง'?'border-[#ef7417] bg-[#fff5df] text-[#ef7417]':'border-[#e5e8df]'}`}>หญิง</button><button type="button" onClick={()=>setSex('ชาย')} className={`rounded-2xl border-2 p-4 text-lg font-bold ${sex==='ชาย'?'border-[#ef7417] bg-[#fff5df] text-[#ef7417]':'border-[#e5e8df]'}`}>ชาย</button></div></div>
  {(bc||wc)&&<div className="mt-8 grid gap-5 md:grid-cols-2"><Result title="BMI" value={bmi?bmi.toFixed(1):'—'} info={bc}/><Result title="WHR" value={whr?whr.toFixed(2):'—'} info={wc}/></div>}
  <div className="mt-7 flex flex-col items-center gap-3"><button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-full border-2 border-[#dfe6d7] bg-white px-6 py-3 font-bold text-[#52705f]"><RotateCcw size={18}/> ล้างข้อมูล</button><Link href="/assessment" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#087b58] to-[#39945f] px-7 py-4 text-lg font-black text-white shadow-lg">อยากประเมินสุขภาพต่อ <ArrowRight size={21}/></Link></div>
  <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#fff8df] p-4 text-sm leading-6 text-[#75613c]"><ShieldCheck className="mt-0.5 shrink-0 text-[#5d8c4c]" size={20}/><span>ข้อมูลนี้เป็นการคัดกรองเบื้องต้น ไม่ใช่การวินิจฉัยโรค และไม่ควรใช้แทนคำแนะนำจากแพทย์</span></div>
  </div></section>
  <footer className="border-t border-[#e8e1cf] bg-[#f7f5e9] py-7 text-center text-sm text-[#718078]">Health Journey by FG4U · Quick Health Check</footer>
 </main>
}
function Field({label,unit,value,onChange,placeholder}:{label:string;unit:string;value:string;onChange:(v:string)=>void;placeholder:string}){return <label className="block"><span className="mb-2 block text-base font-black text-[#355447]">{label}</span><div className="relative"><input inputMode="decimal" type="number" min="0" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-2xl border-2 border-[#e4e8df] bg-[#fffdfa] px-5 py-4 pr-16 text-lg font-semibold outline-none focus:border-[#ef7417]"/><span className="absolute right-5 top-1/2 -translate-y-1/2 font-bold text-[#829087]">{unit}</span></div></label>}
function Result({title,value,info}:{title:string;value:string;info:any}){return <div className="rounded-[28px] bg-gradient-to-br from-[#eef7df] via-[#fff8df] to-[#fff0d8] p-6 ring-1 ring-[#e0e9cf]"><div className="flex items-center justify-between"><div className="flex items-center gap-2 text-sm font-black tracking-widest text-[#ef7417]"><Calculator size={18}/>{title}</div><div className="text-4xl font-black text-[#176646]">{value}</div></div>{info&&<><div className="mt-4 text-xl font-black text-[#176646]">{info[0]}</div><p className="mt-2 text-sm font-medium leading-6 text-[#5b6c63]">{info[1]}</p></>}</div>}
