import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/**
 * MDX 渲染组件。用 next-mdx-remote 的服务端编译，
 * 组件本身可用在 Server Component 内（rsc）。
 */
export function MdxRenderer({ source }: { source: string }) {
  const components = {
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        {...props}
        className="mt-12 mb-4 scroll-mt-20 border-b border-line pb-2 !text-2xl dark:border-line-dark"
      />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 {...props} className="mt-8 mb-3 !text-xl" />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p {...props} className="my-4 text-[17px] leading-8 text-ink-soft dark:text-ink-soft-dark" />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul {...props} className="my-4 space-y-2 pl-6 marker:text-accent dark:marker:text-accent-dark" />
    ),
    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
      <li {...props} className="leading-7 text-ink-soft dark:text-ink-soft-dark" />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        {...props}
        className="text-accent underline-offset-4 hover:underline dark:text-accent-dark"
      />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        {...props}
        className="my-6 border-l-4 border-accent/40 bg-accent-subtle px-5 py-3 italic text-ink-soft dark:border-accent-dark/40 dark:bg-accent-subtle-dark dark:text-ink-soft-dark"
      />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => {
      // 只有行内代码走这个分支；代码块由 rehype-pretty-code 接管
      const isInline = !props.className?.includes("language-");
      if (!isInline) return <code {...props} />;
      return (
        <code
          {...props}
          className="rounded bg-base-soft px-1.5 py-0.5 font-mono text-[0.85em] text-accent dark:bg-base-soft-dark dark:text-accent-dark"
        />
      );
    },
  };

  const options: MDXRemoteProps["options"] = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: {
              dark: "github-dark",
              light: "github-light",
            },
          },
        ],
      ],
    },
  };

  return (
    <article className="mdx-content">
      <MDXRemote source={source} components={components} options={options} />
    </article>
  );
}
