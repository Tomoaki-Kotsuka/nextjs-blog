import { getPosts } from "@/lib/posts";

export async function CategorySummary() {
  const posts = await getPosts();
  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return (
    <ul>
      {[...counts].map(([category, count]) => (
        <li key={category}>
          {category}: {count} 件
        </li>
      ))}
    </ul>
  );
}
