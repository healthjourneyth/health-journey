import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FileHeart,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
} from 'lucide-react';

const LINE_URL = 'https://lin.ee/onjp01B';

const benefits = [
  { title: 'ข้อมูลพื้นฐาน', text: 'อายุ น้ำหนัก ส่วนสูง และเป้าหมายสุขภาพ', Icon: UserRound },
  { title: 'เรื่องสุขภาพ', text: 'โรคประจำตัว อาการ และสิ่งที่อยากให้โค้ชรู้', Icon: Heart },
  { title: 'ยาที่ทานอยู่', text: 'ชื่อยาและระยะเวลาที่ทาน เพื่อประกอบการพูดคุย', Icon: FileHeart },
  { title: 'ผลตรวจสุขภาพ', text: 'ถ้ามี สามารถแนบผลตรวจล่าสุดให้โค้ชช่วยดูเบื้องต้น', Icon: Sparkles },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf8ef] text-[#29463b]">
      <section className="mx-auto max-w-[1200px] px-5 pb-8 pt-6 md:px-8 md:pt-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[17px] font-semibold text-[#176646]">
            <Heart className="fill-[#e8f3df]" />
            Health Journey
          </div>
          <span className="rounded-full bg-white px-4 py-2 text-sm text-[#65756d] ring-1 ring-[#eee5d4]">
            Health Coach
          </span>
        </nav>

        <div className="mt-7 grid overflow-hidden rounded-[36px] bg-white shadow-[0_20px_60px_rgba(64,78,55,.09)] ring-1 ring-[#eee5d4] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-center px-7 py-11 md:px-12 md:py-14">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f1f6e8] px-4 py-2 text-sm font-medium text-[#477552]">
              <Sparkles size={16} />
              ประเมินสุขภาพเบื้องต้น
            </div>
            <h1 className="mt-5 max-w-[650px] text-[2.15rem] font-semibold leading-[1.25] tracking-tight text-[#315047] md:text-[3.35rem]">
              รู้ก่อนว่า
              <br />
              <span className="text-[#24774f]">สุขภาพของคุณ</span>
              <br />
              ควรเริ่มดูแลตรงไหน
            </h1>
            <p className="mt-5 max-w-[600px] text-[17px] leading-8 text-[#5b6b62] md:text-[19px]">
              ตอบคำถามสั้น ๆ เกี่ยวกับตัวคุณ เป้าหมาย สุขภาพ ยาที่ทานอยู่ และผลตรวจถ้ามี
              แล้วให้ Health Coach ช่วยมองภาพรวมเบื้องต้นไปด้วยกัน
            </p>
            <Link
              href="/assessment"
              className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#087b58] px-7 py-4 text-[17px] font-semibold text-white shadow-lg"
            >
              เริ่มประเมินสุขภาพฟรี <ArrowRight size={18} />
            </Link>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#65756d]">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#6b9c57]" />
                ใช้เวลาไม่กี่นาที
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#6b9c57]" />
                ไม่มีคำตอบถูกผิด
              </span>
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden bg-[#eef4e8] p-6 md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dfead3]" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#f3e7d4]" />
            <div className="relative flex h-full items-center justify-center">
              <div className="w-full max-w-[390px] rounded-[30px] bg-white p-6 shadow-[0_20px_55px_rgba(64,78,55,.12)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#728078]">Health Profile</div>
                    <div className="mt-1 text-xl font-semibold text-[#176646]">ภาพรวมของคุณ</div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1f6e8] text-[#5c9852]">
                    <FileHeart size={21} />
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {['ข้อมูลพื้นฐาน', 'เป้าหมายสุขภาพ', 'ยาและสุขภาพ', 'ผลตรวจ (ถ้ามี)'].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#fbfaf4] p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4e5] text-sm font-semibold text-[#4f8555]">
                        {index + 1}
                      </div>
                      <span className="font-medium text-[#46594f]">{item}</span>
                      <CheckCircle2 className="ml-auto text-[#73a35d]" size={18} />
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#eef8f3] p-4 text-sm leading-6 text-[#4f6d5c]">
                  ข้อมูลเหล่านี้ช่วยให้โค้ชคุยกับคุณได้ตรงจุดมากขึ้น ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-7 md:px-8">
        <div className="text-center">
          <div className="text-sm font-medium text-[#6d7c73]">เราอยากรู้จักคุณมากกว่าแค่ตัวเลขบนตาชั่ง</div>
          <h2 className="mt-2 text-[1.9rem] font-semibold text-[#176646] md:text-[2.35rem]">ข้อมูลที่ช่วยให้โค้ชเข้าใจคุณ</h2>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, Icon }) => (
            <div key={title} className="rounded-[26px] bg-white p-6 ring-1 ring-[#eee5d4]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1f6e8] text-[#5b9855]">
                <Icon size={21} />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-[#405348]">{title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#65756d]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-7 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[30px] bg-[#176646] p-7 text-white md:p-9">
            <div className="text-sm text-[#d9f0d2]">จากแบบประเมินสู่การดูแล</div>
            <h2 className="mt-2 text-[1.9rem] font-semibold leading-tight">เราไม่ได้เอาตัวเลขมาตัดสินคุณ</h2>
            <p className="mt-4 leading-7 text-white/85">
              ข้อมูลที่คุณให้จะเป็นเพียงจุดเริ่มต้น เพื่อช่วยให้ Health Coach มองเห็นภาพรวมและชวนคุณคุยว่าควรเริ่มดูแลเรื่องไหนก่อน
            </p>
            <Link href="/assessment" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#176646]">
              เริ่มประเมิน <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-[30px] bg-white p-7 ring-1 ring-[#eee5d4] md:p-9">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1f6e8] text-[#5b9855]">
                <MessageCircle size={21} />
              </div>
              <div>
                <div className="text-sm text-[#718078]">หลังส่งข้อมูล</div>
                <h2 className="text-[1.6rem] font-semibold text-[#176646]">คุยต่อกับ Health Coach</h2>
              </div>
            </div>
            <p className="mt-4 leading-7 text-[#5f7067]">
              ถ้าต้องการคุยเรื่องสุขภาพของตัวเองแบบเจาะจง สามารถติดต่อผ่าน LINE ได้ค่ะ
            </p>
            <a href={LINE_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#087b58] px-6 py-3.5 font-semibold text-white">
              เปิด LINE คุยกับโค้ช <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1200px] px-5 pb-10 pt-6 text-center text-xs leading-6 text-[#7a867f] md:px-8">
        การประเมินนี้เป็นการประเมินสุขภาพเบื้องต้น ไม่ใช่การวินิจฉัยโรค และไม่ควรใช้แทนคำแนะนำจากแพทย์ โดยเฉพาะเรื่องยาและการรักษา
      </footer>
    </main>
  );
}
