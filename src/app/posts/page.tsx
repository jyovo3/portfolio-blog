import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "文章",
  description: "一苇写的所有文章",
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl font-semibold text-ink dark:text-ink-dark">
          所有文章
        </h1>
        <p className="mt-2 text-ink-muted dark:text-ink-muted-dark">
          共 {posts.length} 篇 · 想到哪写到哪
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
