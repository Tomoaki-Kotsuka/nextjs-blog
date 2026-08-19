import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js 入門ブログ",
    template: "%s | Next.js 入門ブログ",
  },
  description: "Next.js を学びながら作っているブログです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className={`${notoSansJP.className} min-h-full flex flex-col`}>
        <header>
          <nav>
            <Link href="/">ホーム</Link>
            <Link href="/blog">ブログ</Link>
            <Link href="/about">このブログについて</Link>
            <Link href="/contact">お問い合わせ</Link>
            <Link href="/login">ログイン</Link>
            <Link href="/mypage">マイページ</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
