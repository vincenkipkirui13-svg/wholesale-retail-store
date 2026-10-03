import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Wholesale & Retail Store', description: 'A modern wholesale and retail product store.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }