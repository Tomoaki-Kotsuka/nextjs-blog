import Link from "next/link";
import { Suspense } from "react";
import { getPosts } from "@/lib/posts";
import { SearchBox } from "@/app/blog/_components/search-box";
import { CategorySummary } from "@/app/blog/_components/category-summary";

export default async function BlogPage({ searchParams }: PageProps<"/blog">) {
  const { q } = await searchParams;
  const posts = await getPosts();

  const keyword = typeof q === "string" ? q.toLowerCase() : "";
  const filtered = keyword
    ? posts.filter((post) => post.title.toLowerCase().includes(keyword))
    : posts;

  return (
    <div>
      <h2>記事一覧</h2>
      <Suspense fallback={<p>検索欄を準備しています...</p>}>
        <SearchBox />
      </Suspense>
      <h3>タグ別の件数</h3>
      <Suspense fallback={<p>集計しています...</p>}>
        <CategorySummary />
      </Suspense>

      <ul>
        {filtered.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
