import Link from "next/link";
import { Post } from "@/types/post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-500 mb-2">{post.date}</p>
      <p className="text-gray-700">{post.excerpt}</p>
    </div>
  );
}