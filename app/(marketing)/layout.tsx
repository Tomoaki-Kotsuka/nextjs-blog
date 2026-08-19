export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <footer>
        <p>このブログは Next.js の学習のために作られています。</p>
      </footer>
    </main>
  );
}
