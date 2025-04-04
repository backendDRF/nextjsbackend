import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </article>
  );
}