"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/posts", label: "文章" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/80 backdrop-blur-md dark:border-line-dark dark:bg-base-dark/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-ink transition hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
        >
          一苇
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {NAV.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                    active
                      ? "bg-accent-subtle text-accent dark:bg-accent-subtle-dark dark:text-accent-dark"
                      : "text-ink-soft hover:bg-base-soft hover:text-ink dark:text-ink-soft-dark dark:hover:bg-base-soft-dark dark:hover:text-ink-dark"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
