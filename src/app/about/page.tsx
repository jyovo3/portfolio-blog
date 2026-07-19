export const metadata = {
  title: "关于",
  description: "关于一苇 —— 作者的个人介绍",
};

export default function AboutPage() {
  return (
    <article className="prose-ink max-w-none space-y-6 font-serif text-lg leading-8 text-ink-soft dark:text-ink-soft-dark">
      <h1 className="!text-3xl !font-bold !text-ink dark:!text-ink-dark">
        关于我
      </h1>
      <p>你好，<strong className="text-ink dark:text-ink-dark">一苇</strong>。</p>
      <p>
        一个正在路上的普通学习者。对前端技术和文字都有不小的兴趣，相信「慢即是快」，喜欢把一件事彻底弄明白后再继续往前走。
      </p>
      <p>
        这是我的小站，会有代码、笔记、以及偶尔冒出来的随想。如果某篇文章偶然帮到了你，那就是写它的最大意义。
      </p>

      <hr className="!my-8 border-line dark:border-line-dark" />

      <h2 className="!text-2xl !font-bold !text-ink dark:!text-ink-dark">
        技术栈
      </h2>
      <ul className="list-none space-y-1 pl-0">
        <li>◇ TypeScript / React / Next.js（正在学）</li>
        <li>◇ Tailwind CSS / Node.js</li>
        <li>◇ 偶尔写写 Python / 冒号后面加分号让人安心</li>
      </ul>

      <h2 className="!text-2xl !font-bold !text-ink dark:!text-ink-dark">
        联系我
      </h2>
      <ul className="list-none space-y-1 pl-0">
        <li>◇ GitHub: jyovo3</li>
        <li>◇ Email: （待填）</li>
      </ul>
    </article>
  );
}
