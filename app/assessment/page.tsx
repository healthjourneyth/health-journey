'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Heart, Sparkles, Ruler, Scale, Activity, Droplets } from 'lucide-react';

const steps = [
  { title:'รู้จักตัวเรา: น้ำหนักและส่วนสูง', subtitle:'กรอกตัวเลขง่าย ๆ แล้วดูค่า BMI ของตัวเองทันที', kind:'body' },
  { title:'มาดูสัดส่วนกันต่อ', subtitle:'ใช้รอบเอวและรอบสะโพกเป็นนิ้ว เพื่อดูค่า WHR ของคุณ', kind:'whr' },
  { title:'ลองดูตัวเลขจากผลเลือด', subtitle:'ถ้ามีค่า Triglycerides และ HDL อยู่ในผลเลือด นำมากรอกได้เลย', kind:'metabolic' },
  { title:'วันนี้คุณอยากดูแลเรื่องไหนก่อน?', subtitle:'ไม่มีคำตอบถูกผิด เลือกสิ่งที่ใกล้ตัวที่สุดค่ะ', kind:'life' }
];
const choices = ['ลดรอบเอว/น้ำหนัก','มีแรงและสดชื่นขึ้น','นอนให้ดีขึ้น','สร้างสุขภาพระยะยาว'];

function bmiInfo(v:number){
  if(!v) return null;
  if(v<18.5) return {label:'น้ำหนักน้อยเกินไป',risk:'อาจมีความเสี่ยงต่อภาวะขาดสารอาหาร',tone:'yellow'};
  if(v<23) return {label:'ปกติ',risk:'สุขภาพโดยทั่วไปอยู่ในช่วงที่ดี',tone:'green'};
  if(v<25) return {label:'น้ำหนักเกิน',risk:'เริ่มมีความเสี่ยงต่อโรคเรื้อรังเพิ่มขึ้น',tone:'orange'};
  if(v<30) return {label:'อ้วนระดับ 1',risk:'ควรเริ่มดูแลพฤติกรรมสุขภาพอย่างสม่ำเสมอ',tone:'orange'};
  if(v<35) return {label:'อ้วนระดับ 2',risk:'มีความเสี่ยงต่อโรคเรื้อรังสูงขึ้น',tone:'red'};
  return {label:'อ้วนระดับ 3',risk:'ความเสี่ยงต่อโรคเรื้อรังสูง ควรปรึกษาผู้เชี่ยวชาญ',tone:'red'};
}
function whrInfo(v:number,sex:string){
  if(!v || !sex) return null;
  const high = sex==='ชาย' ? .90 : .80;
  const high2 = sex==='ชาย' ? 1 : .90;
  if(v<high) return {label:'อยู่ในช่วงปกติ',risk:'สัดส่วนเอวต่อสะโพกอยู่ในช่วงที่ดี'};
  if(v<high2) return {label:'เริ่มมีความเสี่ยง',risk:'ลองติดตามรอบเอวและพฤติกรรมสุขภาพต่อเนื่อง'};
  return {label:'ความเสี่ยงสูง',risk:'ควรใส่ใจสุขภาพเมตาบอลิกและพิจารณาปรึกษาผู้เชี่ยวชาญ'};
}
function metabolicInfo(v:number){
  if(!v) return null;
  if(v<1.5) return {label:'ต่ำกว่า 1.5 • อยู่ในช่วงที่ดี',risk:'ตัวชี้วัดนี้ยังไม่เห็นสัญญาณความเสี่ยงสูง'};
  if(v<3) return {label:'1.5–<3 • มีความเสี่ยงเพิ่มขึ้น',risk:'ควรดูแลอาหาร การเคลื่อนไหว การนอน และติดตามผลเลือด'};
  return {label:'≥3 • ความเสี่ยงสูงขึ้น',risk:'ควรปรับพฤติกรรมและปรึกษาผู้เชี่ยวชาญ/ตรวจเพิ่มเติม ไม่ใช้ค่านี้วินิจฉัยโรคเพียงอย่างเดียว'};
}

export default function Assessment(){
 const router=useRouter(); const [step,setStep]=useState(0); const [data,setData]=useState<any>({}); const s=steps[step];
 const set=(k:string,v:string)=>setData((d:any)=>({...d,[k]:v}));
 const bmi=data.weight&&data.height ? Number(data.weight)/(Number(data.height)/100)**2 : 0;
 const whr=data.waist&&data.hip ? Number(data.waist)/Number(data.hip) : 0;
 const metabolic=data.tg&&data.hdl ? Number(data.tg)/Number(data.hdl) : 0;
 const done = s.kind==='body' ? !!(data.weight&&data.height&&data.sex) : s.kind==='whr' ? !!(data.waist&&data.hip) : s.kind==='metabolic' ? !!(data.tg&&data.hdl) : !!data.goal;
 const finish=()=>{
   const record={date:new Date().toISOString(),weight:Number(data.weight),height:Number(data.height),sex:data.sex,waist:Number(data.waist),hip:Number(data.hip),bmi:Number(bmi.toFixed(1)),bmiInfo:bmiInfo(bmi),whr:Number(whr.toFixed(2)),whrInfo:whrInfo(whr,data.sex),tg:Number(data.tg),hdl:Number(data.hdl),metabolic:Number(metabolic.toFixed(2)),metabolicInfo:metabolicInfo(metabolic),goal:data.goal};
   localStorage.setItem('hj_assessment',JSON.stringify(record));
   const old=JSON.parse(localStorage.getItem('hj_health_stats')||'[]'); localStorage.setItem('hj_health_stats',JSON.stringify([record,...old].slice(0,30)));
   router.push('/result');
 };
 return <main className="min-h-screen bg-[#fbf8ef] px-4 py-7 text-[#29463b] md:px-7 md:py-10"><div className="mx-auto max-w-3xl"><div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-2 font-semibold text-[#176646]"><Heart className="fill-[#e8f3df]"/> My Health Journey</div><span className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-[#eee5d4]">STEP {step+1} / 4</span></div><div className="mb-6 h-2 rounded-full bg-[#e7eee1]"><div className="h-2 rounded-full bg-[#087b58] transition-all" style={{width:`${((step+1)/4)*100}%`}}/></div><section className="rounded-[30px] bg-white p-6 shadow-[0_16px_45px_rgba(64,78,55,.08)] ring-1 ring-[#eee5d4] md:p-9"><h1 className="text-[1.75rem] font-semibold leading-tight text-[#176646] md:text-[2.2rem]">{s.title}</h1><p className="mt-2 text-[16px] leading-7 text-[#65756d]">{s.subtitle}</p>
 {s.kind==='body'&&<div className="mt-7 space-y-5"><Field label="น้ำหนัก" unit="กก." value={data.weight} onChange={v=>set('weight',v)} icon={<Scale size={19}/>}/><Field label="ส่วนสูง" unit="ซม." value={data.height} onChange={v=>set('height',v)} icon={<Ruler size={19}/>}/><div><label className="mb-2 block font-semibold">เพศ</label><div className="grid grid-cols-2 gap-3">{['หญิง','ชาย'].map(x=><button key={x} onClick={()=>set('sex',x)} className={`rounded-2xl border p-4 font-semibold ${data.sex===x?'border-[#087b58] bg-[#eef8f1] text-[#087b58]':'border-[#e5e8e2]'}`}>{data.sex===x&&<Check className="mx-auto mb-1" size={17}/>} {x}</button>)}</div></div>{bmi>0&&<MetricPreview title="BMI ของคุณ" value={bmi.toFixed(1)} info={bmiInfo(bmi)}/>}</div>}
 {s.kind==='whr'&&<div className="mt-7 space-y-5"><Field label="รอบเอว" unit="นิ้ว" value={data.waist} onChange={v=>set('waist',v)} icon={<Ruler size={19}/>}/><Field label="รอบสะโพก" unit="นิ้ว" value={data.hip} onChange={v=>set('hip',v)} icon={<Ruler size={19}/>}/><p className="text-sm leading-6 text-[#6b7b72]">วัดรอบเอวบริเวณที่กำหนดของคุณอย่างสบาย ๆ และวัดรอบสะโพกตรงส่วนที่กว้างที่สุด</p>{whr>0&&<MetricPreview title="WHR ของคุณ" value={whr.toFixed(2)} info={whrInfo(whr,data.sex)}/>}</div>}
 {s.kind==='metabolic'&&<div className="mt-7 space-y-5"><Field label="Triglycerides (TG)" unit="mg/dL" value={data.tg} onChange={v=>set('tg',v)} icon={<Activity size={19}/>}/><Field label="HDL" unit="mg/dL" value={data.hdl} onChange={v=>set('hdl',v)} icon={<Droplets size={19}/>}/>{metabolic>0&&<MetricPreview title="TG ÷ HDL ของคุณ" value={metabolic.toFixed(2)} info={metabolicInfo(metabolic)}/>}<div className="rounded-2xl bg-[#fff9ed] p-4 text-sm leading-6 text-[#786848]">ค่านี้เป็นตัวชี้วัดความเสี่ยงเบื้องต้น ไม่ใช่การวินิจฉัยภาวะดื้ออินซูลิน หากมีผลเลือดผิดปกติหรือมีโรคประจำตัว ควรปรึกษาแพทย์หรือผู้เชี่ยวชาญค่ะ</div></div>}
 {s.kind==='life'&&<div className="mt-7 grid gap-3">{choices.map(c=><button key={c} onClick={()=>set('goal',c)} className={`rounded-2xl border p-5 text-left text-[17px] font-semibold ${data.goal===c?'border-[#087b58] bg-[#eef8f1] text-[#087b58]':'border-[#e5e8e2] hover:bg-[#f7faf4]'}`}>{data.goal===c&&<Check className="mb-1" size={18}/>} {c}</button>)}</div>}
 <div className="mt-9 flex justify-between gap-3"><button disabled={step===0} onClick={()=>setStep(step-1)} className="inline-flex items-center gap-2 rounded-full border border-[#e2e6df] px-5 py-3 font-semibold disabled:opacity-30"><ArrowLeft size={17}/>ย้อนกลับ</button>{step<3?<button disabled={!done} onClick={()=>setStep(step+1)} className="inline-flex items-center gap-2 rounded-full bg-[#087b58] px-6 py-3 font-semibold text-white disabled:opacity-40">ไปต่อ <ArrowRight size={17}/></button>:<button disabled={!done} onClick={finish} className="inline-flex items-center gap-2 rounded-full bg-[#087b58] px-6 py-3 font-semibold text-white disabled:opacity-40"><Sparkles size={17}/>ดูผลของฉัน <ArrowRight size={17}/></button>}</div></section></div></main>
}
function Field({label,unit,value,onChange,icon}:any){return <div><label className="mb-2 flex items-center gap-2 font-semibold text-[#3d5148]">{icon}{label}</label><div className="relative"><input type="number" inputMode="decimal" min="0" step="0.1" value={value||''} onChange={e=>onChange(e.target.value)} className="w-full rounded-2xl border border-[#e1e7df] bg-[#fffdfa] px-5 py-4 pr-24 text-xl font-semibold text-[#29463b] outline-none focus:border-[#087b58]" placeholder="ใส่ตัวเลข"/><span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-[#7b887f]">{unit}</span></div></div>}
function MetricPreview({title,value,info}:any){return <div className="rounded-[24px] bg-[#f4f8ed] p-5 ring-1 ring-[#e0ead5]"><div className="text-sm text-[#65756d]">{title}</div><div className="mt-1 flex flex-wrap items-end gap-3"><div className="text-4xl font-semibold text-[#176646]">{value}</div><div className="pb-1 text-[15px] font-semibold text-[#4e735a]">{info?.label}</div></div><p className="mt-2 text-sm leading-6 text-[#5f7067]">{info?.risk}</p></div>}
