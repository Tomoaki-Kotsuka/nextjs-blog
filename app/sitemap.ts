import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const postUrls = posts.map((post) => ({
    url: `http://localhost:3000/blog/${post.id}`,
    lastModified: post.date,
  }));

  return [
    { url: "http://localhost:3000", lastModified: new Date() },
    { url: "http://localhost:3000/blog", lastModified: new Date() },
    ...postUrls,
  ];
}
