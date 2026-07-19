import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-[var(--radius-card)] border border-line bg-surface p-6 transition hover:border-line-soft hover:shadow-[var(--shadow-card)] dark:border-line-dark dark:bg-surface-dark dark:hover:border-ink-muted-dark">
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="flex items-center gap-2 text-xs text-ink-muted dark:text-ink-muted-dark">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.minutes} 分钟阅读</span>
        </div>

        <h2 className="mt-2 text-xl font-semibold leading-snug text-ink transition group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
          {post.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-[15px] leading-7 text-ink-soft dark:text-ink-soft-dark">
          {post.summary}
        </p>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[var(--radius-pill)] bg-base-soft px-2.5 py-0.5 text-xs text-ink-muted dark:bg-base-soft-dark dark:text-ink-muted-dark"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
