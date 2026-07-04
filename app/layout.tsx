import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Yuji_Syuku } from "next/font/google";

// 1. フォントの設定を行う
const yujiSyuku = Yuji_Syuku({
  weight: "400",       // Yuji Syukuは400のみ提供されています
  subsets: ["latin"],  // 日本語フォントの場合でも、エラー防止のためにlatinを指定することが多いです
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "世界異常観測システム",
  description: "本システムは、多次元宇宙における現実改変および特異点（アノマリー）を遠隔観測するための機密ネットワークです。 ■ 観測員の皆様へ あなたの任務は、指定された各ワールドの「異常レベル」を監視し、事象の記録を維持することです。観測対象への直接的な干渉はシステム上不可能です。ただ、見つめ続けてください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
