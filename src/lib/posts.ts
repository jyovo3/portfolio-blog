import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  draft: boolean;
  minutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function parseFrontmatter(file: string, source: string): PostMeta {
  const { data, content } = matter(source);
  const stat = readingTime(content);
  return {
    slug: file.replace(/\.mdx?$/, ""),
    title: data.title ?? "无题",
    summary:
      data.summary ??
      content.trim().replace(/^#+\s+/gm, "").slice(0, 140) + "…",
    date: data.date
      ? new Date(data.date).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10),
    tags: Array.isArray(data.tags)
      ? data.tags
      : typeof data.tags === "string"
        ? data.tags.split(",").map((t: string) => t.trim())
        : [],
    draft: Boolean(data.draft),
    minutes: Math.max(1, Math.ceil(stat.minutes)),
  };
}

async function readdirSafe(dir: string): Promise<string[]> {
  try {
    return await fs.readdir(dir);
  } catch {
    return [];
  }
}

/** 所有文章 frontmatter，按日期倒序 */
export async function getAllPosts(): Promise<PostMeta[]> {
  const files = (await readdirSafe(POSTS_DIR)).filter((f) =>
    /\.mdx?$/.test(f),
  );

  const posts = await Promise.all(
    files.map(async (file) => {
      const source = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
      return parseFrontmatter(file, source);
    }),
  );

  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 读取单篇文章的完整内容 + frontmatter，用于详情页 */
export async function getPostBySlug(slug: string): Promise<
  | { meta: PostMeta; source: string }
  | null
> {
  for (const ext of [".mdx", ".md"]) {
    const file = path.join(POSTS_DIR, slug + ext);
    try {
      const source = await fs.readFile(file, "utf8");
      const meta = parseFrontmatter(slug + ext, source);
      return { meta, source };
    } catch {
      continue;
    }
  }
  return null;
}

/** 动态静态参数生成 —— Next 构建时的路由表 */
export async function getAllPostSlugs(): Promise<string[]> {
  const files = await readdirSafe(POSTS_DIR);
  return files
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}
