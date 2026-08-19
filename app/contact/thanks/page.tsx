import Link from "next/link";

export default function ThanksPage() {
  return (
    <main>
      <h1>送信が完了しました</h1>
      <p>お問い合わせありがとうございました。</p>
      <Link href="/">ホームに戻る</Link>
    </main>
  );
}
