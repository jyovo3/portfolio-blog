import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const recentPosts = (await getAllPosts()).slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent dark:text-accent-dark">
          Hello, world
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl dark:text-ink-dark">
          我是<span className="text-accent dark:text-accent-dark">一苇</span>。
          <br />
          走走停停，写点东西。
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft dark:text-ink-soft-dark">
          这是一个安放文字的地方 —— 有关{" "}
          <span className="text-ink dark:text-ink-dark">前端工程</span>、
          <span className="text-ink dark:text-ink-dark"> 阅读</span>，以及
          <span className="text-ink dark:text-ink-dark">
            {" "}
            一个普通人认真生活的痕迹</span>
          。欢迎你来坐坐。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/posts"
            className="inline-flex h-10 items-center rounded-[var(--radius-pill)] bg-accent px-5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-soft dark:bg-accent-dark dark:hover:opacity-90"
          >
            阅读文章
          </Link>
          <Link
            href="/about"
            className="inline-flex h-10 items-center rounded-[var(--radius-pill)] border border-line bg-surface px-5 text-sm font-medium text-ink-soft transition hover:border-ink-muted hover:text-ink dark:border-line-dark dark:bg-surface-dark dark:text-ink-soft-dark dark:hover:border-ink-muted-dark dark:hover:text-ink-dark"
          >
            了解我
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      <section aria-labelledby="recent-heading">
        <div className="mb-6 flex items-end justify-between">
          <h2
            id="recent-heading"
            className="font-serif text-2xl font-semibold text-ink dark:text-ink-dark"
          >
            最近的文章
          </h2>
          <Link
            href="/posts"
            className="text-sm text-ink-muted transition hover:text-accent dark:text-ink-muted-dark dark:hover:text-accent-dark"
          >
            查看全部 →
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <p className="text-ink-muted dark:text-ink-muted-dark">
            还没文章，先去写一篇吧～
          </p>
        ) : (
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
