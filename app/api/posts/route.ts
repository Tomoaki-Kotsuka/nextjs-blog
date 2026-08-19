import { getPosts } from "@/lib/posts";

export async function GET() {
  const posts = await getPosts();

  return Response.json(
    posts.map((post) => ({
      id: post.id,
      title: post.title,
      category: post.category,
    }))
  );
}

export async function POST(request: Request) {
  const body = await request.json();

  if (typeof body.title !== "string") {
    return Response.json({ error: "title は必須です" }, { status: 400 });
  }

  return Response.json({ received: body.title }, { status: 201 });
}
