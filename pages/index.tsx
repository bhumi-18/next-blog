// pages/index.tsx
import Layout from "../components/Layout";
import Link from "next/link";
import { posts } from "../data/posts";

export default function HomePage() {
  return (
    <Layout title="Home" description="Welcome to Next Blog">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">All Posts</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="w-full h-48">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <Link href={`/posts/${encodeURIComponent(post.id)}`} legacyBehavior>
                <a className="block text-xl font-semibold text-blue-600 hover:underline">
                  {post.title}
                </a>
              </Link>
              <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
              <Link href={`/posts/${encodeURIComponent(post.id)}`} legacyBehavior>
                <a className="mt-3 inline-block text-sm text-indigo-500 hover:underline">
                  Read more →
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}