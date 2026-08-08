import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/app-shell';
export const metadata: Metadata={title:'Health Journey by FG4U',description:'เริ่มต้นดูแลสุขภาพจากการเข้าใจตัวเอง'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body><AppShell>{children}</AppShell></body></html>}
