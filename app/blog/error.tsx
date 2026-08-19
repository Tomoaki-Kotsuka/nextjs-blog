"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>記事の表示に失敗しました</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>もう一度試す</button>
    </div>
  );
}
