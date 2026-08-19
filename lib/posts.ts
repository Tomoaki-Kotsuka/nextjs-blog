import "server-only";
import { cache } from "react";

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://dummyjson.com/posts?limit=25", {
    next: { revalidate: 60, tags: ["posts"] },
  });

  if (!res.ok) {
    throw new Error("記事一覧の取得に失敗しました");
  }

  const data = await res.json();
  return data.posts;
}

export const getPost = cache(async (id: number): Promise<Post | null> => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
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
