export const metadata = {
  title: "项目",
  description: "一苇做过的项目与作品",
};

const PLACEHOLDER_PROJECTS = [
  {
    name: "portfolio-blog",
    desc: "这个博客本身 —— 基于 Next.js + Tailwind 搭建，部署在阿里云。",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl font-semibold text-ink dark:text-ink-dark">
          项目
        </h1>
        <p className="mt-2 text-ink-muted dark:text-ink-muted-dark">
          做过的一些小东西，慢慢变多变好。
        </p>
      </header>

      <div className="grid gap-4">
        {PLACEHOLDER_PROJECTS.map((p) => (
          <article
            key={p.name}
            className="rounded-[var(--radius-card)] border border-line bg-surface p-6 dark:border-line-dark dark:bg-surface-dark"
          >
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark">
              {p.name}
            </h2>
            <p className="mt-1 text-sm leading-6 text-ink-soft dark:text-ink-soft-dark">
              {p.desc}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-[var(--radius-pill)] bg-base-soft px-2.5 py-0.5 text-xs text-ink-muted dark:bg-base-soft-dark dark:text-ink-muted-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
