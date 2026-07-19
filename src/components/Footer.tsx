import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-base-soft/60 dark:border-line-dark dark:bg-base-soft-dark/40">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-5 py-10 sm:flex-row sm:px-6">
        <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
          © {new Date().getFullYear()} 一苇 — 用文字记录成长。
        </p>
        <div className="flex items-center gap-4 text-sm text-ink-muted dark:text-ink-muted-dark">
          <Link
            href="https://github.com/jyovo3"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent dark:hover:text-accent-dark"
          >
            GitHub
          </Link>
          <Link
            href="/feed.xml"
            className="transition hover:text-accent dark:hover:text-accent-dark"
          >
            RSS
          </Link>
        </div>
      </div>
    </footer>
  );
}
