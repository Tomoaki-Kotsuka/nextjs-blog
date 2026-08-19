import "server-only";
import { cache } from "react";

export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://api.vercel.app/blog", {
    next: { revalidate: 60, tags: ["posts"] },
  });

  if (!res.ok) {
    throw new Error("記事一覧の取得に失敗しました");
  }

  return res.json();
}

export const getPost = cache(async (id: number): Promise<Post | null> => {
  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    next: { revalidate: 60, tags: ["posts", `post-${id}`] },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
});

export function preloadPost(id: number) {
  void getPost(id);
}
