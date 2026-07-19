"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Props = {
  repo?: `${string}/${string}`;
  repoId?: string;
  category?: string;
  categoryId?: string;
};

/**
 * Giscus 评论区组件
 * 配置来自 https://giscus.app —— 数据存于 GitHub Discussions，零后端
 */
export function GiscusComments({
  repo = "jyovo3/portfolio-blog",
  repoId = "R_kgDOTc1DEg",
  category = "Announcements",
  categoryId = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;
    // 让 Giscus 重建 iframe —— 单页路由切换后更新映射
    const iframe = ref.current.querySelector("iframe.giscus-frame");
    iframe?.remove();

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    if (categoryId) script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "zh-CN");
    ref.current.replaceChildren(script);
  }, [pathname, repo, repoId, category, categoryId]);

  return <div ref={ref} className="mt-16" />;
}
