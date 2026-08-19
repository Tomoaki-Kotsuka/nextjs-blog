import type { Metadata } from "next";
import Image from "next/image";
import cover from "@/public/cover.png";
import Link from "next/link";
import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { LikeButton } from "@/app/blog/_components/like-button";
import { Collapsible } from "@/app/blog/_components/collapsible";

export async function generateMetadata({
  params,
}: PageProps<"/blog/[id]">): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(Number(id));

  if (!post) {
    return { title: "記事が見つかりません" };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 100),
    openGraph: {
      title: post.title,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[id]">) {
  const { id } = await params;

  const [post, posts] = await Promise.all([
    getPost(Number(id)),
    getPosts(),
  ]);

  if (!post) {
    notFound();
  }

  const index = posts.findIndex((p) => p.id === post.id);
  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <article>
      <Image src={cover} alt="記事のカバー画像" />
      <h2>{post.title}</h2>
      <p>
        {post.date} / {post.author} / {post.category}
      </p>
      <Collapsible>
        <p>{post.content}</p>
      </Collapsible>
      <LikeButton postId={post.id} />
      <nav>
        {prev && <Link href={`/blog/${prev.id}`}>前の記事</Link>}
        {next && <Link href={`/blog/${next.id}`}>次の記事</Link>}
      </nav>
    </article>
  );
}
