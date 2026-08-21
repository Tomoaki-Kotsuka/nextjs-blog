import { getPosts } from "@/lib/posts";

export async function CategorySummary() {
  const posts = await getPosts();
  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.tags[0], (counts.get(post.tags[0]) ?? 0) + 1);
  }

  return (
    <ul>
      {[...counts].map(([tag, count]) => (
        <li key={tag}>
          {tag}: {count} 件
        </li>
      ))}
    </ul>
  );
}
