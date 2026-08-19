import styles from "./blog.module.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className={styles.header}>
        <h1>ブログ</h1>
      </div>
      <nav>
        <p>ブログ内の共通メニューがここに入ります。</p>
      </nav>
      <section>{children}</section>
    </main>
  );
}
