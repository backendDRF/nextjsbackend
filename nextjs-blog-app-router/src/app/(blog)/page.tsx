import { posts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}