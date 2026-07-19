export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
};

/**
 * 占位数据 —— 接入 MDX 后由真实文章取代
 */
export const MOCK_POSTS: Post[] = [
  {
    slug: "hello-world",
    title: "开了这个博客",
    summary:
      "想了很久，终于搭起了一个属于自己的小小角落。把一些关于技术、阅读和生活的想法放在这里。也许不会每天都有空更新，但只要落笔下就值得。",
    date: "2026-07-19",
    readingTime: "2 分钟",
    tags: ["随想"],
  },
  {
    slug: "learn-nextjs",
    title: "零基础学 Next.js：我踩过的那些坑",
    summary:
      "从用 create-next-app 开始，到第一次成功部署到阿里云，这篇文章完整记录了整个过程中我碰到的每一个错误和每一个让人豁然开朗的瞬间。",
    date: "2026-07-12",
    readingTime: "8 分钟",
    tags: ["Next.js", "前端"],
  },
  {
    slug: "first-project",
    title: "我做的第一个真正有用的东西",
    summary:
      "一个给朋友帮上忙的小工具。代码不多，逻辑也不复杂，但从想法到落地的过程，让我第一次真正理解了「做项目」这三个字的分量。",
    date: "2026-07-04",
    readingTime: "5 分钟",
    tags: ["项目", "反思"],
  },
];
