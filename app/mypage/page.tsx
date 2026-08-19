import { getMyContacts } from "@/lib/dal";

export default async function MyPage() {
  const { userId, items } = await getMyContacts();

  return (
    <main>
      <h1>マイページ</h1>
      <p>{userId} さんのお問い合わせ履歴です。</p>
      {items.length === 0 ? (
        <p>まだお問い合わせがありません。</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
