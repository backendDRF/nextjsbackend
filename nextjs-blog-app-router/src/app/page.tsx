import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="mb-6">This is a blog built with Next.js App Router</p>
      <Link
        href="/blog"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View All Posts
      </Link>
    </div>
  );
}