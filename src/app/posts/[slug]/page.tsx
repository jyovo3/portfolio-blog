import Link from "next/link";
import { MOCK_POSTS } from "@/lib/mock-posts";
import { formatDate } from "@/lib/formatDate";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return MOCK_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = MOCK_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="max-w-none">
      <Link
        href="/posts"
        className="text-sm text-ink-muted transition hover:text-accent dark:text-ink-muted-dark dark:hover:text-accent-dark"
      >
        ← 返回文章列表
      </Link>

      <header className="mt-6 space-y-3">
        <h1 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl dark:text-ink-dark">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted dark:text-ink-muted-dark">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-[var(--radius-pill)] bg-base-soft px-2.5 py-0.5 text-xs dark:bg-base-soft-dark"
            >
              #{t}
            </span>
          ))}
        </div>
      </header>

      <p className="mt-10 text-lg leading-8 text-ink-soft dark:text-ink-soft-dark">
        {/* 占位正文 —— 接入 MDX 时由真实内容取代 */}
        {post.summary}
      </p>
      <p className="mt-4 text-lg leading-8 text-ink-soft dark:text-ink-soft-dark">
        （这里是占位内容。将来在你把 MDX 接入之后，每篇文章都会在这里展示完整的正文。）
      </p>
    </article>
  );
}
