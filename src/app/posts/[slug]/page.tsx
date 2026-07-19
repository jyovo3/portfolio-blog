import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";
import { MdxRenderer } from "@/components/MdxRenderer";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getPostBySlug(slug);
  if (!result) return {};
  return { title: result.meta.title, description: result.meta.summary };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getPostBySlug(slug);
  if (!result) notFound();
  const { meta, source } = result;

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
          {meta.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted dark:text-ink-muted-dark">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span aria-hidden>·</span>
          <span>{meta.minutes} 分钟阅读</span>
          {meta.tags.map((t) => (
            <span
              key={t}
              className="rounded-[var(--radius-pill)] bg-base-soft px-2.5 py-0.5 text-xs dark:bg-base-soft-dark"
            >
              #{t}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-10">
        <MdxRenderer source={source} />
      </div>
    </article>
  );
}
