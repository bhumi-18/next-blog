// pages/index.tsx
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts, Post } from "../data/posts";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Next Blog</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
            <Image
              src={post.coverImage || "/next.svg"} // fallback image
              alt={post.title}
              width={600}
              height={400}
              style={{ borderRadius: "8px" }}
            />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} style={{ color: "blue" }}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts,
    },
  };
};
