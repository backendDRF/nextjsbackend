import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    content: "This is the content of my first blog post...",
    date: "2023-05-01",
    excerpt: "This is a short excerpt of my first blog post",
  },
  {
    slug: "second-post",
    title: "My Second Blog Post",
    content: "This is the content of my second blog post...",
    date: "2023-05-15",
    excerpt: "This is a short excerpt of my second blog post",
  },
  {
    slug: "third-post",
    title: "My Third Blog Post",
    content: "This is the content of my third blog post...",
    date: "2023-06-01",
    excerpt: "This is a short excerpt of my third blog post",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}