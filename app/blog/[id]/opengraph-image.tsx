import { ImageResponse } from "next/og";
import { getPost } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "記事のカバー画像";

export default async function Image({ params }: PageProps<"/blog/[id]">) {
  const { id } = await params;
  const post = await getPost(Number(id));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#ffffff",
          fontSize: 56,
        }}
      >
        <div style={{ color: "#0070f3", fontSize: 28 }}>Next.js 入門ブログ</div>
        <div>{post?.title ?? "記事が見つかりません"}</div>
      </div>
    ),
    size
  );
}
