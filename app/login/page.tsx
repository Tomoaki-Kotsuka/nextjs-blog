import { login, logout } from "./actions";
import { getSession } from "@/lib/session";

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    return (
      <main>
        <h1>ログイン中</h1>
        <p>{session} さんとしてログインしています。</p>
        <form action={logout}>
          <button type="submit">ログアウト</button>
        </form>
      </main>
    );
  }

  return (
    <main>
      <h1>ログイン</h1>
      <form action={login}>
        <input name="name" type="text" placeholder="お名前" />
        <button type="submit">ログインする</button>
      </form>
    </main>
  );
}
