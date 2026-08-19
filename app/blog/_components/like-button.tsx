"use client";

import { useState } from "react";

export function LikeButton({ postId }: { postId: number }) {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      記事 {postId} にいいね {count}
    </button>
  );
}
