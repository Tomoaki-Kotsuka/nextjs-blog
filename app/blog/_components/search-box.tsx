"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q") ?? "";

  return (
    <input
      type="search"
      defaultValue={keyword}
      placeholder="記事を検索"
      onChange={(e) => router.push(`/blog?q=${e.target.value}`)}
    />
  );
}
